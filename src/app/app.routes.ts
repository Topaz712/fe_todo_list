import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'todo-list',
    loadComponent: () =>
      import('./todo-list/todo-list.component').then(
        (m) => m.TodoListComponent
      ),
    canActivate: [authGuard],
  },
];
