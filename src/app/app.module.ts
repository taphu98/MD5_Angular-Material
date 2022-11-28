import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { RegisterComponent } from './form-login/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './form-login/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ParentInputComponent } from './input/parent-input/parent-input.component';
import { ChildInputComponent } from './input/child-input/child-input.component';
import { ParentOutputComponent } from './output/parent-output/parent-output.component';
import { ChildOutputComponent } from './output/child-output/child-output.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import { SingerAvatarComponent } from './upload/singer-avatar/singer-avatar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MultipleAvatarComponent } from './upload/multiple-avatar/multiple-avatar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {AuthGuard} from './security/auth.guard';
import { AdminManageComponent } from './profile/admin-manage/admin-manage.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, ProfileComponent, ParentInputComponent, ChildInputComponent, ParentOutputComponent, ChildOutputComponent, SingerAvatarComponent, MultipleAvatarComponent, AdminManageComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxAudioPlayerModule,
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
