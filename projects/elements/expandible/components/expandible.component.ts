import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'guitxo-expandible',
  templateUrl: './expandible.component.html',
  styleUrls: ['./expandible.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'true', 
        style({ height: '{{height}}px' }),
        { params: { height: 0 }}
      ),
      state('false', style({ heihgt: '0px' })),
      transition(
        'false <=> true',
        animate('.5s ease-out')
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GuitxoExpandibleComponent implements AfterViewInit {
  @ViewChild('content') content!: ElementRef;

  isOpen = false;
  heightContent!: number;

  ngAfterViewInit(): void {
    this.getContentHeight();
  }

  openClosePanel(): void {
    this.isOpen = !this.isOpen;
  }

  getContentHeight(): void {
    const container: HTMLElement = document.createElement('div');    
    const contentClone: HTMLElement = this.content.nativeElement.cloneNode(true);
    container.appendChild(contentClone);
    container.style.height = '0px';
    container.style.overflow = 'hidden';
    document.body.appendChild(container);
    this.heightContent = container.children.item(0)?.getBoundingClientRect()?.height ?? 0;
    container.remove();
  }
}


