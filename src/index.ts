// main.ts
import "reflect-metadata";
import {Application} from "./Application";
import {TestService} from "./service/TestService";
import {container} from "tsyringe";

container.register("SuperService", {useClass: TestService});

const app = container.resolve(Application);

app.print();