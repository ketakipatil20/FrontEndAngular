import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {



       constructor(private _http: HttpClient, private router: Router) { }
       
        ngOnInit(): void {  //callback method invoked immediatly after default change detectore
        }

        loginform = new FormGroup({
          UserName: new FormControl('', [Validators.required,]),  //required validator to controls marked with required attribute
          Password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
        });
       
        loginSubmited(){
          this._http.get<any>("http://localhost:62371/api/User/GetUsers").subscribe(res => //how to obtain msg to be published
          {
            
            const user = res.find((a: any) => {
              return a.userName === this.loginform.value.UserName && a.password === this.loginform.value.Password})
              console.log(user);
              if (user) {
                alert("Login Successfully");
                this.loginform.reset();
                this.router.navigate(['nav']);
              } else {
                alert("User Not Found!!")
              }}, err => {
                alert("Something went wrong, Server side")})
              }

      get UserName():FormControl
       {
          return this.loginform.get("UserName") as FormControl;
       }

       get Password():FormControl
       {
          return this.loginform.get("Password") as FormControl;
       }
}
 
