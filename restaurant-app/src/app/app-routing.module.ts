import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeefComponent } from './beef/beef.component';
import { ChickenComponent } from './chicken/chicken.component';
import { FirstPageComponent } from './first-page/first-page.component';

const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent
  },
  {
    path: 'chicken',
    component: ChickenComponent
  },
  {
    path: 'beef',
    component: BeefComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
