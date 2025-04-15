import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  tasks = ["Estudar Angular ", "Fazer exercícios ", "Revisar código "];

  removeTask(index: number) {
    this.tasks.splice(index, 1);}
}
