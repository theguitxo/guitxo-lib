import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GuitxoTooltipDirective } from "./directives/tooltip.directive";
import { GuitxoTooltipComponent } from "./components/tooltip.component";

@NgModule({
  declarations: [
    GuitxoTooltipDirective,
    GuitxoTooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GuitxoTooltipDirective,
    GuitxoTooltipComponent
  ]
})
export class GuitxoTooltipModule {}
