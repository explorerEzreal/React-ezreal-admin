import React from 'react'

import './index.less'

const Index = (props: { number: number }) => (
  <div className="box">
    <span className="num" style={{ transform: `translate(-50%, -${props.number * 10}%)` }}>
      0123456789
    </span>
  </div>
)

export default Index
