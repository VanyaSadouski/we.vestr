import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shareholders',
    loadChildren: () =>
      import('./pages/shareholders/shareholders.module').then(
        (m) => m.ShareholdersModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'shareholders' },
  {
    path: '**',
    redirectTo: 'shareholders',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
