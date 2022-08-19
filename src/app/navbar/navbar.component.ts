import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  userName: string = 'admin';
  logPassword: string = '12345';

  constructor(public dialog: MatDialog, private loginSvc: LoginService) { }

  ngOnInit(): void {
  }
  public isMenuCollapsed = true

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true,
      width: '580px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.username === this.userName && result.password === this.logPassword){
        this.isLogin = true
        console.log(result, 'result afterclose navbar')
      }

    })
  }
  signOut(){
    this.isLogin = false
    this.loginSvc.addLoginExperiencia()
    this.loginSvc.addLoginEducacion()
    this.loginSvc.addLoginSkill()
    this.loginSvc.addLoginProyect()
    this.loginSvc.addLoginAbout()
  }

}