import { IEvent } from '@nestjs/cqrs';

export class FacilitiesSyncedEvent implements IEvent {
  constructor(public readonly ids: string[]) {}
}
