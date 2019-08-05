/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * TicketBase
 * auto generated base class for the model TicketModel.
 */
export const TicketModelBase = MSTGQLObject
  .named('Ticket')
  .props({
    __typename: types.optional(types.literal("Ticket"), "Ticket"),
    _id: types.identifier,
    projname: types.maybeNull(types.string),
    ticketname: types.maybeNull(types.string),
    date_start: types.maybeNull(types.string),
    date_end: types.maybeNull(types.string),
    man_days: types.maybeNull(types.integer),
    completion_rate: types.maybeNull(types.integer),
    remarks: types.maybeNull(types.string),
    status: types.maybeNull(types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class TicketModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get projname() { return this.__attr(`projname`) }
  get ticketname() { return this.__attr(`ticketname`) }
  get date_start() { return this.__attr(`date_start`) }
  get date_end() { return this.__attr(`date_end`) }
  get man_days() { return this.__attr(`man_days`) }
  get completion_rate() { return this.__attr(`completion_rate`) }
  get remarks() { return this.__attr(`remarks`) }
  get status() { return this.__attr(`status`) }
}
export function selectFromTicket() {
  return new TicketModelSelector()
}

export const ticketModelPrimitives = selectFromTicket()._id.projname.ticketname.date_start.date_end.man_days.completion_rate.remarks.status
