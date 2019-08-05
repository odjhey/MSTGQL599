/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./app/App";
import { name as appName } from "./app.json";

import { createHttpClient } from "mst-gql";
import { RootStore, StoreContext } from "./src/models";

const URL = "localhost:4000";
const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient(`http://${URL}/graphql`)
});

const AppMSTGQL = () => (
  <StoreContext.Provider value={rootStore}>
    <App />
  </StoreContext.Provider>
);

AppRegistry.registerComponent(appName, () => AppMSTGQL);

window.rootStore = rootStore;
