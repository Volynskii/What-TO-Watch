import {combineReducers} from "redux";
import сatalog from "./catalog/catalog";
import NameSpaces from "./name-spaces";

console.log()
export default combineReducers({
  [NameSpaces.Catalog]: сatalog,
});