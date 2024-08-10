import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-hidden-islands',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hidden-islands.component.html',
  styleUrl: './hidden-islands.component.scss'
})
export class HiddenIslandsComponent {

}
