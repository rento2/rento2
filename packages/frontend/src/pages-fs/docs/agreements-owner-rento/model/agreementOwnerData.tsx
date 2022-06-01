import { IListProps } from '@widgets/docs-list'

export const agreementOwnerData: IListProps[] = [
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
            classItem: 'document__general',
            text: 'Общие положения',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-unnumbered',
                  text: 'Гражданин РФ ________________________, паспорт ______________ № _____________, зарегистрированный по адресу: ________________________________________, именуемый в дальнейшем «Собственник», с одной стороны, и '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-unnumbered',
                  text: 'Общество с ограниченной ответственностью «РЕНТО», именуемое в дальнейшем «Сервис», в лице Генерального директора Пархомчука Макара Максимовича, действующего на основании Устава, с другой стороны, совместно именуемые «Стороны», а по отдельности «Сторона», заключили настоящий Договор (далее — «Договор») о нижеследующем:'
                }
              ]
            }]
          },

          {
            type: 'title',
            classItem: 'document__title',
            text: 'Предмет договора',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Собственник поручает, а Сервис принимает на себя обязательство совершить от имени Собственника, но за свой счет, комплекс юридических и фактических действий, направленных на поиск и подбор физического лица (далее - Арендатор), заинтересованного в аренде недвижимого имущества Собственника (далее- «Квартира»), а именно ___________ (характеристики квартиры), расположенного по адресу ___________, а также комплекс действий по подготовке имущества к сдаче в аренду, а Собственник обязуется не осуществлять самостоятельных действий по сдаче недвижимого имущества в аренду и не привлекать к совершению таких действий третьих лиц.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Имущество принадлежит Собственнику на праве ___________ на основании ______________________, что подтверждается _____________________ от «___»______ ____ г.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-listed-ordinary',
                  contents: [
                    {
                      type: 'description',
                      text: 'По настоящему договору Сервис Собственника выполняет следующие действия:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Осуществляет действия по поиску и привлечению потенциальных Арендаторов, которые заинтересованы в заключении с Собственником Договора аренды. Результатом указанных действий является заключение с привлеченным Арендатором Договора аренды.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Представляет интересы Собственника перед потенциальными Арендаторами в целях информирования о Квартире.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Предоставляет потенциальным Арендаторам полную, своевременную и достоверную информацию, необходимую для заключения Договора аренды, включая, но не ограничиваясь: стоимость аренды, срок аренды, требования к использованию Квартиры, а также иную предоставленную Собственником информацию.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Организует и участвует в переговорах между Собственником и потенциальным Арендатором по вопросам аренды Квартиры.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Осуществляет обеспечение взаимодействия между Собственником и Арендатором по вопросам, связанным с арендой Квартиры и иным вопросам, возникающим в ходе аренды.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Осуществляет комплекс действий по подготовке Квартиры к сдаче в аренду, а именно:'
                        },
                        {
                          type: 'list',
                          classItem: 'document__list-4',
                          contents: [
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Проведение генеральной уборки '
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Проведение плановой проверки Квартиры согласно параметрам, согласованным с Собственником'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Осуществление мелкого бытового ремонта для целей сдачи Квартиры'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Проведение профессиональной фотосессии Квартиры'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Публикация объявлений о сдаче в аренду на электронных площадках'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Осуществление маркетинговой поддержки по сдаче Квартиры в аренду'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Проведение показов квартиры '
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Проведение проверки потенциальных Арендаторов с помощью онлайн-платформы цифровой идентификации'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Консультационная помощь в оформлении статуса самозанятого (при необходимости)'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Сервис гарантирует свою независимость и объективность в ходе исполнения настоящего Договора.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Обязательства Сервиса считаются выполненными, если Договор аренды заключен с привлеченным Сервисом Арендатором, в течение срока действия настоящего Договора, а также в течение 2 (двух) месяцев после окончания срока действия настоящего Договора.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Датой исполнения поручения по настоящему Договору является дата подписания Договора аренды между Собственником и Арендатором.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Стороны пришли к соглашению, что в качестве вознаграждения по настоящего договору Собственник обязуется добросовестно исполнять обязанности по настоящему договору, в особенности соблюдать обязательства по п. 2.3.4.-2.3.7.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Сервис может оказывать иные услуги по согласованию с Собственником. При этом такие услуги, права и обязанности, в частности, взаиморасчет между Сторонами за оказание дополнительных услуг Сервисом, оформляются дополнительным соглашением к настоящему Договору.'
                }
              ]
            }]
          },

          {
            type: 'title',
            classItem: 'document__title',
            text: 'Права и обязанности сторон',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-listed-ordinary',
                  contents: [
                    {
                      type: 'description',
                      text: 'Сервис обязуется:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Осуществить поиск лиц, заинтересованных в аренде Квартиры.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'От имени и по поручению Собственника провести предварительные переговоры с потенциальными Арендаторами.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Организовать показы Квартиры потенциальным Арендаторам.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Совместно с Собственником разработать условия Договора аренды, подготовить документы, необходимые для заключения Договора аренды между Арендатором и Собственником.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Присутствовать на переговорах и встречах со всеми потенциальными Арендаторами.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Сообщать Собственнику по его требованию все сведения о ходе исполнения настоящего Договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Сообщать Собственнику по его требованию все сведения о ходе исполнения настоящего Договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Исполнить поручение Собственника по настоящему Договору на наиболее выгодных для него условиях, с полным соблюдением финансовой прозрачности.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Своевременно, не менее чем за 2 (два) рабочих дня, предупреждать Собственника о времени и месте проведения переговоров по вопросам заключения Договора аренды.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'В случае досрочного расторжения Договора аренды, осуществить поиск и привлечение Арендатора своими силами и за свой счет согласно условиям настоящего Договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Совершать действия, составляющие предмет настоящего Договора, в соответствии с указаниями Собственника, направляемыми посредством электронной почты на адрес электронной почты Сервиса, по реквизитам, указанным в настоящем Договоре, а также в соответствии с положениями настоящего Договора на наиболее выгодных для Собственника условиях.'
                        },
                      ]
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-listed-ordinary',
                  contents: [
                    {
                      type: 'description',
                      text: 'Сервис имеет право:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать соблюдения исключительных прав на Фотографии Квартиры, созданные Сервисом. Запрещать использование таких фотографий Собственником, а также третьим лицам.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать и получать от Собственника все необходимые документы, относящиеся к Квартире.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Снимать копии с любых документов для использования в целях исполнения обязательств по настоящему Договору.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Пользоваться услугами любых физических и юридических лиц в целях своевременного и качественного исполнения обязательств по Договору.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Совершать юридические и фактические действия по привлечению Арендаторов любыми способами по своему усмотрению при условии соблюдения положений настоящего Договора и требований законодательства Российской Федерации.'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-listed-ordinary',
                  contents: [
                    {
                      type: 'description',
                      text: 'Собственник обязан:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Предоставить Сервису все имеющиеся у него сведения и документы, необходимые для поиска Арендаторов и заключения Договора аренды.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'В срок, не превышающий 5 (пять) рабочих дней с даты подписания настоящего Договора передать Сервису комплект ключей от Квартиры для целей исполнения Сервисом своих обязательств по Договору.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Совместно с Сервисом разработать условия Договора аренды.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'В течение срока действия настоящего Договора не вступать в отношения с третьими лицами по предмету настоящего Договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'В течении всего срока действия настоящего Договора не осуществлять самостоятельных действий по сдаче в аренду Квартиры, включая, но не ограничиваясь: проводить переговоры с потенциальными Арендаторами, привлекать третьих лиц для целей маркетинговых активностей по сдаче Квартиры, публиковать объявления о сдаче Квартиры в аренду в любой форме и на любых площадках а также иные действия, составляющие предмет настоящего Договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Проводить переговоры с предполагаемыми Арендаторами или их представителями только в присутствии Сервиса.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Направить всех обратившихся к нему потенциальных Арендаторов и их представителей непосредственно к Сервису.'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-listed-ordinary',
                  contents: [
                    {
                      type: 'description',
                      text: 'Собственник имеет право:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать от Сервиса сведений о ходе исполнения Договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Запрашивать у Сервиса данные о потенциальных Арендаторах.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Присутствовать на всех переговорах с потенциальными Арендаторами по вопросам заключения Договора аренды.'
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
            text: 'Срок действия, изменение и прекращение договора',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Настоящий Договор вступает в силу с момента его подписания Сторонами и действует до «___»________ 20__ г.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Настоящий Договор может быть изменен или прекращен по письменному соглашению Сторон, а также в других случаях, предусмотренных действующим законодательством Российской Федерации и настоящим Договором.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Собственник вправе расторгнуть настоящий договор в одностороннем порядке с предварительным уведомлением Сервиса не менее чем за 5 рабочих дней до даты такого расторжения без выплаты какой-либо компенсации убытков Сервису, при этом Собственник не вправе использовать фотографии, созданные Сервисом.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'В случае нарушения Собственником обязательств, предусмотренных пп. 2.3.4. – 2.3.7 Договора, Сервис вправе требовать от Собственника выплаты документально подтвержденного ущерба, вызванного таким нарушением.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Договор заключается и будет исполняться Сторонами в условиях распространения новой коронавирусной инфекции (COVID-19), начавшегося до подписания Договора. Стороны согласовали, что применительно к исполнению Договора распространение COVID-19 не будет считаться обстоятельством непреодолимой силы в смысле, установленном пунктом 3 статьи 401 Гражданского кодекса Российской Федерации, освобождающим Стороны от ответственности за неисполнение или ненадлежащее исполнение обязательств по Договору.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Стороны не вправе в обоснование невозможности исполнения (надлежащего исполнения) своих обязательств по Договору ссылаться на распространение (эпидемию, пандемию) коронавирусной инфекции COVID-19. Соответствующие мероприятия, которые уже проводятся или будут проводиться на международном и национальном уровнях для предотвращения дальнейшего распространения COVID-19 (в том числе введение режима повышенной готовности, режима чрезвычайной ситуации, карантина и иных ограничительных мер) являются обстоятельствами, которые учитываются и разумно предвидятся Сторонами при заключении Договора. Стороны исходят из заведомой и полной исполнимости всех принятых на себя по Договору обязательств в условиях распространения коронавирусной инфекции COVID-19 с учетом возможного введения ограничительных мер и режимов.'
                },
              ]
            }]
          },

          {
            type: 'title',
            classItem: 'document__title',
            text: 'Стоимость и порядок приёма-передачи услуг',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'К настоящему Договору применяется законодательство Российской Федерации.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Изменения и дополнения настоящего Договора осуществляются только в письменном виде и признаются действительными для Сторон только после двухстороннего одобрения.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Стороны признают юридическую силу за электронными документами (сообщениями), направленными по электронной почте (e-mail) и признают их равнозначными документам на бумажных носителях, подписанным собственноручной подписью, т.к. только сами Стороны и уполномоченные лица Собственника и Сервиса имеют доступ к соответствующим средствам связи. Доступ к электронной почте каждая Сторона осуществляет по паролю и обязуется сохранять его конфиденциальность.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Все споры и разногласия, которые могут возникнуть между Сторонами при исполнении настоящего Договора, подлежат урегулированию путем переговоров. Досудебный претензионный порядок разрешения спора между Сторонами обязателен. Срок рассмотрения претензии - не более 10 (десяти) рабочих дней с момента ее поступления в письменном виде. При наличии претензий виновная сторона должна в десятидневный срок предъявить мотивированные объяснения, исправить упущения и учесть в последующей работе законные требования, изложенные в претензии.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'При недостижении согласия в процессе переговоров спор разрешается в суде Российской Федерации по месту нахождения Сервиса.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Настоящий Договор составлен в двух экземплярах, по одному для каждой из сторон.'
                }
              ]
            }]
          }
        ]
      }
    ]
  }
]
