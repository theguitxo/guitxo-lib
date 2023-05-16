import { trigger, style, animate, transition } from '@angular/animations';
import {
  AfterViewInit, Component,
  ElementRef, EventEmitter, Input,
  OnDestroy, OnInit, Output, Renderer2,
  ViewChild
} from "@angular/core";
import { GuitxoToolTipAlignment, GuitxoToolTipPosition } from '../models/tooltip.model';

@Component({
  selector: 'guitxo-tooltip',
  templateUrl: 'tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate('.5s ease-in-out', style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate('.25s ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class GuitxoTooltipComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('tooltipContainer') tooltipContainer!: ElementRef;
  
  @Input() message!: string;
  @Input() info!: DOMRect;
  @Input() position!: GuitxoToolTipPosition;
  @Input() alignment!: GuitxoToolTipAlignment;
  @Input() bgcolor!: string;
  @Input() fgcolor!: string;
  @Input() show = false;

  @Output() destroyed: EventEmitter<void> = new EventEmitter();

  tooltipInfo!: DOMRect;
  customClass!: string;

  arrowGap = 10;

  constructor(
    private readonly renderer: Renderer2,
    private readonly element: ElementRef
  ) {}

  ngOnInit(): void {
    this.customClass = `guitxo-tooltip__container--${this.position}-${this.alignment}`;
  }

  ngAfterViewInit(): void {
    this.tooltipInfo = this.tooltipContainer.nativeElement.getBoundingClientRect();
    const top = this.topPosition();
    const left = this.leftPosition();
    this.renderer.setStyle(this.tooltipContainer.nativeElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipContainer.nativeElement, 'left', `${left}px`);
    this.tooltipContainer.nativeElement.style.setProperty('--backgroundcolor', this.bgcolor);
  }

  ngOnDestroy(): void {
    this.element.nativeElement.remove();
  }

  animationDone(): void {
    if (!this.show) {
      this.destroyed.emit();
    }
  }

  topPosition(): number {
    let top = 0;

    if (this.position === 'left' || this.position === 'right') {
      top = (this.info.top + this.info.height / 2) - (this.tooltipInfo.height / 2);
    } else if (this.position === 'bottom') {
      top = this.info.bottom + this.arrowGap;
    } else {
      top = this.info.top - this.tooltipInfo.height - this.arrowGap;
    }

    return top + window.scrollY;
  }

  leftPosition(): number {
    let left = 0;

    if (this.position === 'right') {
      left = this.info.right + this.arrowGap;
    } else if (this.position === 'left') {
      left = this.info.left - this.tooltipInfo.width - this.arrowGap;
    } else {
      if (this.alignment === 'start') {
        left = this.info.left;
      } else if (this.alignment === 'end') {
        left = this.info.right - this.tooltipInfo.width;
      } else {
        left = (this.info.left + this.info.width / 2) - (this.tooltipInfo.width / 2);
      }
    }

    return left + window.scrollX;
  }
}
