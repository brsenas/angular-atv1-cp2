import { Component } from '@angular/core';

@Component({
  selector: 'app-promotion-itens',
  imports: [],
  templateUrl: './promotion-itens.component.html',
  styleUrl: './promotion-itens.component.css'
})
export class PromotionItensComponent {
products =[{name: "Notebook", price:3000, promotion:true}, {name:"Mouse", price:50, promotion:false},  { name: "Teclado", price: 150, promotion: true },
  { name: "Monitor", price: 1200, promotion: false }]
}
