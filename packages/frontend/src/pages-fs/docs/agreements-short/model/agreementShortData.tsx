import { IListProps } from '@widgets/docs-list'

export const agreementShortData: IListProps[] = [
  {
    type: 'list',
    classItem: 'document__list',
    contents: [
      {
        type: 'item',
        classItem: 'document__item',
        contents: [
          {
            type: 'title',
            classItem: 'document__title',
            text: 'Права и обязанности Сторон',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2',
                  contents: [
                    {
                      type: 'description',
                      text: 'Наймодатель обязуется:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Передать Нанимателю в состоянии, пригодном для проживания и отвечающем условиям Договора Квартиру, имущество, а также комплект ключей от входной двери Квартиры, а также предоставить дополнительные услуги, выбранные на Сайте и оплаченные Нанимателем.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Обеспечить свободный доступ Нанимателя и членов его семьи в жилое помещение.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель оплачивает самостоятельно коммунальные платежи и иные платежи по содержанию Квартиры и имущества.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель не несет ответственности за сохранность вещей, ценностей и документов Нанимателя, оставленных в Квартире, равно как припаркованных авто и других видов транспорта Нанимателя (временных жильцов).'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2',
                  contents: [
                    {
                      type: 'description',
                      text: 'Наймодатель вправе:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель имеет право периодически осматривать Квартиру, предупредив об этом Нанимателя за 2 часа.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель вправе оставить у себя один комплект ключей.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать от Нанимателя, и членов его семьи содержать жилое помещение в технически исправном и надлежащем состоянии в соответствии с требованиями, предъявляемыми действующим законодательством Российской Федерации, а также соблюдения Правил проживания в доме Наймодателя.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать от Нанимателя освобождения жилого помещения по истечении срока настоящего Договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать выплаты штрафов и компенсации ущерба, нанесенного Квартире и/или имуществу в Квартире в соответствии с Условиями о штрафах, расположенными на странице Сайта по адресу:',
                          button: {
                            buttonText: 'Прейскурант возмещения порчи имущества.',
                            classButton: 'document__btn-modal',
                            buttonType: 'modalPriceDamage'
                          }
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать соблюдения Правил проживания, расположенными на странице Сайта по адресу:',
                          button: {
                            buttonText: 'Правила проживания.',
                            classButton: 'document__btn-modal',
                            buttonType: 'modalRules'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }]
          },

          {
            type: 'title',
            classItem: 'document__title',
            text: 'Права и обязанности Сторон',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2',
                  contents: [
                    {
                      type: 'description',
                      text: 'Наймодатель обязуется:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Передать Нанимателю в состоянии, пригодном для проживания и отвечающем условиям Договора Квартиру, имущество, а также комплект ключей от входной двери Квартиры, а также предоставить дополнительные услуги, выбранные на Сайте и оплаченные Нанимателем.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Обеспечить свободный доступ Нанимателя и членов его семьи в жилое помещение.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель оплачивает самостоятельно коммунальные платежи и иные платежи по содержанию Квартиры и имущества.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель не несет ответственности за сохранность вещей, ценностей и документов Нанимателя, оставленных в Квартире, равно как припаркованных авто и других видов транспорта Нанимателя (временных жильцов).'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2',
                  contents: [
                    {
                      type: 'description',
                      text: 'Наймодатель вправе:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель имеет право периодически осматривать Квартиру, предупредив об этом Нанимателя за 2 часа.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель вправе оставить у себя один комплект ключей.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать от Нанимателя, и членов его семьи содержать жилое помещение в технически исправном и надлежащем состоянии в соответствии с требованиями, предъявляемыми действующим законодательством Российской Федерации, а также соблюдения Правил проживания в доме Наймодателя.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать от Нанимателя освобождения жилого помещения по истечении срока настоящего Договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать выплаты штрафов и компенсации ущерба, нанесенного Квартире и/или имуществу в Квартире в соответствии с Условиями о штрафах, расположенными на странице Сайта по адресу:',
                          button: {
                            buttonText: 'Прейскурант возмещения порчи имущества.',
                            classButton: 'document__btn-modal',
                            buttonType: 'modalPriceDamage'
                          }
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать соблюдения Правил проживания, расположенными на странице Сайта по адресу:',
                          button: {
                            buttonText: 'Правила проживания.',
                            classButton: 'document__btn-modal',
                            buttonType: 'modalRules'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }]
          },

          {
            type: 'title',
            classItem: 'document__title',
            text: 'Права и обязанности Сторон',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2',
                  contents: [
                    {
                      type: 'description',
                      text: 'Наймодатель обязуется:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Передать Нанимателю в состоянии, пригодном для проживания и отвечающем условиям Договора Квартиру, имущество, а также комплект ключей от входной двери Квартиры, а также предоставить дополнительные услуги, выбранные на Сайте и оплаченные Нанимателем.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Обеспечить свободный доступ Нанимателя и членов его семьи в жилое помещение.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель оплачивает самостоятельно коммунальные платежи и иные платежи по содержанию Квартиры и имущества.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель не несет ответственности за сохранность вещей, ценностей и документов Нанимателя, оставленных в Квартире, равно как припаркованных авто и других видов транспорта Нанимателя (временных жильцов).'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2',
                  contents: [
                    {
                      type: 'description',
                      text: 'Наймодатель вправе:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель имеет право периодически осматривать Квартиру, предупредив об этом Нанимателя за 2 часа.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Наймодатель вправе оставить у себя один комплект ключей.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать от Нанимателя, и членов его семьи содержать жилое помещение в технически исправном и надлежащем состоянии в соответствии с требованиями, предъявляемыми действующим законодательством Российской Федерации, а также соблюдения Правил проживания в доме Наймодателя.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать от Нанимателя освобождения жилого помещения по истечении срока настоящего Договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать выплаты штрафов и компенсации ущерба, нанесенного Квартире и/или имуществу в Квартире в соответствии с Условиями о штрафах, расположенными на странице Сайта по адресу:',
                          button: {
                            buttonText: 'Прейскурант возмещения порчи имущества.',
                            classButton: 'document__btn-modal',
                            buttonType: 'modalPriceDamage'
                          }
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать соблюдения Правил проживания, расположенными на странице Сайта по адресу:',
                          button: {
                            buttonText: 'Правила проживания.',
                            classButton: 'document__btn-modal',
                            buttonType: 'modalRules'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }]
          }

        ]
      }
    ]
  }
]
