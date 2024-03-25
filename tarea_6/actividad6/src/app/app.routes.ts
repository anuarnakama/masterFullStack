import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path: "", pathMatch: 'full', redirectTo: "login"},
    {path: "login", component:LoginComponent},
    {path: "dashboard", component:DashboardComponent, children: [
        {path: "", component:UserListComponent},
        {path: "user/:id", component:UserViewComponent}
        //nuevo usuario
    ]},

    {path: "**", component:Notfound404Component},
    
];
