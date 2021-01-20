import * as ReactDOM from "react-dom";
import * as React from "react";

import { App } from "./components/App";
import * as defaults from './defaults';


const e = React.createElement;
const app = ReactDOM.render(e(App, {defaults: defaults}), document.getElementById("starter"));

(window as any).app = app;
