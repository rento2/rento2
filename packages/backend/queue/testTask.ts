import { Process } from 'common/interfaces/ITask'

export default async (process: Process): Promise<Process> => {
  console.info('success')
  return process.done()
}
