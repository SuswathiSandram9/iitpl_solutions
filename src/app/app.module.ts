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
import { IitplComponent } from './components/iitpl/iitpl.component';
import { IspComponent } from './components/isp/isp.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GettingStartedQgenComponent } from './components/getting-started-qgen/getting-started-qgen.component';
import { AmexsComponent } from './components/amexs/amexs.component';
import { ImageSecurityPrintersComponent } from './components/image-security-printers/image-security-printers.component';
import { VideoDisplayComponent } from './components/video-display/video-display.component';
import { QGenComponent } from './components/q-gen/q-gen.component';
import { TruscholarComponent } from './components/truscholar/truscholar.component'; 
import { SolutionDetailComponent } from './components/solution-detail/solution-detail.component';
import { SecurityPrintingSolutionsComponent } from './components/security-printing-solutions/security-printing-solutions.component';
import { TeslinSecurityCertificatesComponent } from './components/teslin-security-certificates/teslin-security-certificates.component';
import { AcademicDocumentsComponent } from './components/academic-documents/academic-documents.component';
import { ExaminationDocumentsComponent } from './components/examination-documents/examination-documents.component';
import { SolutionsLandingPageComponent } from './components/solutions-landing-page/solutions-landing-page.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HeroSectionComponent,
    HowItStartedComponent,
    ExpertiseComponent,
    AboutUsComponent,
    IitplComponent,
    IspComponent,
    BlogsComponent,
    ContactUsComponent,
    GettingStartedQgenComponent,
    AmexsComponent,
    ImageSecurityPrintersComponent,
    VideoDisplayComponent,
    QGenComponent,
    TruscholarComponent,
    SolutionDetailComponent,
    SecurityPrintingSolutionsComponent,
    TeslinSecurityCertificatesComponent,
    AcademicDocumentsComponent,
    ExaminationDocumentsComponent,
    SolutionsLandingPageComponent
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
