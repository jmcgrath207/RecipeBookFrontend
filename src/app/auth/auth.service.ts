import * as firebase from 'firebase'
import {error} from 'util';

export class AuthService {
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch( error => console.log(error));

  }
}
