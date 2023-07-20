import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  faMagnifyingGlass,
  faList,
  faUser,
  faChevronDown,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('inputSearch') inputSearch: ElementRef | undefined;
  changeBorderColor = false;
  faMagnifyingGlass = faMagnifyingGlass;
  faList = faList;
  faUser = faUser;
  faChevronDown = faChevronDown;
  faCartShopping = faCartShopping;

  onFocusInput() {
    const input = this.inputSearch?.nativeElement;
    input.setAttribute('style', 'background-color: #fff');
    this.changeBorderColor = true;
  }

  onBlurInput() {
    const input = this.inputSearch?.nativeElement;
    input.setAttribute('style', 'background-color: #f7f7f7');
    this.changeBorderColor = false;
  }
}
