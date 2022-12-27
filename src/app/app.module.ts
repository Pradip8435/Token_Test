import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlacerequestComponent } from './placerequest/placerequest.component';
import { LenderComponent } from './lender/lender.component';


const appRoutes:Routes =[
  {
    path:'placerequest', 
    component:PlacerequestComponent
  },
  {
    path:'', component:LenderComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PlacerequestComponent,
    LenderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
