import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ArticleListComponent } from './news/components/article-list/article-list.component';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    FooterContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
