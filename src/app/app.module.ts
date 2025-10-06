import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment  } from '../environments/environment';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ManageComponent } from './video/manage/manage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ManageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }