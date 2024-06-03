export type _Event<State extends _State, Args extends { type: string; value: any }> = {
  field: State['field']
  type: Args['type']
  value: Args['value']
}

export type _Model<State extends _State> = {
  receiver: (values: values) => any
  reporter: (state: State, values: values) => any
}
