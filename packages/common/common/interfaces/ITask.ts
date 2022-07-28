import Task from 'App/Models/Task'
import { QueueTaskStatus } from './../../common/enums/QueueTaskStatus'
import { DateTime } from 'luxon'

export class Process {
  constructor (readonly task: Task) {}

  param (params: Record<string, any>): Process {
    return new Process({
      ...this.task,
      params,
    })
  }

  info (msg: string): Process {
    return new Process({
      ...this.task,
      info: `${msg ?? ''}\n${this.task.info ?? ''}`,
    })
  }

  done (): Process {
    return new Process({
      ...this.task,
      status: QueueTaskStatus.Done,
      updatedAt: DateTime.now(),
    })
  }

  later (startAt: DateTime): Process {
    return new Process({
      ...this.task,
      status: QueueTaskStatus.Pending,
      startAt,
      updatedAt: DateTime.now(),
    })
  }

  error (e: Error): Process {
    return new Process({
      ...this.task,
      status: QueueTaskStatus.Error,
      error: e.stack ?? e.message,
      updatedAt: DateTime.now(),
    })
  }
}
