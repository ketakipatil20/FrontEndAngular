import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RollOffDetailsComponent } from './roll-off-details/roll-off-details.component';
import { RollOffFormComponent } from './RollOffDetails/roll-off-form/roll-off-form.component';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegisterComponent } from './register/register.component';
import { SearchPipe } from './shared/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RollOffDetailsComponent,
    RollOffFormComponent,
    LoginComponent,
    RegisterComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
