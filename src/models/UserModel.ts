import { UserModelBase } from "./UserModel.base"

/* The TypeScript type of an instance of UserModel */
export type UserModelType = typeof UserModel.Type

/* A graphql query fragment builders for UserModel */
export { selectFromUser, userModelPrimitives, UserModelSelector } from "./UserModel.base"

/**
 * UserModel
 */
export const UserModel = UserModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
