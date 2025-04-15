import { PromotionItensComponent } from './promotion-itens/promotion-itens.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonthSwitchComponent } from './month-switch/month-switch.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AgeVerificationComponent } from './age-verification/age-verification.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { UserListComponent } from './user-list/user-list.component';
import { ValueSwitchComponent } from "./value-switch/value-switch.component";
import { AppLoginComponent } from './app-login/app-login.component';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MonthSwitchComponent, ShoppingListComponent, AgeVerificationComponent, 
    ToDoListComponent, OrderStatusComponent, UserListComponent, ValueSwitchComponent, AppLoginComponent, 
    PromotionItensComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-atv1-cp2';
}
