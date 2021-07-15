import { CommonModule } from '@angular/common';
import { provideMockStore } from '@ngrx/store/testing';

import { MaterialModule } from '@modules/material';
import { HeaderComponent } from './header.component';

const initialState = { loggedIn: false };

export const HeaderTestingModule = {
  imports: [CommonModule, MaterialModule],
  declarations: [HeaderComponent],
  providers: [provideMockStore({ initialState })],
};
