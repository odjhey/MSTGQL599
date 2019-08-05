import { CommentSubscriptionPayloadModelBase } from "./CommentSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of CommentSubscriptionPayloadModel */
export type CommentSubscriptionPayloadModelType = typeof CommentSubscriptionPayloadModel.Type

/* A graphql query fragment builders for CommentSubscriptionPayloadModel */
export { selectFromCommentSubscriptionPayload, commentSubscriptionPayloadModelPrimitives, CommentSubscriptionPayloadModelSelector } from "./CommentSubscriptionPayloadModel.base"

/**
 * CommentSubscriptionPayloadModel
 */
export const CommentSubscriptionPayloadModel = CommentSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
