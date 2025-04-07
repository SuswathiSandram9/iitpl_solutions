import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HowItStartedComponent } from './components/how-it-started/how-it-started.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GettingStartedQgenComponent } from './components/getting-started-qgen/getting-started-qgen.component';
import { AmexsComponent } from './components/amexs/amexs.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HeroSectionComponent,
    HowItStartedComponent,
    ExpertiseComponent,
    AboutUsComponent,
    SolutionsComponent,
    BlogsComponent,
    ContactUsComponent,
    GettingStartedQgenComponent,
    AmexsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
