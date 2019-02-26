import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent} from './hero/components/heroes/heroes.component';
import {HeroIndividualComponent} from './hero/components/hero-individual/hero-individual.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      AboutComponent,
      ContactComponent,
      HomeComponent,
      HeroComponent,
      HeroesComponent,
      HeroIndividualComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
