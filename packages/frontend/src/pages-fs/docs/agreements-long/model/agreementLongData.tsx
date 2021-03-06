import { IListProps } from '@widgets/docs-list'

export const agreementLongData: IListProps[] = [
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
                  text: 'Гражданин ________________________________________, паспорт (серия, номер, выдан) _______  ________________________________________, проживающий по адресу _____________ ________________________________________, именуемый в дальнейшем «Арендодатель», с одной стороны, и'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-unnumbered',
                  text: 'Гражданин ________________________________________, паспорт (серия, номер, выдан) _______  ________________________________________, проживающий по адресу _____________ ________________________________________, именуемый в дальнейшем «Арендатор», с другой стороны, именуемые в дальнейшем «Стороны», заключили настоящий договор аренды жилого помещения, в дальнейшем «Договор», о нижеследующем:'
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
                  text: 'Арендодатель обязуется передать Арендатору, а Арендатор обязуется принять во временное владение и пользование за плату жилой недвижимый объект, расположенный по адресу: _____________________________ здесь и далее именуемая «Квартира».'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Квартира принадлежит Арендодателю на праве собственности, что подтверждается: _____________________________. '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Квартира предоставляется для личного пользования без права передачи в субаренду.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Вместе с Арендатором в Квартире могут проживать члены семьи Арендатора, а также лица, сведения, о которых предоставлены Арендатором в дату вселения или позже по согласованию Сторон.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Арендодатель гарантирует, что:'
                },
                {
                  type: 'list',
                  classItem: 'document__list-unordered',
                  contents: [
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'на момент подписания настоящего договора Квартира пригодна для постоянного проживания;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'на момент подписания настоящего договора в отношении Квартиры отсутствует задолженность по оплате коммунальных услуг;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'на момент подписания настоящего договора Квартира свободна от прав и притязаний третьих лиц;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'Арендодателем получены все согласия и разрешения на заключение настоящего Договора, необходимые в соответствии с действующим законодательством РФ.'
                    }
                  ]
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
                      text: 'Арендодатель обязан: '
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Предоставить Квартиру Арендатору с даты подписания Акта приема-передачи Квартиры в пригодном для проживания состоянии, с мебелью и оборудованием согласно описи имущества.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Осуществлять техобслуживание Квартиры и оборудования, не находящегося в ведении органов ЖКХ.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Передать Арендатору не менее одного комплекта ключей от Квартиры при подписании Сторонами Акта приема-передачи Квартиры.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Содействовать Арендатору в устранении последствий аварии, пожара, затоплений, несанкционированного доступа третьих лиц, иных случаях, угрожающих ущербом Квартире, имуществу Арендодателя и/или Арендатора, жизни и здоровью людей  (далее - Экстренные ситуации), принять все зависящие от него меры для минимизации ущерба, который может возникнуть в результате экстренных ситуаций, в том числе незамедлительно приезжать в Квартиру в случае возникновения экстренных ситуаций, осуществлять взаимодействие с государственными и муниципальными органами и предпринимать все иные требующиеся от него действия.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Своевременно и в полном объеме оплачивать коммунальные услуги, в соответствии с условиями Договора.'
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
                      text: 'Арендодатель вправе: '
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Уведомлять Арендатора о посещении Квартиры не менее чем за 5 рабочих дней, при этом Арендодатель имеет право посещать Квартиру в присутствии Арендатора не чаще 1 раза в месяц.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Получать доступ в Квартиру в любое время в случае Экстренных ситуаций или в случае угрозы возникновения таких ситуаций. '
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
                      text: 'Арендатор обязан: '
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Своевременно оплачивать счета за коммунальные услуги в соответствии с условиями Договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Использовать Квартиру для собственного проживания, не для субаренды и не в качестве офиса. С Арендатором в Квартире постоянно будут проживать: _____________________. '
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Нести полную ответственность за ущерб Квартире, мебели или оборудованию, а также прилегающим помещениям, нанесенный по вине или по невнимательности Арендатора, членов его семьи или гостей.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Арендатор не несет ответственность за естественную амортизацию Квартиры, мебели и оборудования.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Оставлять гостей ответственными за Квартиру только после письменного на то разрешения со стороны Арендодателя, при этом Арендатор несет полную ответственность за ущерб, нанесенный Квартире, мебели или оборудованию, а также прилегающим помещениям по вине или по невнимательности гостей в отсутствие Арендатора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'В течение 30 дней до даты расторжения/прекращения настоящего Договора предоставить Арендодателю доступ в Квартиру для показов. Согласование даты показа осуществляется с Арендатором за 3 (три) рабочих дня.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Допускать Арендодателя в Квартиру на условиях, изложенных в настоящем Договоре для проверки выполнения условий договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Соблюдать Правила проживания в квартире, а именно: '
                        },
                        {
                          type: 'list',
                          classItem: 'document__list-4',
                          contents: [
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Заводить домашних животных в Квартире только с письменного разрешения на то со стороны Арендодателя, при этом Арендатор несёт полную ответственность за ущерб, нанесённый его домашними животными.'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Проводить серьезные ремонтные работы или осуществлять какие-либо значительные изменения в Квартире только с письменного разрешения на то со стороны Арендодателя.'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Соблюдать региональное и федеральное законодательство о тишине. Уважать покой соседей в ночные часы и в выходные и праздничные дни.'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Не курить на территории Квартиры.'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Не сверлить стены без предварительного согласования с Арендодателем.'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'В течении 24 часов сообщить о порче имущества, в том числе произошедшего в результате чрезвычайного происшествия Арендодателю '
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Не привлекать самостоятельно, без предварительного уведомления Арендодателя, третьих лиц для целей осуществления ремонта имущества Арендодателя и/или Квартиры, либо по вопросам устранения чрезвычайных ситуаций.'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Заключить договор на обслуживание Квартиры с Обществом с ограниченной ответственностью «РЕНТО», 105120, Россия, Москва г., Костомаровский пер., д. 3, стр. 4, офис 8,  ИНН: 9709072210, КПП: 770901001, 1217700278410 (далее - ООО «РЕНТО»). Данное юридическое лицо является одобренным Арендодателем.'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'При заключении договора между Арендатором и ООО «РЕНТО», взаиморасчет за оказываемые услуги оформляются по соглашению между Клиентом и ООО «РЕНТО».'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'При заключении договора между Арендатором и ООО «РЕНТО», права, обязанности и ответственность за качество услуг и исполнение обязательств оформляются по соглашению между Арендатором и ООО «РЕНТО».'
                            },
                            {
                              type: 'item',
                              classItem: 'document__item-4',
                              text: 'Подписывая настоящий договор, Арендатор обязуется не прибегать, не искать и не заключать договор/соглашение на получение услуг на обслуживание Квартиры у других лиц, кроме ООО «РЕНТО», включая, но не ограничиваясь услугами клининговых компании, бытового обслуживания, ремонта бытового оборудования, ремонта Квартиры, и т.д.'
                            }
                          ]
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
            text: 'Взаимные гарантии',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Арендодатель гарантирует, что Квартира принадлежит ему на праве собственности, все необходимые разрешения от совладельцев, если таковые есть, получены и условия сдачи в аренду Квартиры с ними согласованы.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Арендодатель гарантирует, что Квартира не находится под арестом, не заложена и не является предметом каких-либо претензий со стороны третьих лиц.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Арендодатель гарантирует, что он и другие, если таковы есть, зарегистрированные в Квартире и переселенные из нее с целью сдачи последней в аренду не были ущемлены в правах по нормам жилой площади на человека, особенно несовершеннолетние.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Арендатор гарантирует своевременно и без задержек выплачивать арендную плату и другие платежи, предусмотренные для него данным договором.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Арендатор гарантирует, что он будет проживать в Квартире не менее оговоренного срока Аренды.'
                }
              ]
            }]
          },

          {
            type: 'title',
            classItem: 'document__title',
            text: 'Коммунальные платежи',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Арендатор самостоятельно и за свой счет несет следующие расходы по оплате коммунальных и иных услуг:'
                },
                {
                  type: 'list',
                  classItem: 'document__list-unordered',
                  contents: [
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'Расходы по оплате услуг по предоставлению горячего и холодного водоснабжения, электроснабжения;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'Расходе по оплате водоотведения, отопления, газоснабжения, телефонной связи, обслуживание общего имущества многоквартирного дома;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'Расходы по оплате услуг интернета, междугородных, международных переговоров;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'Расходы по оплате услуг клининга;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'Расходы по оплате услуг охраны;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'Расходы по оплату услуг консьержа;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'Расходы по оплату услуг парковки;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'Расходы по оплате услуг по обслуживанию шлагбаума.'
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Расходы по всем остальным коммунальным услугам, не перечисленным в п. 4.1 настоящего Договора несет Арендодатель.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Арендатор обязуется ежемесячно не позднее 5 числа месяца, следующего за расчетным, направлять фотографии квитанций по коммунальным услугам Арендодателю на электронную почту, указанную в Договоре.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Показания счетчиков на момент передачи Квартиры указаны в Акте приема-передачи Квартиры.'
                }
              ]
            }]
          },

          {
            type: 'title',
            classItem: 'document__title',
            text: 'Условия оплаты',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Ежемесячная арендная плата устанавливается в размере ___________ рублей.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'При подписании Договора Арендатор оплачивает первые _______ месяца аренды Квартиры, что составляет _______ рублей, далее выплаты будут осуществляться авансом за период _______, не позднее _______ дней с начала оплачиваемого периода.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  contents: [
                    {
                      type: 'description',
                      text: 'На основании п.3 ст.614 ч.2 ГК РФ размер арендной платы не может изменяться чаще одного раза в год и только по согласованию сторон.'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Первое изменение размера арендной платы не может произойти ранее, чем через 6 месяцев с начала установленного срока аренды, все последующие – не менее, чем через 12 месяцев от предыдущего изменения.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Отказ одной из сторон от предложенного другой стороной изменения размера арендной платы, в случае если стороны не могут прийти к компромиссному решению, не является основанием для немедленного расторжения договора. В этом случае Арендатор имеет право проживать в Квартире еще один месяц после уже оплаченного периода, оплатив его по ставке арендной платы указанной в п.5.1 Договора, а если размер арендной платы был изменен – последней согласованной и измененной на основании условий данного пункта.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Размер арендной платы не может быть изменен, в любую сторону, только на основании желания одной из сторон или на основании сезонных колебаний цен на аренду недвижимости.'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  contents: [
                    {
                      type: 'description',
                      text: 'При подписании договора Арендатор оставляет Арендодателю залог за сохранность имущества и соблюдение условий договора Арендатором, в размере ______________ рублей.'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Арендодатель не имеет права использовать залог в личных целях.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'При фактическом оставлении Квартиры Арендатором, съезде, сторонами составляется акт возврата имущества. Согласование и подписание обеими сторонами Акта возврата имущества является основанием для возврата залога. '
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Залог может быть использован, по согласованию сторон, в качестве оплаты за соразмерный ему период аренды, но только перед непосредственным оставлением Квартиры Арендатором – съездом.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'По согласованию сторон, и только при непосредственном съезде Арендатора, из залоговой суммы могут быть оплачены оставшиеся предусмотренные для Арендатора платежи.'
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
            text: 'Срок действия договора и его продление',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Срок аренды установлен с «___»______________ _______ года до «___»______________ _______ года.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Условия Договора могут быть изменены, а срок аренды продлен при условии письменного согласия обеих сторон.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Соглашение о продлении Договора должно быть подписано, а при продлении с изменением условий согласовано и подписано не позднее, чем за 30 (тридцать) дней до даты окончания срока действия данного договора или последнего соглашения об его продлении.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'При отказе одной из сторон от пролонгации договора, она обязана известить вторую сторону, не менее чем за 60 (шестьдесят) дней до даты окончания срока действия Договора или последнего соглашения об его продлении.'
                }
              ]
            }]
          },

          {
            type: 'title',
            classItem: 'document__title',
            text: 'Досрочное расторжение договора',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Договор, может быть расторгнут, одной из сторон, если другая сторона не соблюдает условий данного договора.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Арендатор сохраняет право в одностороннем порядке расторгнуть договор, письменно уведомив Арендодателя за _______ дней, но если такое расторжение произошло ранее «___»______________ _______ года залог не возвращается, не может быть использован в качестве оплаты за соразмерный ему период аренды (п.5.4.3), из него не могут быть оплачены оставшиеся предусмотренные для Арендатора платежи (п.5.4.4), за исключением случаев предусмотренных п.7.4 данного договора.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Арендодатель не имеет права расторгнуть договор в одностороннем порядке до окончания срока действия договора или последнего соглашения об его продлении, если Арендатор соблюдает все условия договора, за исключением причин указанных в п.7.4.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Если одна из сторон вынуждена расторгнуть договор по причине форс-мажорных обстоятельств, предусмотренных действующим законодательством, или введения правительственного запрета на действия, предусмотренные данным договором, она обязана известить вторую сторону, в письменном виде, не менее чем за _______ дней до даты такого расторжения.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  contents: [
                    {
                      type: 'description',
                      text: 'При досрочном расторжении договора по инициативе третьих лиц, в нарушение гарантий Арендодателя, предусмотренных разделом 3 настоящего Договора, Арендатор имеет право проживать в Квартире 15 (пятнадцать) дней сверх оплаченного периода бесплатно, а при невозможности такого проживания Арендодатель обязан выплатить Арендатору неустойку.'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Размер неустойки определяется суммой стоимости каждого дня проживания умноженной на количество оставшихся дней в сверх оплаченном периоде и двукратной стоимости каждого дня проживания умноженной на количество оставшихся оплаченных дней. Арендодатель обязан заплатить неустойку не позже согласованного с Арендатором дня фактического оставления Квартиры – съезда.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'При добровольном оставлении Квартиры Арендатором, при досрочном расторжении договора, или съезде на других, согласованных с Арендодателем условиях, неустойка не выплачивается.'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Двукратное нарушение Арендатором п.5.2 данного Договора, без подтвержденных документально уважительных причин (госпитализация, командировка и т.п.) дает право Арендодателю расторгнуть договор в одностороннем порядке с оповещением Арендатора не менее чем за пять дней до даты такого расторжения. Залог в данном случае не возвращается.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'В случае досрочного расторжения договора по инициативе Арендатора после заключения договора, но до даты предоставления Квартиры Арендодателем, Арендодатель возвращает Арендатору внесенную арендную плату и половину залога, при этом, из возвращаемой части вычитаются понесенные Арендодателем расходы связанные с исполнением пожеланий Арендатора по изменению Квартиры и/или ее обстановки.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'В случае досрочного расторжения договора по инициативе Арендатора после заключения договора и даты предоставления Квартиры Арендодателем, залог не возвращается, даже если Арендатор фактически еще не въехал в Квартиру, а внесенная арендная плата возвращается за вычетом каждого дня после даты предоставления квартиры и стоимости расходов, понесенных Арендодателем в связи с исполнением пожеланий Арендатора по изменению Квартиры и/или ее обстановки.'
                }
              ]
            }]
          },

          {
            type: 'title',
            classItem: 'document__title',
            text: 'Заключительные положения',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'За неисполнение или ненадлежащее исполнение Сторонами своих обязательств по настоящему Договору Стороны несут ответственность в соответствии с действующим законодательством РФ. '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Настоящий договор, дополнительные соглашения, приложения и акты к нему могут быть подписаны путем обмена Сторонами их подписанными сканированными копиями по электронной почте: '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-unnumbered',
                  text: 'со стороны Арендодателя:___________ '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-unnumbered',
                  text: 'со стороны Арендатора:___________ '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Стороны признают, что такой обмен документами имеет юридическую силу наравне с составлением одного документа, подписанного Сторонами. При этом Стороны договорились о том, что все документы и сообщения, поступившие с электронного адреса Стороны, указанного в настоящем пункте, считаются поступившими от этой Стороны.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'При подписании настоящего Договора Стороны подтверждают, что: '
                },
                {
                  type: 'list',
                  classItem: 'document__list-unordered',
                  contents: [
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'они понимают юридические последствия Договора; '
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'они не лишены, не ограничены в дееспособности и правоспособности; '
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'отсутствуют обстоятельства, вынуждающие их совершить сделку на крайне невыгодных для себя условиях (сделка не является для них кабальной). '
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Стороны признают, что если какое-либо из положений настоящего Договора противоречит императивным нормам законодательства, то такие положения являются недействительными и к отношениям Сторон в этой части применяются нормы законодательства. Недействительность части Договора не влечет недействительности всего Договора. '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Все споры и разногласия, возникающие между Сторонами, будут разрешаться путем переговоров. При неурегулировании в процессе переговоров спорных вопросов все споры по настоящему Договору или в связи с ним подлежат рассмотрению в суде по месту жительства ответчика.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Настоящий Договор составлен в двух экземплярах, имеющих одинаковую юридическую силу. Один экземпляр Договора передается Арендодателю, один экземпляр передается Арендатору.'
                }
              ]
            }]
          }
        ]
      }
    ]
  }
]
