import React from 'react'

import type { _Model } from '../../type'

export type State = {
  value: any
}

export const modal: _Model<State> = {
  receiver: (values) => ({ ...values }),
  reporter(state, values) {
    return values
  }
}

export const component = (props) => {
  const { value } = props
  return (
    <div>
      <div>footer</div>
    </div>
  )
}
