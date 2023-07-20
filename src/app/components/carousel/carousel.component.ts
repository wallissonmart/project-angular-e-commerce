import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  images = [{ name: 'img-1-carousel.jpeg' }, { name: 'img-2-carousel.jpeg' }];
}
