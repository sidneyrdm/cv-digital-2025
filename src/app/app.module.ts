import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';
import { BuscaCepComponent } from './busca-cep/busca-cep.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TesteComponent,
    BuscaCepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    TesteComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
