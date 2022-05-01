import { IPropsMenu } from '@widgets/documents-side-menu/lib/type/IPropsMenu'

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

export const dataAgreementsTenants: IPropsMenu[] = [
  {
    title: 'Договор долгосрочной аренды жилого помещения',
    href: '/docs/agreements-long',
    chapter: 'Арендаторам'
  },
  {
    title: 'Договор оферта краткосрочной аренды квартиры',
    href: '#',
    chapter: 'Арендаторам'
  },
  {
    title: 'Договор обслуживания арендуемой квартиры',
    href: '#',
    chapter: 'Арендаторам'
  },
  {
    title: 'Договор на подбор помещения в аренду',
    href: '#',
    chapter: 'Арендаторам'
  }
]

export const dataAgreementsOwners: IPropsMenu[] = [
  {
    title: 'Договор между собственником и Rento',
    href: '#',
    chapter: 'Собственникам'
  },
  {
    title: 'Договор между собственником и арендатором',
    href: '#',
    chapter: 'Собственникам'
  }
]
