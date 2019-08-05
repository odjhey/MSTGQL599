/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { CommentModel } from "./CommentModel"
import { CommentModelSelector } from "./CommentModel.base"
import { UserModel } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStore } from "./index"


/**
 * PostBase
 * auto generated base class for the model PostModel.
 */
export const PostModelBase = MSTGQLObject
  .named('Post')
  .props({
    __typename: types.optional(types.literal("Post"), "Post"),
    _id: types.identifier,
    title: types.maybeNull(types.string),
    body: types.maybeNull(types.string),
    published: types.maybeNull(types.boolean),
    author: types.maybeNull(types.late(() => UserModel)),
    comments: types.optional(types.array(types.late(() => CommentModel)), []),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class PostModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get title() { return this.__attr(`title`) }
  get body() { return this.__attr(`body`) }
  get published() { return this.__attr(`published`) }
  author(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`author`, UserModelSelector, builder) }
  comments(builder?: string | CommentModelSelector | ((selector: CommentModelSelector) => CommentModelSelector)) { return this.__child(`comments`, CommentModelSelector, builder) }
}
export function selectFromPost() {
  return new PostModelSelector()
}

export const postModelPrimitives = selectFromPost()._id.title.body.published
