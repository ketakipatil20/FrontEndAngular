import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RollOffDetailsComponent } from './roll-off-details/roll-off-details.component';
import { RollOffFormComponent } from './RollOffDetails/roll-off-form/roll-off-form.component';


const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'roll-off-details',
    component: RollOffDetailsComponent
  },
  {
    path: 'roll-off-form/:id',
    component: RollOffFormComponent
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
