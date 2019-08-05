import { RootStoreBase } from "./RootStore.base";
import { types } from "mobx-state-tree";
import { SimpleModel } from "./SimpleModel";
import { selectFromTicket } from "./TicketModel.base";

export type RootStoreType = typeof RootStore.Type;

export const RootStore = RootStoreBase.props({
  sortedTickets: types.optional(
    types.array(types.late(() => types.reference(SimpleModel))),
    []
  )
}).actions(self => ({
  loadTickets() {
    console.log("store", self.store);
    const query = self.querySimples();
    query.then(() => {
      self.sortedTickets.push(...query.data.simples);
    });
    return query;
  },
  loadInitialTickets() {
    return self.loadTickets();
  }
}));
