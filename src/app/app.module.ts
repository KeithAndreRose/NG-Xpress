import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondaryNavigationComponent } from './secondary-navigation/secondary-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SecondaryNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
