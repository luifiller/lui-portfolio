import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { LibModule } from '../lib/lib.module';
import { ToolbarModule } from '../shared/components/toolbar/toolbar.module';


@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    LibModule,
    ToolbarModule,
  ],
  exports: [
    ProfileComponent,
  ],
})
export class ProfileModule { }
