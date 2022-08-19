import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpService } from '../services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience:any = [];
  editObject:any;
  isLogin: boolean = false;
  constructor(private loginSvc: LoginService, private httpSvc:HttpService,public dialog: MatDialog) { this.loginSvc.setExperiencia(this)}

  ngOnInit(): void {
    this.getAll()
  }
async getAll(){
  await this.httpSvc.getData('https://rocky-reaches-27641.herokuapp.com/experiencia').subscribe(result => {
    this.experience = result
    console.log(this.experience)
  })
}
openDialog(id: any): void {
  console.log(id)
  const dialogRef = this.dialog.open(ModalEditComponent, {
    data: { id: id },
    width: '580px',
    height: '550px'
  });
  dialogRef.afterClosed().subscribe(result => {
    this.editObject = {
      titulo: result.titulo,
      tiempo: result.tiempo,
      trabajo: result.trabajo,
      descripcion: result.descripcion,
      id: id
    }

    this.httpSvc.editData("https://rocky-reaches-27641.herokuapp.com/experiencia", this.editObject)
    this.getAll()
    console.log(this.editObject)
    console.log('Terminamos')
  })
}
deleteFunction(id: any) {
  this.httpSvc.deleteData(`https://rocky-reaches-27641.herokuapp.com/experiencia/${id}`)
  this.getAll()
}
createExperience(){
  const dialogRef = this.dialog.open(ModalEditComponent, {
    width: '580px',
    height: '550px'
  });
  dialogRef.afterClosed().subscribe(result => {
    this.editObject = {
      titulo: result.titulo,
      tiempo: result.tiempo,
      trabajo: result.trabajo,
      descripcion: result.descripcion,
    }

    this.httpSvc.editData('https://rocky-reaches-27641.herokuapp.com/experiencia/', this.editObject)
    this.getAll()
  })
}
}
function EditComponentComponent(EditComponentComponent: any, arg1: { width: string; height: string; }) {
  throw new Error('Function not implemented.');
}

