import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAboutComponent } from '../edit-about/edit-about.component';
import { EditImgComponent } from '../edit-img/edit-img.component';
import { HttpService } from '../services/http.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  constructor(
    private httpSvc: HttpService,
    private loginSvc: LoginService,
    public dialog: MatDialog) {
    this.loginSvc.setAbout(this)
  }

  isLogin: boolean = false;
  about: any = [];
  editObject: any;
  isDataHere: boolean = false;
  imgUrl: any;
  ngOnInit(): void {
    
     this.getAll()
   
  }

  async getAll() {
     this.getImgUrl()
    await this.httpSvc.getData('https://rocky-reaches-27641.herokuapp.com/about').subscribe(result => {
      this.about = result
      this.isDataHere = true
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditAboutComponent, {
      width: '580px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.editObject = {
        id: 1,
        descripcionUno: result.descripcionUno,
        descripcionDos: result.descripcionDos,
      }

      this.httpSvc.editData('https://rocky-reaches-27641.herokuapp.com/about/', this.editObject)
      this.getAll()
    })
  }
  openDialogImg(): void {
    const dialogRef = this.dialog.open(EditImgComponent, {
      width: '580px',
      height: '280px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.editObject = {
        id: 1,
        imgUrl: result.img,
      }
      this.httpSvc.editData('https://rocky-reaches-27641.herokuapp.com/img/', this.editObject)
      this.getImgUrl()
    })
  }

  async getImgUrl() {
    this.httpSvc.getData('https://rocky-reaches-27641.herokuapp.com/img/1').subscribe(result => {
        this.imgUrl = result;
        console.log(this.imgUrl)
    })
  }
}
