import { useEffect, useState } from 'react'

import { tableItems } from '../items'

export default function useChartSettings(props: any) {
  const { values } = props

  const { header, items, footer } = tableItems

  const [itemlist, setItemlist] = useState<any[]>([])

  console.log('----tableItems---', tableItems)

  useEffect(() => {
    const list = [header, ...Object.values(items), footer]

    const itList = list.map((it) => ({
      ...it,
      state: it.modal.receiver(values)
    }))

    setItemlist(itList)
  }, [])

  const onChange = () => {}

  return {
    state: {},
    itemlist,
    onChange
  }
}
