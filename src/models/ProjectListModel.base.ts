/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * ProjectListBase
 * auto generated base class for the model ProjectListModel.
 */
export const ProjectListModelBase = MSTGQLObject
  .named('ProjectList')
  .props({
    __typename: types.optional(types.literal("ProjectList"), "ProjectList"),
    _id: types.identifier,
    projname: types.maybeNull(types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class ProjectListModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get projname() { return this.__attr(`projname`) }
}
export function selectFromProjectList() {
  return new ProjectListModelSelector()
}

export const projectListModelPrimitives = selectFromProjectList()._id.projname
