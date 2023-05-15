import { Component, Input } from "@angular/core";
import { GuitxoToolTipAlignment, GuitxoToolTipPosition } from "@guitxo/elements/tooltip/models/tooltip.model";

@Component({
  selector: 'tooltip-stories',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipStoriesComponent {
  /**
   * Message to show in the tooltip
   */
  @Input() guitxoTooltip!: string;
  @Input() guitxoTooltipPosition!: GuitxoToolTipPosition;
  @Input() guitxoTooltipAlignment!: GuitxoToolTipAlignment;
  @Input() guitxoTooltipBgColor!: string;
  @Input() guitxoTooltipFgColor!: string;
  @Input() guitxoTooltipDisabled!: boolean;
}
