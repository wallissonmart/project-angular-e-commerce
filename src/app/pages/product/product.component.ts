import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productSlug: string | null = null;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.productSlug = params.get('slug');
      this.getProductInfo();
    });
  }

  getProductInfo() {
    this.productService.getItemData(this.productSlug).subscribe({
      next: (response) => {
        this.product = response.data[0];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
