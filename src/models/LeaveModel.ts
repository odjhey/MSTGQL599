import { LeaveModelBase } from "./LeaveModel.base"

/* The TypeScript type of an instance of LeaveModel */
export type LeaveModelType = typeof LeaveModel.Type

/* A graphql query fragment builders for LeaveModel */
export { selectFromLeave, leaveModelPrimitives, LeaveModelSelector } from "./LeaveModel.base"

/**
 * LeaveModel
 */
export const LeaveModel = LeaveModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
