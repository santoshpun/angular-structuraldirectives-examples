import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifexampleComponent } from './ngifexample/ngifexample.component';
import { NgforexampleComponent } from './ngforexample/ngforexample.component';
import { NgswitchexampleComponent } from './ngswitchexample/ngswitchexample.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifexampleComponent,
    NgforexampleComponent,
    NgswitchexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
