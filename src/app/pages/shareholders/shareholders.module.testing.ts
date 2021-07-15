import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@modules/material';
import {
  CreateShareholderComponent,
  ShareholderFormComponent,
  ShareholdersListComponent,
  SplitStockComponent,
  UpdateShareholderComponent,
} from './components';
import { ShareholdersRoutingModule } from './shareholders-routing.module';
import { ShareholdersComponent } from './shareholders.component';

export const ShareholdersModuleTestingModule = {
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientTestingModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterTestingModule,
    ShareholdersRoutingModule,
  ],
  declarations: [
    ShareholdersComponent,
    ShareholdersListComponent,
    CreateShareholderComponent,
    ShareholderFormComponent,
    UpdateShareholderComponent,
    SplitStockComponent,
  ],
};
