
import { IPropsMenu } from '../type/IPropsMenu'
import style from './HeadBar.module.scss'
import HeadBarItem from './HeadBarItems'
import HeadBarTitle from './HesdBarTitle'

const HeadBar = ({ dataMenu }: {dataMenu: IPropsMenu[]}): JSX.Element => {
  return (
    <div className={ style['wrapper-box'] }>
      <HeadBarTitle />
      { dataMenu.map((item, idx) => (
        <HeadBarItem key={ idx }
          data={ item }
        />)) }
    </div>
  )
}

export default HeadBar
