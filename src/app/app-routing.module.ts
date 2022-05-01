import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
},{
  path: 'products',
  loadChildren: () =>
      import('./views/products/products.module').then((m) => m.ProductsModule),
},{
  path: 'product-create',
  loadChildren: () =>
      import('./components/product/product-create/product-create.module').then((m) => m.ProductCreateModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
