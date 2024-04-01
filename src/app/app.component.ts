import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Militsa';

  person0= {
    givenName: 'Milica',
    surName: 'Mihajlovic',
    age: 37,
    email: 'megamilica@gmail.com',
    address: 'Athens, Greece'
  }

  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 40,
    email: 'johndoe@gmail.com',
    address: 'New York, USA'
  };
}
