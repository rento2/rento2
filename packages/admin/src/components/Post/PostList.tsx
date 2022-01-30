import { FC } from 'react'
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ListProps,
  EditButton,
  ReferenceInput,
  SelectInput,
  TextInput,
  SimpleList
} from 'react-admin'
import { useMediaQuery } from '@material-ui/core'
import { IGenericObj } from 'common'

const postFilters = [
  /* eslint-disable react/jsx-key */
  <TextInput alwaysOn
    label='Search'
    source='q'
  />,
  <ReferenceInput allowEmpty
    label='User'
    reference='users'
    source='userId'
  >
    <SelectInput optionText='name' />
  </ReferenceInput>
  /* eslint-enable react/jsx-key */
]

const PostList: FC<ListProps> = props => {
  const isSmall = useMediaQuery((theme: IGenericObj) => theme['breakpoints'].down('sm'))

  return (
    <List filters={ postFilters }
      { ...props }
    >
      {isSmall
        ? (
          <SimpleList
            primaryText={ record => record['title'] }
            secondaryText={ _record => `${0} views` }
            tertiaryText={ _record => new Date().toLocaleDateString() }
          />
          )
        : (
          <Datagrid rowClick='edit'>
            <TextField source='id' />
            <ReferenceField reference='users'
              source='userId'
            >
              <TextField source='name' />
            </ReferenceField>
            <TextField source='title' />
            <EditButton />
          </Datagrid>
          )}
    </List>
  )
}

export default PostList
