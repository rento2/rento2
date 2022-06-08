import { IListProps } from '@widgets/docs-list'

export const agreementServiceData: IListProps[] = [
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
                  text: 'Гражданин РФ ________________________, паспорт ______________ № _____________, зарегистрированный по адресу: ________________________________________, именуемый в дальнейшем «Клиент», с одной стороны, и'
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
                  text: 'Сервис обязуется по заданию Клиента оказать услуги по обслуживанию арендуемого Клиентом объекта недвижимости, а именно ____________, расположенной по адресу: ____________, переданного в аренду Клиенту на основании Договора аренды № __ от «__»____________ 20__г., (далее — «Квартира»), а Клиент обязуется принимать и оплачивать эти услуги.  Полный перечень услуг содержится в п. 1.2. Договора. '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  contents: [
                    {
                      type: 'description',
                      text: 'По настоящему договору Сервис обязуется оказывать следующие услуги:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Проведение генеральной уборки Квартиры один раз в 3 календарных месяца.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Проведение диагностики и мелкого текущего ремонта бытового оборудования, указанного в Акте приёма-передачи Квартиры.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Обеспечение оперативного взаимодействия между Клиентом и Арендодателем по вопросам, связанным с арендой Квартиры и иным вопросам, возникающим в ходе аренды Квартиры. '
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Оказание услуги персонального менеджера по обеспечению решений текущих бытовых вопросов, возникающих в ходе аренды Квартиры.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: '____________________(указать иное).'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'При исполнении своих обязательств по Договору, Сервис вправе привлекать к оказанию услуг третьих лиц без получения дополнительного согласия Клиента, оставаясь ответственным перед Клиентом за действия таких лиц.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Настоящий договор представляет собой абонентский договор в соответствии со ст.429.4 ГК РФ. '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'В услуги, указанные в п.1.2. не включены услуги по осуществлению ремонта инженерных систем и оборудования Квартиры (газовых колонок, котлов, работы с электрикой, газом, водоснабжением), ремонта сложной электроники (электронных печей, стиральных машинок, микроволновок и т.п.). Вместе с тем, Сервис проводит диагностику и выявления таких проблем и согласует проведение такого ремонта между Клиентом и Арендодателем. В случае такого согласования, Сервис вправе привлечь третьих лиц к осуществлению такого ремонта на отдельно согласованных сторонами условиях. Стоимость и сроки оказания таких услуг согласуются сторонами в отдельном дополнительном соглашении. '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Сервис может оказывать иные услуги по согласованию с Клиентом за дополнительную плату. При этом такие услуги оформляются дополнительным соглашением к настоящему Договору.'
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
                  classItem: 'document__item-2-default',
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
                          text: 'Своевременно и качественно оказывать услуги в соответствии с условиями настоящего Договора и действующего законодательства Российской Федерации.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Обеспечивать Клиента ополнительной бесплатной, доступной и достоверной информацией по вопросам, связанным с оказанием услуг и иным вопросам, относящимся к предмету настоящего Договора.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Информировать Клиента об обстоятельствах, объективно препятствующих возможности оказания Услуг.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Заблаговременно извещать Клиента о необходимости предоставления доступа к Помещению для целей оказания услуг. '
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'В сроки, согласованные с Клиентом, устранять выявленные недостатки оказанных услуг, на основании уведомления от Клиента об обнаружении недостатков оказанных услуг.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Совершать действия, составляющие предмет настоящего Договора, в соответствии с указаниями Клиента, направляемыми посредством электронной почты на адрес электронной почты Сервиса, по реквизитам, указанным в настоящем Договоре, а также в соответствии с положениями настоящего Договора на наиболее выгодных для Клиента условиях.'
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
                      text: 'Сервис имеет право:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Получать оплату услуг в соответствии с условиями настоящего Договора. '
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать и получать от Клиента всю необходимую информацию, для целей оказания услуг.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Приостановить оказание услуг, в случае если Клиентом не предоставлена/ предоставлена не в полном объеме информация, необходимая для оказания услуг, до момента ее предоставления, либо не обеспечен доступ к Квартире в согласованные Сторонами сроки. '
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Сервис вправе в целях исполнения настоящего Договора привлекать третьих лиц по своему усмотрению, оставаясь ответственным за действия/бездействие таких лиц перед Клиентом. '
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать от Клиента получения доступ к Квартире в заранее согласованные сроки для целей оказания услуг. '
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
                      text: 'Клиент обязан:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Предоставить Сервису всю необходимую информацию, для целей оказания услуг.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Предоставить копию заключенного Договора аренды, а также всех приложений и дополнительных соглашений к нему.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Предоставить доступ Сервиса к Квартире в согласованные сторонами сроки, а также присутствовать в случае необходимости для целей оказания услуг.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Своевременно известить Сервис об обстоятельствах, препятствующих исполнению Сервисом своих обязательств по настоящему Договору.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Соблюдать правила проживания в Квартире, своевременно извещать Сервис об обстоятельствах, препятствующих соблюдению указанных правил.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Выплачивать вознаграждение в полном объеме в соответствии с условиями Договора.'
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
                      text: 'Клиент имеет право:'
                    },
                    {
                      type: 'list',
                      classItem: 'document__list-3',
                      contents: [
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать от Сервиса информацию об объеме и содержании услуг.'
                        },
                        {
                          type: 'item',
                          classItem: 'document__item-3',
                          text: 'Требовать возврата части стоимости оплаченных услуг, в случае невозможности оказания услуг, возникшей по вине Сервиса и продолжающейся не менее 10 (десяти) рабочих дней. При этом Сервис по согласованию с Клиентом вправе возвратить Клиенту часть стоимости оплаченных услуг за период, в течение которого услуги не оказывались, или зачесть указанные денежные средства в счет абонентской платы за следующий абонентский период. Требование о возврате части стоимости оплаченных услуг оформляется Клиентом в письменном виде. Предъявление требований, является правом, но не обязанностью Клиента.'
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
                  text: 'Настоящий Договор вступает в силу с момента его подписания Сторонами и действует в течении _______ года.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'В случае просрочки Клиентом оплаты услуг по настоящему Договору на срок более 14 (четырнадцати) рабочих дней с даты платежа, указанного в разделе 4 настоящего Договора – договор считается расторгнутым в одностороннем внесудебном порядке Сервисом без возмещения каких-либо убытков, штрафов, иных компенсаций Клиенту.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Настоящий Договор может быть изменен или расторгнут досрочно по соглашению сторон и по иным основаниям, установленным действующим законодательством Российской Федерации.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'В случае досрочного расторжения Договора по инициативе Клиента:'
                },
                {
                  type: 'list',
                  classItem: 'document__list-unordered',
                  contents: [
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'до истечения 14 (четырнадцати) календарных дней с даты вступления Договора в силу  полная стоимость услуг, уплаченная Клиентом, возвращается Клиенту;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'по истечении 14 (четырнадцати) календарных дней с даты вступления договора в силу  стоимость Услуг, уплаченная Клиентом, признается равной фактическим расходам Сервиса на оказание Услуг, не возвращается Сервису вне зависимости от объема услуг, оказанных до расторжения Договора  и оставшегося срока абонентского периода, а засчитывается в счет оплаты абонентской платы.'
                    }
                  ]
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
                }
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
                  text: 'Стоимость услуг Сервиса рассчитывается по ставке равной 5 (пять процентов) % от стоимости арендной платы, уплачиваемой Клиентом за Квартиру по Договору Аренды, но в любом случае не ниже 2 000 (две тысячи) руб. за 1 (один) месяц обслуживания, без НДС. Сервис не является плательщиком НДС в связи с применением упрощённой системы налогообложения.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Услуги оплачиваются на условиях 100 % предоплаты в срок до ____ числа месяца обслуживания, подлежащего расчету. Услуги оплачиваются путем перечисления денежных средств на расчетный счет Сервиса с использованием системы эквайринга.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Стоимость Услуг не подлежит перерасчету:  '
                },
                {
                  type: 'list',
                  classItem: 'document__list-unordered',
                  contents: [
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'в зависимости от фактического количества поручений, направленных Клиентом;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'в зависимости от фактически использованных часов обслуживания Клиентом;'
                    },
                    {
                      type: 'item',
                      classItem: 'document__item-unordered',
                      text: 'в случае неиспользования Услуг Сервиса по любым причинам, возникшим не по вине Сервиса'
                    }
                  ]
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Ежеквартально Сервис предоставляет Клиенту Акт об оказанных услугах (далее – Акт). '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Сервис обязуется в течение 3 (трех) рабочих дней с момента выставления Акта направить соответствующие документы Клиенту по электронной почте (с последующей передачей оригиналов), а Клиент обязуется ознакомиться с актом. Клиент, в случае несогласия с указанными в акте результатами обслуживания, вправе в течение 5 (пяти) рабочих дней направить мотивированное письмо Сервису с указанием спорных моментов, в противном случае Акт считается подписанным обеими Сторонами, а услуги оказанными надлежащим образом.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Датой оплаты считается дата зачисления денежных средств на расчетный счет Сервиса'
                }
              ]
            }]
          },

          {
            type: 'title',
            classItem: 'document__title',
            text: 'Порядок оказания услуг',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Оказание услуг по настоящему Договору может осуществляться на основании запросов Клиента на конкретную услугу.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Запрос может быть предоставлен в устной форме/ по электронной почте в свободной форме, Клиент самостоятельно определяет способ направления запроса на услугу, исходя из срочности, важности и содержания поручения.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Сроки оказания услуг согласно запросу Клиента по настоящему Договору напрямую зависят от объема предоставленной Клиентом информации и могут быть изменены в ходе оказания услуг. Конкретные сроки согласуются с Клиентом посредством электронной переписки по реквизитам, указанным в настоящем Договоре.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Сервис вправе предупреждать Клиента о возможных отрицательных последствиях, к которым могут привести принимаемые им решения по вопросам оказания услуг. '
                }
              ]
            }]
          },

          {
            type: 'title',
            classItem: 'document__title',
            text: 'Ответственность сторон',
            contents: [{
              type: 'list',
              classItem: 'document__list-2',
              contents: [
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'За неисполнение или ненадлежащее исполнение принятых по Договору обязательств Сервис и Клиент несут ответственность в соответствии с действующим законодательством Российской Федерации и положениями Договора.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Сервис и Клиент несут ответственность только за прямой доказанный ущерб, причиненный другой стороне в ходе исполнения Договора. Косвенные убытки, а также упущенная выгода возмещению не подлежат.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Сервис не несет ответственности за ущерб, как прямой, так и косвенный, понесенный Клиентом вследствие самостоятельного привлечения Клиентом третьих лиц для целей оказания услуг, аналогичным предмету Договора.  '
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Сервис несет ответственность за неисполнение обязательств по договору только при наличии его вины и в сумме, не превышающей стоимости услуг, предусмотренной настоящим Договором.'
                },
                {
                  type: 'item',
                  classItem: 'document__item-2-default',
                  text: 'Сторона, не исполнившая или ненадлежащим образом, исполнившая обязательства по Договору, несет ответственность, если не докажет, что  ненадлежащее исполнение или неисполнение вызваны обстоятельствами непреодолимой силы («форс-мажор») (т.е. чрезвычайными обстоятельствами, обосновано считающимися непредотвратимыми в сложившихся условиях, включая, среди прочего, явления природы (землетрясения, наводнения, пожары и иные стихийные бедствия) и сторонние обстоятельства (включая военные действия, эпидемии, забастовки, гражданские беспорядки), действия, бездействие или задержки в действиях федеральных или местных органов или государственных предприятий, а также иные действия третьих лиц и (или) события, объективно не зависящие от сторон. При чрезвычайных ситуациях природного или техногенного характера Сервис, в соответствии с действующим законодательством, вправе временно прекращать или ограничивать предоставление услуг.'
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
                  text: 'Стороны признают юридическую силу за электронными документами (сообщениями), направленными по электронной почте (e-mail) и признают их равнозначными документам на бумажных носителях, подписанным собственноручной подписью, т.к. только сами Стороны и уполномоченные лица Клиента и Сервиса имеют доступ к соответствующим средствам связи. Доступ к электронной почте каждая Сторона осуществляет по паролю и обязуется сохранять его конфиденциальность.'
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
