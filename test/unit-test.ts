import "reflect-metadata";
import { Expect, Test, SetupFixture, AsyncTest } from "alsatian";
import {Application} from "../src/Application";
import {TestService} from "../src/service/TestService";
import {container} from "tsyringe";
import { Hello } from '../src/hello';

export class TestExample {

  //i'm missing the @CompnentScan,@ContextConfiguration, AnnotationConfigApplicationContext
  @SetupFixture
  public setupFixture() {
    container.register("SuperService", {useClass: TestService});
  }

  @AsyncTest()
  public async unitTest() {
    const app = container.resolve(Application);
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