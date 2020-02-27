import { injectable } from 'tsyringe';
//test
//ing.... no error. spring like dependency injection. typescript can't component scan 
@injectable()
export class Foo {
  getHello() {
    return 'hello';
  }
}