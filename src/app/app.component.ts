import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';

  constructor() {
    const config = {
      apiKey: 'AIzaSyC5OYheRZP-NeIY3svELzqR4gx_tgiFLok',
      authDomain: 'oc-angular-tutoriel.firebaseapp.com',
      databaseURL: 'https://oc-angular-tutoriel.firebaseio.com',
      projectId: 'oc-angular-tutoriel',
      storageBucket: 'oc-angular-tutoriel.appspot.com',
      messagingSenderId: '863859483434'
    };
    firebase.initializeApp(config);
  }
}
