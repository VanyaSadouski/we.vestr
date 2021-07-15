import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
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
})
export class ShareholdersModule {}
