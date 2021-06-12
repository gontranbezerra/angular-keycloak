import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItems } from './services/menu-items';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective,
} from './directives/accordion';
import { MaterialModule } from './material-module';
import { SpinnerComponent } from './components/spinner.component';

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    MaterialModule,
    SpinnerComponent,
  ],
  providers: [MenuItems],
})
export class SharedModule {}
