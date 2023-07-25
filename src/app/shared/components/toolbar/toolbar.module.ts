import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LibModule } from '../../../lib/lib.module';

import { ToolbarComponent } from "./toolbar.component";


@NgModule({
    declarations: [
        ToolbarComponent,
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        LibModule,
    ],
    exports: [
        ToolbarComponent,
    ],
})
export class ToolbarModule { }