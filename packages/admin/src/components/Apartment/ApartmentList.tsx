/* eslint-disable react/jsx-key */
import { FC } from 'react'
import { List, Datagrid, TextField, ListProps, TextInput, SearchInput } from 'react-admin'

const postFilters = [
  <SearchInput alwaysOn
    source="q"
  />,
  <TextInput defaultValue="Hello, World!"
    label="type"
    source="type"
  />
]

const Apartments: FC<ListProps> = (props) => {
  return (
    <List { ...props }
      filters={ postFilters }
    >
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='type' />
        <TextField source='bnovo_id' />
      </Datagrid>
    </List>
  )
}

export default Apartments
