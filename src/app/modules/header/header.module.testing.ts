import { CommonModule } from '@angular/common';

import { MaterialModule } from '@modules/material';
import { HeaderComponent } from './header.component';

export const HeaderTestingModule = {
  imports: [CommonModule, MaterialModule],
  declarations: [HeaderComponent],
  providers: [],
};
