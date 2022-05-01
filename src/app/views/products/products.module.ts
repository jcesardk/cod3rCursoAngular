import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products.component";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  }
];


@NgModule({
  declarations: [ProductsComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
  ]
})
export class ProductsModule { }
