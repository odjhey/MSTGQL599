import { ActivityLogModelBase } from "./ActivityLogModel.base"

/* The TypeScript type of an instance of ActivityLogModel */
export type ActivityLogModelType = typeof ActivityLogModel.Type

/* A graphql query fragment builders for ActivityLogModel */
export { selectFromActivityLog, activityLogModelPrimitives, ActivityLogModelSelector } from "./ActivityLogModel.base"

/**
 * ActivityLogModel
 */
export const ActivityLogModel = ActivityLogModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
