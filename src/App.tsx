import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'
import { ConfigProvider, Spin } from 'antd'

import '/@/assets/aliFont/iconfont.css'

import '/@/design/index.less'

import { store } from '/@/redux/index'
import { getMenuListAction } from '/@/redux/modules/menu/action'
import { Router, useLazy } from '/@/router/index'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const App = (props: any) => {
  const [color, setColor] = useState({
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff'
  })
  const { getMenuListAction, user } = props
  const [, setRoutes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (location.hash != '#/login' && user.name) {
      getMenu()
    }
  }, [user.name])

  useEffect(() => {
    const mergedNextColor = {
      ...color
    }
    ConfigProvider.config({
      theme: mergedNextColor
    })
  }, [])

  // 通过接口获取后台返回的路由
  const getMenu = async () => {
    setLoading(true)
    await getMenuListAction()
    const routers = store.getState().menu.menuList
    useLazy(routers)
    setRoutes([])
    setLoading(false)
  }

  return (
    // <ConfigProvider>
    <Spin spinning={loading} className="root-loading" indicator={antIcon} tip="Loading">
      <HashRouter>
        <Router />
      </HashRouter>
    </Spin>
    // </ConfigProvider>
  )
}
export default connect((state: any) => state, { getMenuListAction })(App)
