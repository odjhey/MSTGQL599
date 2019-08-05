/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum MutationType {
  CREATED="CREATED",
DELETED="DELETED",
UPDATED="UPDATED"
}

/**
* MutationType
*/
export const MutationTypeEnum = types.enumeration("MutationType", [
        "CREATED",
  "DELETED",
  "UPDATED",
      ])
