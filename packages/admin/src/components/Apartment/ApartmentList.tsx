import { FC } from 'react'
import { List, Datagrid, TextField, ListProps } from 'react-admin'

const Apartments: FC<ListProps> = (props) => {
  return (
    <List { ...props }>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='latin_name' />
      </Datagrid>
    </List>
  )
}

export default Apartments
