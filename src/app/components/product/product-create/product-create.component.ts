import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
    formProduto: FormGroup;

    constructor(
        private productService: ProductService,
        private router: Router,
    ) {
        this.formProduto = new FormGroup({
            name: new FormControl('', [Validators.required]),
            price: new FormControl('', [Validators.required])
        })
    }

    ngOnInit(): void {
    }

    criarProduto() {
        if (this.formProduto.valid) {
            this.productService.criarProduto(this.formProduto.getRawValue()).subscribe(() => {
                this.productService.mostrarMensagem('Operação executada com sucesso!');
                this.router.navigateByUrl('/products');
            })
        } return this.productService.mostrarMensagem('Não foi possivel salvar os dados!')
    }

    cancelar() {
        this.router.navigateByUrl('/');
    }

}
