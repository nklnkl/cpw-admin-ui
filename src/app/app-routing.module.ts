import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicesComponent } from './invoices/invoices.component';
import { AgentsComponent } from './agents/agents.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{
		path: '',
		component: InvoicesComponent
	},
	{
		path: 'invoices',
		component: InvoicesComponent
	},
	{
		path: 'agents',
		component: AgentsComponent
	},
	{
		path: 'profile',
		component: ProfileComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
