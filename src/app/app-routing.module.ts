import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// ✅ FIX
import { AuthGuard } from './core/authguard/auth.guard';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [

  // AUTH (NO GUARD)
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule)
  },

  // MAIN APP
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module')
            .then(m => m.DashboardModule)
      }
    ]
  },

  // FALLBACK
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
