import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleMenuEvent = new EventEmitter<boolean>()
  
  togleMenu() {
    this.toggleMenuEvent.emit()
  }
}
