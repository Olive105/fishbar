import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {ProductService} from '../../core/services/product.service';

@Component({
  selector: 'fishbar-checkout-section',
  templateUrl: './checkout-section.component.html',
  styleUrls: ['./checkout-section.component.scss']
})
export class CheckoutSectionComponent implements OnInit {
  cartProducts: any[] = [];
  itemPrice: any[] = [];

  constructor(@Inject(DOCUMENT) private document: Document, public productService: ProductService) { }

  ngOnInit(): void {
    this.document.body.className = 'woocommerce-checkout';
    this.getCartProduct();
    this.getItemPrice();
  }

  getCartProduct(): void {
    this.cartProducts = this.productService.getLocalCartProducts();
  }

  getItemPrice(): void {
    this.itemPrice = this.productService.getItemPrice();
  }
}
