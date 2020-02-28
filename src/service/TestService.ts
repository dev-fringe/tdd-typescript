import {SuperService} from "./SuperService";
import * as restm from 'typed-rest-client/RestClient';

export class TestService implements SuperService {
    public print() : any {
        try {
            let rest : restm.RestClient = new restm.RestClient('rest-samples','http://localhost:8080')//https://web-function.herokuapp.com/person :: Free app run time quota exhausted
            return rest.get('person');
        }catch (err) {
            console.error('Failed: ' + err.message);
            return 'Failed: ' + err.message;
        }        
      }
}