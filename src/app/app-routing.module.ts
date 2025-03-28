import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent },  // Home Page
  { path: 'about-us', component: AboutUsComponent },  // About Us Page
  { path: 'solutions', component: SolutionsComponent },  // Solutions Page
  { path: 'blogs', component: BlogsComponent },  // Blogs Page
  { path: 'contact', component: ContactUsComponent }, // Contact us Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
