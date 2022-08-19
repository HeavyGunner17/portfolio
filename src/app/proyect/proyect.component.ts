import { Component, OnInit } from '@angular/core';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { HttpService } from '../services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { EditProyectComponent } from '../edit-proyect/edit-proyect.component';

export interface Proyects {
  titulo: string,
  descripcion: string,

}

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  constructor(private httpSvc: HttpService, public dialog: MatDialog, private loginSvc: LoginService) {
    this.loginSvc.setProyect(this)
  }
  ngOnInit(): void {
    this.getAll()
  }
  proyectos: any = []
  editObject: any;
  isLogin: boolean = false

  async getAll() {
    await this.httpSvc.getData('https://rocky-reaches-27641.herokuapp.com/proyectos/').subscribe(result => {
      this.proyectos = result
    })
  }


  openDialog(id: any): void {
    const dialogRef = this.dialog.open(EditProyectComponent, {
      data: { id: id },
      width: '580px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.editObject = {
        titulo: result.titulo,
        descripcion: result.descripcion,
        id: id
      }

      this.httpSvc.editData('https://rocky-reaches-27641.herokuapp.com/proyectos/', this.editObject)
      this.getAll()
    })
  }
  deleteFunction(id: any) {
    this.httpSvc.deleteData(`https://rocky-reaches-27641.herokuapp.com/proyectos/${id}`)
    this.getAll()
  }

  createProyecto() {
    const dialogRef = this.dialog.open(EditProyectComponent, {
      width: '580px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.editObject = {
        titulo: result.titulo,
        descripcion: result.descripcion,
      }

      this.httpSvc.editData('https://rocky-reaches-27641.herokuapp.com/proyectos/', this.editObject)
      this.getAll()
    })
  }
}