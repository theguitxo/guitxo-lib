import { NgModule } from "@angular/core";
import { GuitxoExpandibleComponent } from "./components/expandible.component";
import { CommonModule } from "@angular/common";
import { provideAnimations } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    GuitxoExpandibleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GuitxoExpandibleComponent
  ],
  providers: [
    provideAnimations()
  ]
})
export class GuitxoExpandibleModule {}
