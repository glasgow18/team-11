import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ChatParentsComponent } from './chat-parents/chat-parents.component';
import { ChatKidComponent } from './chat-kid/chat-kid.component';
import { WelcomeFunKidComponent } from './welcome-fun-kid/welcome-fun-kid.component';
import { StaffMainComponent } from './staff-main/staff-main.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateAccountComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    LoginComponent,
    NewsComponent,
    ChatParentsComponent,
    ChatKidComponent,
    WelcomeFunKidComponent,
    StaffMainComponent,
    ProfileComponent,
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
