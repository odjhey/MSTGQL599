/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { CommentModel } from "./CommentModel"
import { CommentModelSelector } from "./CommentModel.base"
import { PostModel } from "./PostModel"
import { PostModelSelector } from "./PostModel.base"
import { RootStore } from "./index"


/**
 * UserBase
 * auto generated base class for the model UserModel.
 */
export const UserModelBase = MSTGQLObject
  .named('User')
  .props({
    __typename: types.optional(types.literal("User"), "User"),
    _id: types.maybeNull(types.string),
    name: types.maybeNull(types.string),
    email: types.maybeNull(types.string),
    age: types.maybeNull(types.integer),
    posts: types.optional(types.array(types.late(() => PostModel)), []),
    comments: types.optional(types.array(types.late(() => CommentModel)), []),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class UserModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get name() { return this.__attr(`name`) }
  get email() { return this.__attr(`email`) }
  get age() { return this.__attr(`age`) }
  posts(builder?: string | PostModelSelector | ((selector: PostModelSelector) => PostModelSelector)) { return this.__child(`posts`, PostModelSelector, builder) }
  comments(builder?: string | CommentModelSelector | ((selector: CommentModelSelector) => CommentModelSelector)) { return this.__child(`comments`, CommentModelSelector, builder) }
}
export function selectFromUser() {
  return new UserModelSelector()
}

export const userModelPrimitives = selectFromUser()._id.name.email.age
