import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment  } from '../environments/environment';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UploadComponent } from './video/upload/upload.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClipComponent } from './clip/clip.component';
import { ClipsListComponent } from './clips-list/clips-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    UploadComponent,
    NotFoundComponent,
    ClipComponent,
    ClipsListComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }