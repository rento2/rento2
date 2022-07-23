import { FC } from 'react'
import { List, Datagrid, TextField, ListProps, EditButton, DateField, CreateButton, TopToolbar, DeleteButton, ReferenceField } from 'react-admin'

const Toolbar = (): JSX.Element => (
  <TopToolbar>
    <CreateButton />
    <DeleteButton />
  </TopToolbar>
)

const MetroStationList: FC<ListProps> = (props) => {
  return (
    <List actions={ <Toolbar /> }
      { ...props }
    >
      <Datagrid>
        <TextField source='id' />
        <TextField label='Название станции'
          source='name'
        />
        <ReferenceField label="Ветка"
          reference="metro-lines"
          source="metroLineId"
        >
          <TextField source="name" />
        </ReferenceField>
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

export default MetroStationList
