import React, { useState } from 'react'

import useBizTableItem from './hooks/useBizTableItem'

export default function Table() {
  const [values, setValues] = useState({})

  const { state, itemlist } = useBizTableItem({
    values
  })

  console.log('-----itemlist----', itemlist)

  return <div className="table_wrapper">11</div>
}
