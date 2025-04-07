import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AmexsComponent } from './components/amexs/amexs.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent },  // Home Page
  { path: 'about-us', component: AboutUsComponent },  // About Us Page
  { path: 'solutions', component: SolutionsComponent },  // Solutions Page
  { path: 'blogs', component: BlogsComponent },  // Blogs Page
  { path: 'contact', component: ContactUsComponent }, // Contact us Page
  { path: 'amexs', component: AmexsComponent }, // Amexs Page
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
