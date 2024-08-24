import { Component } from '@angular/core';
import { PlayBtComponent } from "../../play-bt/play-bt.component";

@Component({
  selector: 'app-ip-cards-list',
  standalone: true,
  imports: [PlayBtComponent],
  templateUrl: './ip-cards-list.component.html',
  styleUrl: './ip-cards-list.component.scss'
})
export class IpCardsListComponent {

}
