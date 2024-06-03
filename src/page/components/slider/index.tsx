import React, { useState } from 'react'

import './index.less'

const list = [
  {
    index: 1,
    date: '6:00'
  },
  {
    index: 2,
    date: '7:00'
  },
  {
    index: 3,
    date: '8:00'
  },
  {
    index: 4,
    date: '9:00'
  }
]

const Index: React.FC = () => {
  const [start, setStart] = useState(false)

  //   const handleMoveStart = () => {

  //   }

  return (
    <div className="slider_wrapper">
      <ul className="slider_wrapper_content">
        {list.map((item) => (
          <li key={item.index}>{item.date}</li>
        ))}
        <div className="box"></div>
      </ul>
    </div>
  )
}
export default Index
