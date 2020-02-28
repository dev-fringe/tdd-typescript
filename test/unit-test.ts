import "reflect-metadata";
import { Expect, Test, SetupFixture } from "alsatian";
import {container, inject} from "tsyringe";
import {Application} from "../src/Application";
import {TestService} from "../src/service/TestService";
import { Hello } from '../src/hello';
//import { SuperService } from "../src/service/SuperService";

export class TestExample {

  //constructor(@inject("SuperService") private service: SuperService) {}
  
  //i'm missing  @CompnentScan,@ContextConfiguration, AnnotationConfigApplicationContext
  @SetupFixture
  public setupFixture() {
    container.register("SuperService", {useClass: TestService});
  }
  
  @Test()
  public async unitTest() {
    const app = container.resolve(Application);
    //const response = this.service.print()
    const response = app.print()
    response.then((res) => {
      const injectResponseString = 'Received response from: ' + res.result[1].name;
      console.log(injectResponseString) //Received response from: Jane Doe
    })
    Expect('1').toBe('1'); 
  }

  //@Test()
  public async unitTest2() {
    const g = new Hello("Juri");
    await g.greet();
    console.log('test' + g.getName())
    Expect('2').toBe('2'); 
  }
}