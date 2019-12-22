import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  topics = ['JAVA', 'Angular', 'React', 'Selenium' ];
  userModel = new User('Deepti', 'Deep@gmail.com', 7708607977, 8062257, '', 'Morning', true );
}
