import { FC } from 'react'
import { List, Datagrid, TextField, ListProps, EditButton, DateField } from 'react-admin'

const BannerList: FC<ListProps> = (props) => {
  return (
    <List { ...props }>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='name' />
        <DateField source='createdAt' showTime />
+       <EditButton />
      </Datagrid>
    </List>
  )
}

export default BannerList
