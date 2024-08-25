import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from "./home/home.component";
import { MeetTheCharactersComponent } from "./meet-the-characters/meet-the-characters.component";
import { ClipPathesComponent } from "./clip-pathes/clip-pathes.component";
import { TheStoryComponent } from "./the-story/the-story.component";
import { HiddenIslandsComponent } from "./hidden-islands/hidden-islands.component";
import { GameplaySectionComponent } from "./gameplay-section/gameplay-section.component";
import { IpSectionComponent } from "./ip-section/ip-section.component";
import { FollowUsSectionComponent } from "./follow-us-section/follow-us-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, MeetTheCharactersComponent, ClipPathesComponent, TheStoryComponent, HiddenIslandsComponent, GameplaySectionComponent, IpSectionComponent, FollowUsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'qorpo-angular';
  isMenuOpen = false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
