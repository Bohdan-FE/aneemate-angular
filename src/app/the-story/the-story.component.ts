import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-the-story',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './the-story.component.html',
  styleUrl: './the-story.component.scss'
})
export class TheStoryComponent {

}
