import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  usuarios = [
    { nome: "Bruno", idade: 21 },
    { nome: "Beatriz", idade: 20 }
  ];
}
