import { Component } from '@angular/core';
import { PlayBtComponent } from "../play-bt/play-bt.component";

@Component({
  selector: 'app-ip-section',
  standalone: true,
  imports: [PlayBtComponent],
  templateUrl: './ip-section.component.html',
  styleUrl: './ip-section.component.scss'
})
export class IpSectionComponent {

}
