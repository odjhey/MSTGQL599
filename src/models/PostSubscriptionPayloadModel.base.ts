/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { MutationTypeEnum } from "./MutationTypeEnum"
import { PostModel } from "./PostModel"
import { PostModelSelector } from "./PostModel.base"
import { RootStore } from "./index"


/**
 * PostSubscriptionPayloadBase
 * auto generated base class for the model PostSubscriptionPayloadModel.
 */
export const PostSubscriptionPayloadModelBase = MSTGQLObject
  .named('PostSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("PostSubscriptionPayload"), "PostSubscriptionPayload"),
    mutation: types.maybeNull(MutationTypeEnum),
    post: types.maybeNull(types.late(() => PostModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class PostSubscriptionPayloadModelSelector extends QueryBuilder {
  get mutation() { return this.__attr(`mutation`) }
  post(builder?: string | PostModelSelector | ((selector: PostModelSelector) => PostModelSelector)) { return this.__child(`post`, PostModelSelector, builder) }
}
export function selectFromPostSubscriptionPayload() {
  return new PostSubscriptionPayloadModelSelector()
}

export const postSubscriptionPayloadModelPrimitives = selectFromPostSubscriptionPayload().mutation
