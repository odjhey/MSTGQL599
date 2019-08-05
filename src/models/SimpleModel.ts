import { SimpleModelBase } from "./SimpleModel.base"

/* The TypeScript type of an instance of SimpleModel */
export type SimpleModelType = typeof SimpleModel.Type

/* A graphql query fragment builders for SimpleModel */
export { selectFromSimple, simpleModelPrimitives, SimpleModelSelector } from "./SimpleModel.base"

/**
 * SimpleModel
 */
export const SimpleModel = SimpleModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
