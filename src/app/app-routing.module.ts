import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { IitplComponent } from './components/iitpl/iitpl.component';
import { IspComponent } from './components/isp/isp.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AmexsComponent } from './components/amexs/amexs.component';
import { ImageSecurityPrintersComponent } from './components/image-security-printers/image-security-printers.component';
import { QGenComponent } from './components/q-gen/q-gen.component';
import { TruscholarComponent } from './components/truscholar/truscholar.component';
import { SecurityPrintingSolutionsComponent } from './components/security-printing-solutions/security-printing-solutions.component';
import { TeslinSecurityCertificatesComponent } from './components/teslin-security-certificates/teslin-security-certificates.component';
import { ExaminationDocumentsComponent } from './components/examination-documents/examination-documents.component';
import { AcademicDocumentsComponent } from './components/academic-documents/academic-documents.component';
import { SolutionsLandingPageComponent } from './components/solutions-landing-page/solutions-landing-page.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent },  // Home Page
  { path: 'about-us', component: AboutUsComponent },  // About Us Page
  { path: 'iitpl', component: IitplComponent },  // IITPL Page
  { path: 'isp', component: IspComponent },  // ISP Page
  { path: 'solutions-landing-page', component: SolutionsLandingPageComponent },  // Solutions Landing Page
  { path: 'blogs', component: BlogsComponent },  // Blogs Page
  { path: 'contact', component: ContactUsComponent }, // Contact us Page
  { path: 'amexs', component: AmexsComponent }, // Amexs Page
  { path: 'qpgenx', component: QGenComponent }, // QPGENX Page
  { path: 'truscholar', component: TruscholarComponent }, // Tru-Scholar Page
  { path: 'security-printing-solutions', component: SecurityPrintingSolutionsComponent }, // Security Printing Solutions Page
  { path: 'teslin-security-certificates', component: TeslinSecurityCertificatesComponent }, // Teslin Security Certificates Page
  { path: 'examination-documents', component: ExaminationDocumentsComponent }, // Examination Documents Page
  { path: 'academic-documents', component: AcademicDocumentsComponent }, // Academic Documents Page
  { path: 'image-security-printers', component: ImageSecurityPrintersComponent }, // Image Security Printers Page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Scrolls to the top on route change
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
