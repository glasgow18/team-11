import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateAccountComponent }   from './create-account/create-account.component';
import { LoginComponent }   from './login/login.component';
import { NewsComponent }   from './news/news.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { WelcomeFunKidComponent } from './welcome-fun-kid/welcome-fun-kid.component';
import { StaffMainComponent } from './staff-main/staff-main.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'staffMain', component: StaffMainComponent },
  { path: 'funKid', component: WelcomeFunKidComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}