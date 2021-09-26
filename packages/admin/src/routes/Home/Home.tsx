import { FC } from 'react'

interface IProps {
  name: string
}

const Welcome: FC<IProps> = ({ name }) => (
  <h1>Hello, {name}</h1>
)

export default Welcome
