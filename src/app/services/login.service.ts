import { Injectable } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProyectComponent } from '../proyect/proyect.component';
import { SkillsComponent } from '../skills/skills.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  experienceComponent: ExperienceComponent;
  educacionComponent: EducationComponent;
  skillComponent: SkillsComponent;
  proyectComponent: ProyectComponent;
  aboutComponent: AboutComponent;

  constructor() { }

  setExperiencia(experienceComponent: ExperienceComponent) {
    this.experienceComponent = experienceComponent
  }

  addLoginExperiencia() {
    this.experienceComponent.isLogin = !this.experienceComponent.isLogin
  }

  setEducacion(educacionComponent: EducationComponent) {
    this.educacionComponent = educacionComponent
  }

  addLoginEducacion() {
    this.educacionComponent.isLogin = !this.educacionComponent.isLogin
  }

  setSkill(skillComponent: SkillsComponent) {
    this.skillComponent = skillComponent
  }

  addLoginSkill(){
    this.skillComponent.isLogin = !this.skillComponent.isLogin
  }

  setProyect(proyectComponent: ProyectComponent){
    this.proyectComponent = proyectComponent
  }

  addLoginProyect(){
    this.proyectComponent.isLogin = !this.proyectComponent.isLogin 
  }

  setAbout(aboutComponent: AboutComponent){
    this.aboutComponent = aboutComponent
  }

  addLoginAbout(){
    this.aboutComponent.isLogin = !this.aboutComponent.isLogin
  }
}