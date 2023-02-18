import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { PoliticsComponent } from './politics/politics.component';
import { CrimeComponent } from './crime/crime.component';
import { WorldComponent } from './world/world.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { RouterModule,Routes } from '@angular/router';
import { DescriptionPipe } from './description-pipe';

const allLinks:Routes = [
  {path:'BusinessNews',component:BusinessNewsComponent},
  {path:'Politics',component:PoliticsComponent},
  {path:'Crime',component:CrimeComponent},
  {path:'World',component:WorldComponent},
  {path:'Technology',component:TechnologyComponent},
  {path:'Sports',component:SportsComponent},
  {path:'newsDetail/:category',component:ViewDetailsComponent},
  
  
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusinessNewsComponent,
    PoliticsComponent,
    CrimeComponent,
    DescriptionPipe,
    WorldComponent,
    TechnologyComponent,
    SportsComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }