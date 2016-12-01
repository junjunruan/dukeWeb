import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './AppCmp';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './AppRoutes';
import { HomeCmp } from './home/HomeCmp';
import { PageNotFoundCmp } from './PageNotFoundCmp';
import { AboutCmp } from './about/AboutCmp';
import { ContactCmp } from './contact/ContactCmp';
import { PortfolioCmp } from './portfolio/PortfolioCmp';
import { ResumeCmp } from './resume/ResumeCmp';

@NgModule({
  declarations: [
      AppComponent, HomeCmp, PageNotFoundCmp,
      AboutCmp, ContactCmp, PortfolioCmp, ResumeCmp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
