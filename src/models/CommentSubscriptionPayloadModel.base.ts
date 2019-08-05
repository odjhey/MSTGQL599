/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { CommentModel } from "./CommentModel"
import { CommentModelSelector } from "./CommentModel.base"
import { MutationTypeEnum } from "./MutationTypeEnum"
import { RootStore } from "./index"


/**
 * CommentSubscriptionPayloadBase
 * auto generated base class for the model CommentSubscriptionPayloadModel.
 */
export const CommentSubscriptionPayloadModelBase = MSTGQLObject
  .named('CommentSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("CommentSubscriptionPayload"), "CommentSubscriptionPayload"),
    mutation: types.maybeNull(MutationTypeEnum),
    comment: types.maybeNull(types.late(() => CommentModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class CommentSubscriptionPayloadModelSelector extends QueryBuilder {
  get mutation() { return this.__attr(`mutation`) }
  comment(builder?: string | CommentModelSelector | ((selector: CommentModelSelector) => CommentModelSelector)) { return this.__child(`comment`, CommentModelSelector, builder) }
}
export function selectFromCommentSubscriptionPayload() {
  return new CommentSubscriptionPayloadModelSelector()
}

export const commentSubscriptionPayloadModelPrimitives = selectFromCommentSubscriptionPayload().mutation
