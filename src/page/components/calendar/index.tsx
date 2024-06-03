import React, { useMemo, useState } from 'react'
import { Space } from 'antd'

import { WeekLabel } from './consts'
import { getDaysInMonth } from './utils'

import './index.less'

const Index = () => {
  const [currentMonth, setCurrentMonth] = useState(1)

  const onMonthChange = (nums: number) => {
    setCurrentMonth(currentMonth + nums)
  }

  return (
    <div className="calendar_wrapper">
      <div className="calendar_header">
        <div className="current_date">2024年{currentMonth}月</div>
        <div className="select_box">
          <Space>
            <span onClick={() => onMonthChange(-1)}>上个月</span>
            <span onClick={() => onMonthChange(1)}>下个月</span>
          </Space>
        </div>
      </div>
      <div className="calendar_container">
        <div className="week_wrapper">
          {[...Array(7).keys()].map((item) => (
            <div className="week_item" key={item}>
              {WeekLabel[item]}
            </div>
          ))}
        </div>

        <div className="date_wrapper">
          {getDaysInMonth(2024, currentMonth).map((day) => (
            <div className="date_item" key={day.key}>
              <div className="date_header">
                <div className="lunar">{day.lunar}</div>
                <div className="format">{day.format}</div>
              </div>
              <div className="date_container">
                <div className="solar">{day.solar}</div>
                <div className="festival">{day.festival}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index
