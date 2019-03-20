import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';


import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
