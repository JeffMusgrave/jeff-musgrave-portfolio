import { createStore } from "easy-peasy";
import contentModel from "../model/model";

const store = createStore({ storeContent: contentModel });

export default store;
