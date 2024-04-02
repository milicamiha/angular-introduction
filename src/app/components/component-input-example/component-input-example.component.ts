import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Milica',
    surName: 'Mihajlovic',
    age: 37,
    email: 'megamilica@gmail.com',
    address: 'Athens, Greece'
  }

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 40,
    email: 'johndoe@gmail.com',
    address: 'New York, USA'
  };

}
