import { NgModule } from "@angular/core";
import { GuitxoTooltipDirective } from "./directives/tooltip.directive";
import { GuitxoTooltipComponent } from "./components/tooltip.component";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";

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
  ],
  providers: [
    provideAnimations()
  ]
})
export class GuitxoTooltipModule {}
