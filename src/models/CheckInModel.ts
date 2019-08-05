import { CheckInModelBase } from "./CheckInModel.base"

/* The TypeScript type of an instance of CheckInModel */
export type CheckInModelType = typeof CheckInModel.Type

/* A graphql query fragment builders for CheckInModel */
export { selectFromCheckIn, checkInModelPrimitives, CheckInModelSelector } from "./CheckInModel.base"

/**
 * CheckInModel
 */
export const CheckInModel = CheckInModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
