import { ListTestModelBase } from "./ListTestModel.base"

/* The TypeScript type of an instance of ListTestModel */
export type ListTestModelType = typeof ListTestModel.Type

/* A graphql query fragment builders for ListTestModel */
export { selectFromListTest, listTestModelPrimitives, ListTestModelSelector } from "./ListTestModel.base"

/**
 * ListTestModel
 */
export const ListTestModel = ListTestModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
