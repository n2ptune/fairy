import React, { FC } from 'react'

export interface FloatProps {
  someProps?: string
}

const Float: FC<FloatProps> = ({ someProps }) => {
  return <div className="float">FloatButton {someProps ? 'someProps' : 'no someProps'}</div>
}

export default Float
