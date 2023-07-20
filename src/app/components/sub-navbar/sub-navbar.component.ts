import { Component } from '@angular/core';
import {
  faHouseChimney,
  faBorderAll,
  faTags,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css'],
})
export class SubNavbarComponent {
  faHouseChimney = faHouseChimney;
  faBorderAll = faBorderAll;
  faTags = faTags;
}
