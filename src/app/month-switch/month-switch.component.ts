import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-month-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './month-switch.component.html',
  styleUrl: './month-switch.component.css'
})
export class MonthSwitchComponent {
  month = 1
  months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

  changeMonth (event:Event):void {
    const target = event.target as HTMLSelectElement;
    this.month = Number(target.value);
  }
}