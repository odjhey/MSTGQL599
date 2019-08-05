import React, { Fragment } from "react";
import { View, Text } from "react-native";

import { useQuery } from "../src/models/reactUtils";
import { observer } from "mobx-react";
import { getSnapshot } from "mobx-state-tree";
import { isTemplateElement } from "@babel/types";

const App = () => {
  const { store, setQuery, loading, error, data } = useQuery((store: any) => {
    return store.loadTickets();
  });

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (store.sortedTickets.length > 0) {
    return (
      <View>
        {store.sortedTickets.map((item, i) => (
          <Text key={i}>{item.ticketname}</Text>
        ))}
      </View>
    );
  }

  return <Text>Err</Text>;
};

export default observer(App);
