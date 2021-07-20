import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from "@angular/common";
import {MatIconModule} from '@angular/material/icon'
import {MatSnackBarModule} from '@angular/material/snack-bar';


const appRoutes: Routes = [

  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'add-post', component: AddPostComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatCardModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[FormsModule],
})
export class AppModule { }
