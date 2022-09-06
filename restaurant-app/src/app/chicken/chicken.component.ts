import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['../burgers.scss']
})
export class ChickenComponent {

  constructor(private router: Router) { }

  burgers: any[] = [
    {
      'name': 'Burger 1',
      'desc': 'description description description description description description description description description description description description description description ',
    },
    {
      'name': 'Burger 2',
      'desc': 'description description description description description description description description description description description description description description ',
    },
    {
      'name': 'Burger 3',
      'desc': 'description description description description description description description description description description description description description description ',
    },
    {
      'name': 'Burger 4',
      'desc': 'description description description description description description description description description description description description description description ',
    },
  ]

  addBurgerToCart() {
    alert('burger added to cart');
    this.router.navigateByUrl('/meal');
  }
}
