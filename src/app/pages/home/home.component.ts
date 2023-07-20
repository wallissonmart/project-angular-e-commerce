import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  productsPromo: any[] = [];
  imageURL = 'https://assets.instabuy.com.br/ib.item.image.medium/m-';
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  constructor(private router: Router, private homeService: HomeService) {}

  ngAfterViewInit() {
    this.getProductsPromo();
  }

  setupCarousel() {
    const carouselElement: HTMLElement | null = this.carousel.nativeElement;
    if (!carouselElement) return;

    const prevButton: HTMLElement | null =
      carouselElement.querySelector('.prev-button');
    const nextButton: HTMLElement | null =
      carouselElement.querySelector('.next-button');
    const products: HTMLElement | null =
      carouselElement.querySelector('.products');

    if (!prevButton || !nextButton || !products) return;

    const cardProducts: HTMLElement[] = Array.from(
      carouselElement.querySelectorAll('.card-product')
    );

    const cardProductWidth = cardProducts[0]?.offsetWidth;
    if (!cardProductWidth) return;

    const numVisibleCards = Math.floor(
      carouselElement.offsetWidth / cardProductWidth
    );

    const scrollAmount = cardProductWidth * numVisibleCards;
    let scrollPosition = 0;

    prevButton.addEventListener('click', () => {
      scrollPosition -= scrollAmount;
      if (scrollPosition < 0) {
        scrollPosition = 0;
      }
      products.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
      scrollPosition += scrollAmount;
      const maxScrollPosition = products.scrollWidth - products.clientWidth;
      if (scrollPosition > maxScrollPosition) {
        scrollPosition = maxScrollPosition;
      }
      products.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    });
  }

  onCardClick(slug: string) {
    this.router.navigate(['/product', slug]);
  }

  getProductsPromo() {
    this.homeService.getLayoutData().subscribe({
      next: (response) => {
        this.productsPromo = response.data.promo;
        setTimeout(() => {
          this.setupCarousel();
        }, 0);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
