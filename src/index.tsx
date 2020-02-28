// main.ts
import "reflect-metadata";
import {Application} from "./Application";
import {TestService} from "./service/TestService";
import {container} from "tsyringe";
import * as React from "react";
import * as ReactDOM from "react-dom";

container.register("SuperService", {useClass: TestService});

const app = container.resolve(Application);

app.print();
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);