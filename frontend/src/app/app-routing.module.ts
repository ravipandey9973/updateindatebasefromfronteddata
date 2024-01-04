import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
{
  path:'create',
  component:CreateComponent
},
{
  path:'read',
  component:ReadComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
