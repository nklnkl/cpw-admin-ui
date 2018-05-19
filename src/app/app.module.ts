import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AgentsComponent } from './agents/agents.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    AgentsComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

