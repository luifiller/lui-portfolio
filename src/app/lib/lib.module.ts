import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModeToggleModule } from "./mode-toggle/mode-toggle.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ModeToggleModule],
  exports: [ModeToggleModule],
})
export class LibModule {}
