/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * ListTestBase
 * auto generated base class for the model ListTestModel.
 */
export const ListTestModelBase = MSTGQLObject
  .named('ListTest')
  .props({
    __typename: types.optional(types.literal("ListTest"), "ListTest"),
    _id: types.maybeNull(types.string),
    name: types.maybeNull(types.string),
    avatar_url: types.maybeNull(types.string),
    subtitle: types.maybeNull(types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class ListTestModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get name() { return this.__attr(`name`) }
  get avatar_url() { return this.__attr(`avatar_url`) }
  get subtitle() { return this.__attr(`subtitle`) }
}
export function selectFromListTest() {
  return new ListTestModelSelector()
}

export const listTestModelPrimitives = selectFromListTest()._id.name.avatar_url.subtitle
