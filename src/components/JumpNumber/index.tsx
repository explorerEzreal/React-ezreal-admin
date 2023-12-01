import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ChangeNumber from '../ChangeNumber'

import './index.less'

const Index = (props: { endNumber: number }) => {
  const [currentNumber, setCurrentNumber] = useState<any[]>([])

  const setNumberList = () => {
    if (!currentNumber.length) {
      return
    }

    const str = props.endNumber.toString()
    const list = currentNumber.map((item, index) => ({
      ...item,
      number: Number(str[index])
    }))

    setCurrentNumber(list)
  }

  useEffect(() => {
    setNumberList()
  }, [props.endNumber])

  useEffect(() => {
    const str = props.endNumber.toString()
    const list = []

    for (let i = 0; i < str.length; i++) {
      list.push({
        number: Number(str[i]),
        key: uuidv4()
      })
    }

    setCurrentNumber(list)
  }, [])

  return (
    <div className="c-jumpNumber">
      {currentNumber.map((item) => (
        <ChangeNumber key={item.key} number={item.number} />
      ))}
    </div>
  )
}

export default Index
