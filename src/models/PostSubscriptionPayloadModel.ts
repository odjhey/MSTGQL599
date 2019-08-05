import { PostSubscriptionPayloadModelBase } from "./PostSubscriptionPayloadModel.base"

/* The TypeScript type of an instance of PostSubscriptionPayloadModel */
export type PostSubscriptionPayloadModelType = typeof PostSubscriptionPayloadModel.Type

/* A graphql query fragment builders for PostSubscriptionPayloadModel */
export { selectFromPostSubscriptionPayload, postSubscriptionPayloadModelPrimitives, PostSubscriptionPayloadModelSelector } from "./PostSubscriptionPayloadModel.base"

/**
 * PostSubscriptionPayloadModel
 */
export const PostSubscriptionPayloadModel = PostSubscriptionPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
