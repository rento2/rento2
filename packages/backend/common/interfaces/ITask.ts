import Task from 'App/Models/Task'
import { QueueTaskStatus } from './../../common/enums/QueueTaskStatus'
import { DateTime } from 'luxon'

export class Process {
  constructor (readonly task: Task) {}

  param (params: Record<string, string>): Process {
    return new Process({
      ...this.task,
      params,
    })
  }

  info (msg: string): Process {
    return new Process({
      ...this.task,
      info: `${this.task.info}${msg}`,
    })
  }

  done (): Process {
    return new Process({
      ...this.task,
      status: QueueTaskStatus.Done,
      updatedAt: new DateTime(),
    })
  }

  later (startAt: DateTime): Process {
    return new Process({
      ...this.task,
      status: QueueTaskStatus.Pending,
      startAt,
      updatedAt: new DateTime(),
    })
  }

  error (e: Error): Process {
    return new Process({
      ...this.task,
      status: QueueTaskStatus.Error,
      error: e.stack ?? e.message,
      updatedAt: new DateTime(),
    })
  }
}
