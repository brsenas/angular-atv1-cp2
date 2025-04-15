import { Component } from '@angular/core';

@Component({
  selector: 'app-age-verification',
  imports: [],
  templateUrl: './age-verification.component.html',
  styleUrl: './age-verification.component.css'
})
export class AgeVerificationComponent {
  age = 16; 

  increaseAge() {
    this.age++;
  }

  decreaseAge() {
    if (this.age > 0) {
      this.age--;
    }
  }
}
