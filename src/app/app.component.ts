import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Militsa';

  person = {
    givenName: 'Militsa',
    surName: 'Michailovits',
    age: 37,
    email: 'megamilica@gmail.com'
  }
}
