/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * ActivityLogBase
 * auto generated base class for the model ActivityLogModel.
 */
export const ActivityLogModelBase = MSTGQLObject
  .named('ActivityLog')
  .props({
    __typename: types.optional(types.literal("ActivityLog"), "ActivityLog"),
    id: types.identifier,
    workHours: types.maybeNull(types.string),
    from: types.maybeNull(types.string),
    to: types.maybeNull(types.string),
    location: types.maybeNull(types.string),
    completionRate: types.maybeNull(types.integer),
    dateToday: types.maybeNull(types.string),
    remarks: types.maybeNull(types.string),
    projects: types.maybeNull(types.string),
    status: types.maybeNull(types.string),
    createdAt: types.maybeNull(types.string),
    ticketID: types.maybeNull(types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class ActivityLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get workHours() { return this.__attr(`workHours`) }
  get from() { return this.__attr(`from`) }
  get to() { return this.__attr(`to`) }
  get location() { return this.__attr(`location`) }
  get completionRate() { return this.__attr(`completionRate`) }
  get dateToday() { return this.__attr(`dateToday`) }
  get remarks() { return this.__attr(`remarks`) }
  get projects() { return this.__attr(`projects`) }
  get status() { return this.__attr(`status`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get ticketID() { return this.__attr(`ticketID`) }
}
export function selectFromActivityLog() {
  return new ActivityLogModelSelector()
}

export const activityLogModelPrimitives = selectFromActivityLog().workHours.from.to.location.completionRate.dateToday.remarks.projects.status.createdAt.ticketID
