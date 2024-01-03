import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';







@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ProjectsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
