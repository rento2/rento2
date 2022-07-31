import { FC } from 'react'
import { List, Datagrid, TextField, ListProps, EditButton, DateField, CreateButton, TopToolbar, DeleteButton } from 'react-admin'
import { ColorField } from 'react-admin-color-picker'

const Toolbar = (): JSX.Element => (
  <TopToolbar>
    <CreateButton />
    <DeleteButton />
  </TopToolbar>
)

const MetroLineList: FC<ListProps> = (props) => {
  return (
    <List actions={ <Toolbar /> }
      { ...props }
    >
      <Datagrid>
        <TextField source='id' />
        <TextField label='Название ветки'
          source='name'
        />

        <ColorField label="Цвет"
          source="color"
        />
        <DateField showTime
          label='Дата'
          source='createdAt'
        />
        +
        {' '}
        <EditButton />
      </Datagrid>
    </List>
  )
}

export default MetroLineList
