import { Component, Input, OnInit  } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {

  @Input() buttonText = ''
  @Input() width = ''
  @Input() height = ''
  currentStyles: Record<string, string> = {};

  ngOnInit(): void {
    this.setCurrentStyles();
  }

  setCurrentStyles() {
    this.currentStyles = {
      'width': this.width || '183.6px',
      'height': this.height || '38px',
    };
  }
}
