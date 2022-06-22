import { IPropsAgreements, IPropsMenu } from '@widgets/documents-side-menu/lib/type/IPropsMenu'

export const dataMenu: IPropsMenu[] = [
  {
    title: 'Частые вопросы',
    href: '/docs-short-modal-rules/faq'
  },
  {
    title: 'Политика обработки персональных данных',
    href: '/docs-short-modal-rules/privacy'
  },
  {
    title: 'Пользовательское соглашение',
    href: '/docs-short-modal-rules/rules'
  },
  {
    title: 'Образцы документов',
    href: '/docs-short-modal-rules/agreements'
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
