import { TicketModelBase } from "./TicketModel.base"

/* The TypeScript type of an instance of TicketModel */
export type TicketModelType = typeof TicketModel.Type

/* A graphql query fragment builders for TicketModel */
export { selectFromTicket, ticketModelPrimitives, TicketModelSelector } from "./TicketModel.base"

/**
 * TicketModel
 */
export const TicketModel = TicketModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
