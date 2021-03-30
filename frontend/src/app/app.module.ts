import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//ngx-bootstrap
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ContentComponent } from './components/template/content/content.component';
import { PanelComponent } from './components/panel/panel.component';
import { ProgressbarComponent } from './components/panel/progressbar/progressbar.component';
import { AttemptsComponent } from './components/panel/attempts/attempts.component';
import { ContentPanelComponent } from './components/panel/content-panel/content-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PanelComponent,
    ProgressbarComponent,
    AttemptsComponent,
    ContentPanelComponent,
    HttpClientModule,
  ],
  imports: [BrowserModule, AppRoutingModule, ProgressbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
