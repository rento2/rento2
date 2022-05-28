import Inpars from 'App/Services/Inpars'
import { Process } from '../common/interfaces/ITask'
import { DateTime } from 'luxon'
import Task from 'App/Models/Task'

export interface ParamsInterface {
  lastId: number
}

export default async (process: Process): Promise<Process> => {
  const { lastId } = process.task.params as ParamsInterface // 0 for first page

  const inpars = new Inpars()
  const { data, nextPage } = await inpars.listEstate(lastId)

  await Promise.all(data.map(async property => {
    return await Task.push('inparsProcessSingleProperty', {
      property
    })
  }))

  if (!nextPage) {
    return process.done()
  }

  return process.later(DateTime.now().plus({ seconds: 15 })).param({
    lastId: nextPage
  }).info('DONEEEE')
}
