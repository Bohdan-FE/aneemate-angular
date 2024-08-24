import { Component } from '@angular/core';
import { PlayBtComponent } from "../play-bt/play-bt.component";
import { IpCardsListComponent } from "./ip-cards-list/ip-cards-list.component";
import { BuynowBtnComponent } from "../buynow-btn/buynow-btn.component";

@Component({
  selector: 'app-ip-section',
  standalone: true,
  imports: [PlayBtComponent, IpCardsListComponent, BuynowBtnComponent],
  templateUrl: './ip-section.component.html',
  styleUrl: './ip-section.component.scss'
})
export class IpSectionComponent {

}
