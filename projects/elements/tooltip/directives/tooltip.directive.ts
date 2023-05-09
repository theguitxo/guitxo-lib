import {
  ApplicationRef, ComponentRef, Directive,
  ElementRef, EnvironmentInjector, HostListener,
  Input, createComponent
} from "@angular/core";
import { GuitxoTooltipComponent } from "../components/tooltip.component";
import { take } from "rxjs";
import { GuitxoToolTipAlignment, GuitxoToolTipPosition } from "../models/tooltip.model";

@Directive({
  selector: '[guitxo-tooltip]'
})
export class GuitxoTooltipDirective {
  @HostListener ('mouseenter') onMouseEnter() {
    if (!this.tooltipDisabled) {
      this.mouseEnter();
    }
  };
  @HostListener ('mouseleave') onMouseLeave () {
    if (!this.tooltipDisabled) {
      this.mouseLeave();
    }
  }

  @Input('guitxo-tooltip') tooltipMessage!: string;
  @Input('guitxo-tooltip-position') tooltipPosition: GuitxoToolTipPosition = 'top';
  @Input('guitxo-tooltip-alignment') tooltipAlignment: GuitxoToolTipAlignment = 'center';
  @Input('guitxo-tooltip-background-color') tooltipBackgroundColor = '#566573';
  @Input('guitxo-tooltip-foreground-color') tooltipForegroundColor = '#FFFFFF';
  @Input('guitxo-tooltip-disabled') tooltipDisabled = false;

  componentRef!: ComponentRef<GuitxoTooltipComponent>;

  constructor(
    private readonly eleRef: ElementRef,
    private readonly appRef: ApplicationRef,
    private readonly injector: EnvironmentInjector
  ) {}

  mouseEnter() {
    this.componentRef = createComponent(GuitxoTooltipComponent, {
      environmentInjector: this.injector
    });
    this.setInputData();
    this.componentRef.instance.destroyed.pipe(take(1)).subscribe(() => this.componentRef.destroy());
    document.body.appendChild(this.componentRef.location.nativeElement);
    this.appRef.attachView(this.componentRef.hostView);
    this.componentRef.setInput('show', true);
  }

  mouseLeave() {
    this.componentRef.setInput('show', false);
  }

  setInputData(): void {
    this.componentRef.setInput('info', this.eleRef?.nativeElement?.getBoundingClientRect());
    this.componentRef.setInput('message', this.tooltipMessage);
    this.componentRef.setInput('position', this.tooltipPosition);
    this.componentRef.setInput('alignment', this.tooltipAlignment);
    this.componentRef.setInput('bgcolor', this.tooltipBackgroundColor);
    this.componentRef.setInput('fgcolor', this.tooltipForegroundColor);
  }
}
