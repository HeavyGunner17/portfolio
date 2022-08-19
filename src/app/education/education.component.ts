import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { LoginService } from '../services/login.service';
import { EditEducationComponent } from '../edit-education/edit-education.component';
export interface Educacion {
  titulo: string,
  tiempo: any,
  institucion: string
}
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(
    private httpSvc: HttpService,
    private loginSvc: LoginService,
    public dialog: MatDialog
  ) {
    this.loginSvc.setEducacion(this)
  }

  ngOnInit(): void {
    this.getAll()
  }

  educacion: any = []
  editObject: any;
  isLogin: boolean = false;


  async getAll() {
    await this.httpSvc.getData('https://rocky-reaches-27641.herokuapp.com/educacion').subscribe(result => {
      this.educacion = result
    })
  }
  openDialog(id: any): void {
    const dialogRef = this.dialog.open(EditEducationComponent, {
      data: { id: id },
      width: '580px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'holapi')
      this.editObject = {
        titulo: result.titulo,
        tiempo: result.tiempo,
        institucion: result.institucion,
        inicio: result.inicio,
        id: id
      }
      console.log(this.editObject)
      this.httpSvc.editData('https://rocky-reaches-27641.herokuapp.com/educacion/', this.editObject)
      this.getAll()
    })
  }
  deleteFunction(id: any) {
    this.httpSvc.deleteData(`https://rocky-reaches-27641.herokuapp.com/educacion/${id}`)
    this.getAll()
  }

  createEducation() {
    const dialogRef = this.dialog.open(EditEducationComponent, {
      width: '580px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.editObject = {
        titulo: result.titulo,
        tiempo: result.tiempo,
        institucion: result.institucion,
        inicio: result.inicio,
      }

      this.httpSvc.editData('https://rocky-reaches-27641.herokuapp.com/educacion/', this.editObject)
      this.getAll()
    })
  }

}
