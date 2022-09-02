import { Component } from '@angular/core';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['../burgers.scss']
})
export class ChickenComponent {
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

  order() {
    alert('Order is placed');
  }
}
