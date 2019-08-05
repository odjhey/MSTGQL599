import { ProjectListModelBase } from "./ProjectListModel.base"

/* The TypeScript type of an instance of ProjectListModel */
export type ProjectListModelType = typeof ProjectListModel.Type

/* A graphql query fragment builders for ProjectListModel */
export { selectFromProjectList, projectListModelPrimitives, ProjectListModelSelector } from "./ProjectListModel.base"

/**
 * ProjectListModel
 */
export const ProjectListModel = ProjectListModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
