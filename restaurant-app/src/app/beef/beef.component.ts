import { Component } from '@angular/core';

@Component({
  selector: 'app-beef',
  templateUrl: './beef.component.html',
  styleUrls: ['../burgers.scss']
})
export class BeefComponent {
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
}
