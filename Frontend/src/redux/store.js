import { legacy_createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

export const store = legacy_createStore(rootReducer, devToolsEnhancer());

export const persistor = persistStore(store);
