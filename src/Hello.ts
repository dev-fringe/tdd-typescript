import {injectable} from "tsyringe";
import * as restm from 'typed-rest-client/RestClient';
//test
export interface Person {
    name : string;
    age : string;
}

//ing.... no error. spring like dependency injection. typescript can't component scan 
@injectable()
class Foo {}

export class Hello {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    async greet(){
        try {
            let rest : restm.RestClient = new restm.RestClient('rest-samples','http://localhost:8080')//https://web-function.herokuapp.com/person :: Free app run time quota exhausted
            let res : restm.IRestResponse<Person> = await rest.get<Person>('person');
            console.log(`Hi, ${this.name}!`);
            console.log(res.result);
            console.log(res.headers);
            console.log(res.statusCode);
            this.name = res.result[0].name;
            console.log(this.name + '= sdsds')
        }catch (err) {
            console.error('Failed: ' + err.message);
        }        
    }
    getName() : string{
        return this.name;
    }
}