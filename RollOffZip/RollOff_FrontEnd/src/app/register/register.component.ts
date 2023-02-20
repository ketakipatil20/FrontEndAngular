import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  serviceFun: any;
    
  constructor(
      private http: HttpClient
  ){}

     ngOnInit(): void {
    }

    registerform = new FormGroup({
      UserName: new FormControl(''),
      Email: new FormControl(''),
      Password: new FormControl(''),
      ConfirmPassword: new FormControl(''),
      Roll: new FormControl(''),
    });

    submitForm()
    { 
      console.log(this.registerform.value);  
      this.http.post('http://localhost:62371/api/User/Register', this.registerform.value).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    )} 
    
}
