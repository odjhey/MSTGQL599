/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * SimpleBase
 * auto generated base class for the model SimpleModel.
 */
export const SimpleModelBase = MSTGQLObject
  .named('Simple')
  .props({
    __typename: types.optional(types.literal("Simple"), "Simple"),
    id: types.identifier,
    simpleValue: types.maybeNull(types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class SimpleModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get simpleValue() { return this.__attr(`simpleValue`) }
}
export function selectFromSimple() {
  return new SimpleModelSelector()
}

export const simpleModelPrimitives = selectFromSimple().simpleValue
