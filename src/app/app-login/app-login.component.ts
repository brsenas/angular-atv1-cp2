import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app-login.component.html',
  styleUrl: './app-login.component.css'
})
export class AppLoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  validateLogin() {
    if (!this.email || !this.password) {
      this.message = 'Campos obrigatórios!';
    } else if (!this.email.includes('@') || this.password.length < 6) {
      this.message = 'Credenciais inválidas!';
    } else {
      this.message = 'Login bem-sucedido!';
      
    }
  }
}
