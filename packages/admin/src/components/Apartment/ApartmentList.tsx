import { FC } from 'react'
import { List, Datagrid, TextField, ListProps, TextInput, SearchInput } from 'react-admin'

const key1 = Math.random().toString(36).substr(2, 9)
const key2 = Math.random().toString(36).substr(2, 9)

const postFilters = [
  <SearchInput key={ key1 }
    alwaysOn
    source="q"
  />,
  <TextInput key={ key2 }
    defaultValue="Field search for type"
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
