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
  <TextInput source='q' label='Search' alwaysOn />,
  <ReferenceInput source='userId' label='User' reference='users' allowEmpty>
    <SelectInput optionText='name' />
  </ReferenceInput>
  /* eslint-enable react/jsx-key */
]

const PostList: FC<ListProps> = props => {
  const isSmall = useMediaQuery((theme: IGenericObj) => theme['breakpoints'].down('sm'))

  return (
    <List filters={postFilters} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={record => record['title']}
          secondaryText={_record => `${0} views`}
          tertiaryText={_record => new Date().toLocaleDateString()}
        />
      ) : (
        <Datagrid rowClick='edit'>
          <TextField source='id' />
          <ReferenceField source='userId' reference='users'>
            <TextField source='name' />
          </ReferenceField>
          <TextField source='title' />
          <EditButton />
        </Datagrid>)}
    </List>
  );
}

export default PostList
