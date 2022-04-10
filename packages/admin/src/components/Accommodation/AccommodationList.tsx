import { FC } from 'react'
import { List, Datagrid, TextField, ListProps } from 'react-admin'

const AccommodationList: FC<ListProps> = (props) => {
  return (
    <List { ...props }>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='name_en' />
      </Datagrid>
    </List>
  )
}

export default AccommodationList
