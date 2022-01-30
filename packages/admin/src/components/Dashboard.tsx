import { Card, CardContent, CardHeader } from '@material-ui/core'
import { ReactElement } from 'react'

const Dashboard = (): ReactElement<any, any> => (
  <Card>
    <CardHeader title='Welcome to the administration' />
    <CardContent>
      Lorem ipsum sic dolor amet...
    </CardContent>
  </Card>
)

export default Dashboard
