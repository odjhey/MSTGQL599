import { CommentModelBase } from "./CommentModel.base"

/* The TypeScript type of an instance of CommentModel */
export type CommentModelType = typeof CommentModel.Type

/* A graphql query fragment builders for CommentModel */
export { selectFromComment, commentModelPrimitives, CommentModelSelector } from "./CommentModel.base"

/**
 * CommentModel
 */
export const CommentModel = CommentModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
