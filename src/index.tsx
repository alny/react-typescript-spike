import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Routes } from "./components/routes";

ReactDOM.render(<Routes />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
