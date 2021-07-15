import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@modules/material';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
