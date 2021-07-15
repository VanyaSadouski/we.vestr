import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {
  CreateShareholderComponent,
  SplitStockComponent,
  UpdateShareholderComponent,
} from './components';
import { ShareholdersListResolver } from './resolvers';
import { ShareholderResolver } from './resolvers/shareholder';
import { ShareholdersComponent } from './shareholders.component';

const routes: Route[] = [
  {
    path: '',
    component: ShareholdersComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      shareholders: ShareholdersListResolver,
    },
  },
  {
    path: 'add',
    component: CreateShareholderComponent,
  },
  {
    path: 'edit/:id',
    component: UpdateShareholderComponent,
    resolve: {
      shareholder: ShareholderResolver,
    },
  },
  {
    path: 'split-stock',
    component: SplitStockComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ShareholdersRoutingModule {}
