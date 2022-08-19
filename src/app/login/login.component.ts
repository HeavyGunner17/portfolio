import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpService } from '../services/http.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  userData: any;


  constructor(public dialogRef: MatDialogRef<NavbarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: string, password: string },
    private loginSvc: LoginService,
    private httpSvc: HttpService,
    private fb: FormBuilder

  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getUsers()
  }

  continueLogin() {
    sessionStorage.setItem('username', this.loginForm.value.username)
    sessionStorage.setItem('password', this.loginForm.value.password)
    if (sessionStorage.getItem('username') === this.userData.user && sessionStorage.getItem('password') === this.userData.password) {
      this.dialogRef.close(this.loginForm.value)
      this.loginSvc.addLoginExperiencia()
      this.loginSvc.addLoginEducacion()
      this.loginSvc.addLoginSkill()
      this.loginSvc.addLoginProyect()
      this.loginSvc.addLoginAbout()
      return 'Login Correcto'
    } else {
      return 'Login incorrecto'
    }
  }

  closeModal() {
    this.loginForm.reset();
    this.dialogRef.close(this.loginForm.value)
  }

  getUsers(){
    this.httpSvc.getData('https://rocky-reaches-27641.herokuapp.com/login/1').subscribe(result => {
      this.userData = result
    })
  }

}