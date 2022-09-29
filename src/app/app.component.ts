import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-event-binding-exercise';
  // click = 'message'
  message = function(){console.log('You did it!')}

}

