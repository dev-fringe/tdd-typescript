import {injectable, inject} from "tsyringe";
import {SuperService} from "./service/SuperService";

@injectable()
export class Application {
  constructor(@inject("SuperService") private service: SuperService) {}
  public print(): any {
    return this.service.print();
  }  
}