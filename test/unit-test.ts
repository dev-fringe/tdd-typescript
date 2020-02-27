import { Expect, Test } from "alsatian";
import { Hello } from '../src/hello';
//test
export class TestExample {

  @Test()
  public async unitTest() {
    const g = new Hello("Juri");
    await g.greet();
    console.log('test' + g.getName())
    Expect('1').toBe('1'); 
  }
}