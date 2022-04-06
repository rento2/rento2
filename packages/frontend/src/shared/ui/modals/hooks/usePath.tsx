import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { IPropsMenu } from '@widgets/documents-side-menu/ui/SideMenu/type/IPropsMenu'

export const usePath = (dataMenu: IPropsMenu[]): string => {
  const [pageData, setPageData] = useState('')
  const router = useRouter()

  useEffect(() => {
    dataMenu.map((item) => {
      if (router.pathname === item.href) {
        return setPageData(item.title)
      }
      return 'Нет такой страницы'
    })
  }, [dataMenu, router.pathname])

  return pageData
}
