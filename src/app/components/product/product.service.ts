import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3002/products';

  constructor(
      private snackBar: MatSnackBar,
      private httpClient: HttpClient
  ) {

  }

  mostrarMensagem(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  criarProduto(produto: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, produto);
  }
}
