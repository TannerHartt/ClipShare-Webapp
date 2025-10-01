import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from "@angular/fire/compat/storage";

import { environment  } from '../environments/environment';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TabComponent } from './shared/tab/tab.component';
import { TabsContainerComponent } from './shared/tabs-container/tabs-container.component';
import { ModalComponent } from './shared/modal/modal.component';
import { AuthModalComponent } from './user/auth-modal/auth-modal.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
    { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TabComponent,
    TabsContainerComponent,
    ModalComponent,
    AuthModalComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule, // Firebase authentication service.
    // AngularFirestoreModule, // Angular firestore db module.
    // AngularFireStorageModule, // Angular firebase helper module.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
