import { FC } from 'react'
import { List, Datagrid, TextField, ListProps, FunctionField, NumberField } from 'react-admin'

const Apartments: FC<ListProps> = (props) => {
  return (
    <List { ...props }>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <FunctionField
            label="Срок"
            render={(record: any) => record.type === 'short' ? 'краткосрок' : 'долгосрок'}
        />
        <TextField label="Название" source='name' />

        <NumberField source="price" locales="ru-RU" label="Цена" options={{ style: 'currency', currency: 'RUB' }} />
        <NumberField source="pricePerMonth" locales="ru-RU" label="Цена в месяц" options={{ style: 'currency', currency: 'RUB' }} />
      </Datagrid>
    </List>
  )
}

export default Apartments
