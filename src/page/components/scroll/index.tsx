import { useState } from 'react'
import { Button } from 'antd'

import JumpNumber from '/@/components/JumpNumber'

export default function Index() {
  const [number, setNumber] = useState(11111)

  const onAdd = () => {
    const random = Math.floor(Math.random() * (300 - 100 + 1)) + 100
    setNumber(number + random)
  }

  return (
    <div style={{ fontSize: 32, width: 300 }}>
      <Button onClick={() => onAdd()}>增加</Button>
      <JumpNumber endNumber={number} />
    </div>
  )
}
