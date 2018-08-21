import { Component } from '@angular/core';
import { User } from './user';
import { error } from 'util';





@Component({
  selector:'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue','TypeScript'];

  topicHasError = true;
  submitted = false;
  errorMsg = '';



  //userModel = new User ('Rob', 'rob@test.com', 9878787898, 'default', 'morning', true);

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
}
