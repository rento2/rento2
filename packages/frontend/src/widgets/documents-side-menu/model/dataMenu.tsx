import { IPropsAgreements, IPropsMenu } from '@widgets/documents-side-menu/lib/type/IPropsMenu'

export const dataMenu: IPropsMenu[] = [
  {
    title: 'Частые вопросы',
    href: '/docs/faq'
  },
  {
    title: 'Политика обработки персональных данных',
    href: '/docs/privacy'
  },
  {
    title: 'Пользовательское соглашение',
    href: '/docs/rules'
  },
  {
    title: 'Образцы документов',
    href: '/docs/agreements'
  }
]

export const dataAgreementsTenants: IPropsAgreements = {
  chapter: 'Арендаторам',
  listMenu: [{
    title: 'Договор долгосрочной аренды жилого помещения',
    href: '#'
  },
  {
    title: 'Договор оферта краткосрочной аренды квартиры',
    href: '#'
  },
  {
    title: 'Договор обслуживания арендуемой квартиры',
    href: '#'
  },
  {
    title: 'Договор на подбор помещения в аренду',
    href: '#'
  }
  ]
}

export const dataAgreementsOwners: IPropsAgreements = {
  chapter: 'Собственникам',
  listMenu: [
    {
      title: 'Договор между собственником и Rento',
      href: '#'
    },
    {
      title: 'Договор между собственником и арендатором',
      href: '#'
    }
  ]
}
