import { Component } from '@angular/core';
import { PlayBtComponent } from "../play-bt/play-bt.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayBtComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
