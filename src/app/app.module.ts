import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AgentsComponent } from './agents/agents.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    AgentsComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

