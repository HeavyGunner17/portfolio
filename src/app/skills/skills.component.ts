import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from '../services/http.service';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { LoginService } from '../services/login.service';
import { EditSkillComponent } from '../edit-skill/edit-skill.component';
export interface SkillsModel{
  skill : string,
  valor : number,

}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private httpSvc: HttpService, public dialog: MatDialog, private loginService: LoginService) {
    this.loginService.setSkill(this)
  }
  ngOnInit(): void {
    this.getAll()
  }
  habilidades: any = []
  editObject: any;
  isLogin: boolean = false;
  async getAll() {
    await this.httpSvc.getData('https://rocky-reaches-27641.herokuapp.com/skills').subscribe(result => {
      this.habilidades = result
    })
  }
  openDialog(id: any): void {
    const dialogRef = this.dialog.open(EditSkillComponent, {
      data: { id: id },
      width: '580px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'skill')
      this.editObject = {
        skill: result.skill,
        valor: result.valor,
        id: id
      }
      this.httpSvc.editData('https://rocky-reaches-27641.herokuapp.com/skills', this.editObject)
      this.getAll()
    })
  }
  deleteFunction(id: any) {
    this.httpSvc.deleteData(`https://rocky-reaches-27641.herokuapp.com/skills/${id}`)
    this.getAll()
  }
  createSkill() {
    const dialogRef = this.dialog.open(EditSkillComponent, {
      width: '580px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'skill')
      this.editObject = {
        skill: result.skill,
        valor: result.valor,
      }
      this.httpSvc.editData('https://rocky-reaches-27641.herokuapp.com/skills', this.editObject)
      this.getAll()
    })
  }
}
