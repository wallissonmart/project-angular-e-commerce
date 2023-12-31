import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productSlug: string | null = null;
  errorLoadingProduct = false;
  product: any;
  priceActive: string | null = null;
  priceInactive: string | null = null;
  faTrash = faTrash;
  faPlus = faPlus;
  quantity = 1;
  isButtonDisabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.productSlug = params.get('slug');
      this.getProductInfo();
    });
  }

  formatPrice(value: number) {
    const valueParsed = value.toString();
    return valueParsed.replace('.', ',');
  }

  removeQuantity() {
    this.quantity = this.quantity - 1;
    if (this.quantity === 0) {
      this.isButtonDisabled = true;
    }
  }

  addQuantity() {
    if (this.quantity === 0) {
      this.isButtonDisabled = false;
    }
    this.quantity = this.quantity + 1;
  }

  getProductInfo() {
    this.productService.getItemData(this.productSlug).subscribe({
      next: (response) => {
        this.errorLoadingProduct = false;
        this.product = response.data[0];
        this.priceActive = response.data[0].prices[0].promo_price;
        this.priceInactive = response.data[0].prices[0].price;
      },
      error: (error) => {
        this.errorLoadingProduct = true;
        console.log(error);
      },
    });
  }
}
