import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'guitxo-expandible',
  templateUrl: './expandible.component.html',
  styleUrls: ['./expandible.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ],
  animations: [
    trigger('openClose', [
      state('true', style({ gridTemplateRows: '1fr' })),
      state('false', style({ gridTemplateRows: '0fr' })),
      transition('false <=> true', animate(1000))
    ])
  ]
})

export class GuitxoExpandibleComponent {
  isOpen = false;

  openClosePanel(): void {
    this.isOpen = !this.isOpen
  }
}


