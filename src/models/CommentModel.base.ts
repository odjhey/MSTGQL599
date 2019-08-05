/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { PostModel } from "./PostModel"
import { PostModelSelector } from "./PostModel.base"
import { UserModel } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStore } from "./index"


/**
 * CommentBase
 * auto generated base class for the model CommentModel.
 */
export const CommentModelBase = MSTGQLObject
  .named('Comment')
  .props({
    __typename: types.optional(types.literal("Comment"), "Comment"),
    _id: types.identifier,
    text: types.maybeNull(types.string),
    author: types.maybeNull(types.late(() => UserModel)),
    post: types.maybeNull(types.late(() => PostModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class CommentModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get text() { return this.__attr(`text`) }
  author(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`author`, UserModelSelector, builder) }
  post(builder?: string | PostModelSelector | ((selector: PostModelSelector) => PostModelSelector)) { return this.__child(`post`, PostModelSelector, builder) }
}
export function selectFromComment() {
  return new CommentModelSelector()
}

export const commentModelPrimitives = selectFromComment()._id.text
