import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-meet-the-characters',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './meet-the-characters.component.html',
  styleUrl: './meet-the-characters.component.scss'
})
export class MeetTheCharactersComponent {

}
