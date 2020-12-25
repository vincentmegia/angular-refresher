import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { ShoutPipe } from './pipes/shoutpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppButtonComponent,
    FirstViewComponent,
    SecondViewComponent,
    ShoutPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
