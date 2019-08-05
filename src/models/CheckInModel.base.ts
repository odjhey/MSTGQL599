/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * CheckInBase
 * auto generated base class for the model CheckInModel.
 */
export const CheckInModelBase = MSTGQLObject
  .named('CheckIn')
  .props({
    __typename: types.optional(types.literal("CheckIn"), "CheckIn"),
    id: types.identifier,
    by: types.maybeNull(types.string),
    long: types.maybeNull(types.number),
    lat: types.maybeNull(types.number),
    location: types.maybeNull(types.string),
    time: types.maybeNull(types.string),
    date: types.maybeNull(types.string),
    ticket: types.maybeNull(types.string),
    project: types.maybeNull(types.string),
    action: types.maybeNull(types.string),
    createdAt: types.maybeNull(types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class CheckInModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get by() { return this.__attr(`by`) }
  get long() { return this.__attr(`long`) }
  get lat() { return this.__attr(`lat`) }
  get location() { return this.__attr(`location`) }
  get time() { return this.__attr(`time`) }
  get date() { return this.__attr(`date`) }
  get ticket() { return this.__attr(`ticket`) }
  get project() { return this.__attr(`project`) }
  get action() { return this.__attr(`action`) }
  get createdAt() { return this.__attr(`createdAt`) }
}
export function selectFromCheckIn() {
  return new CheckInModelSelector()
}

export const checkInModelPrimitives = selectFromCheckIn().by.long.lat.location.time.date.ticket.project.action.createdAt
