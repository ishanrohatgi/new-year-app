import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContdownComponentComponent } from './countdown/contdown-component/contdown-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContdownComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
