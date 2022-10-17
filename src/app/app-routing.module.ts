import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/core/guards/auth/auth.guard';
import { LoggedInGuard } from 'src/core/guards/logged-in/logged-in.guard';
import { NotFoundComponent } from 'src/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'board',
    loadChildren: () =>
      import('../feature-modules/board/board.module').then(
        (m) => m.BoardModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../feature-modules/login/login.module').then(
        (m) => m.LoginModule
      ),

    canLoad: [LoggedInGuard],
  },
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
