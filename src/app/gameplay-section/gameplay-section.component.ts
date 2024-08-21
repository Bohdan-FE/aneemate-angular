import { Component } from '@angular/core';
import { PlayBtComponent } from "../play-bt/play-bt.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-gameplay-section',
  standalone: true,
  imports: [PlayBtComponent, ButtonComponent],
  templateUrl: './gameplay-section.component.html',
  styleUrl: './gameplay-section.component.scss'
})
export class GameplaySectionComponent {

}
