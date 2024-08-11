import { Component, Input, input } from '@angular/core';
import { PlayBtComponent } from "../play-bt/play-bt.component";
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayBtComponent, NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() isMenuOpen = false
}
