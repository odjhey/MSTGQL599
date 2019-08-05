import { RootStoreBase } from "./RootStore.base";
import { types } from "mobx-state-tree";
import { SimpleModel } from "./SimpleModel";
import { TicketModel } from "./TicketModel";
import { selectFromTicket } from "./TicketModel.base";

export type RootStoreType = typeof RootStore.Type;

// prettier-ignore
const TIX_FRAGMENT = selectFromTicket()
  .ticketname
  .remarks
  .toString()

export const RootStore = RootStoreBase.props({
  sortedTickets: types.optional(
    types.array(types.late(() => types.reference(TicketModel))),
    []
  )
}).actions(self => ({
  afterCreate() {
    self.subscribeNewTicket({}, TIX_FRAGMENT, ticket => {
      console.log("samting arrived zzz:", ticket);
      self.sortedTickets.unshift(ticket);
    });
  },
  loadTickets() {
    const query = self.queryTickets();
    query.then(data => {
      if (query.data) {
        self.sortedTickets.push(...query.data.tickets);
      }
    });
    return query;
  },
  loadInitialTickets() {
    return self.loadTickets();
  }
}));
