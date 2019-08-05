/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * LeaveBase
 * auto generated base class for the model LeaveModel.
 */
export const LeaveModelBase = MSTGQLObject
  .named('Leave')
  .props({
    __typename: types.optional(types.literal("Leave"), "Leave"),
    _id: types.identifier,
    projname: types.maybeNull(types.string),
    leave_start: types.maybeNull(types.string),
    leave_end: types.maybeNull(types.string),
    options: types.maybeNull(types.boolean),
    leave_type: types.maybeNull(types.string),
    with_pay: types.maybeNull(types.boolean),
    remarks: types.maybeNull(types.string),
    status: types.maybeNull(types.string),
    work_hour: types.maybeNull(types.integer),
    date_created: types.maybeNull(types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class LeaveModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get projname() { return this.__attr(`projname`) }
  get leave_start() { return this.__attr(`leave_start`) }
  get leave_end() { return this.__attr(`leave_end`) }
  get options() { return this.__attr(`options`) }
  get leave_type() { return this.__attr(`leave_type`) }
  get with_pay() { return this.__attr(`with_pay`) }
  get remarks() { return this.__attr(`remarks`) }
  get status() { return this.__attr(`status`) }
  get work_hour() { return this.__attr(`work_hour`) }
  get date_created() { return this.__attr(`date_created`) }
}
export function selectFromLeave() {
  return new LeaveModelSelector()
}

export const leaveModelPrimitives = selectFromLeave()._id.projname.leave_start.leave_end.options.leave_type.with_pay.remarks.status.work_hour.date_created
