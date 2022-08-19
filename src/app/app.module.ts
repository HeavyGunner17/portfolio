import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { LoginComponent } from './login/login.component';
import { ProyectComponent } from './proyect/proyect.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { EditEducationComponent } from './edit-education/edit-education.component';
import {MatIconModule} from '@angular/material/icon';
import { EditProyectComponent } from './edit-proyect/edit-proyect.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';
import { EditImgComponent } from './edit-img/edit-img.component';
import { MainPageComponent } from './main-page/main-page.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    LoginComponent,
    ProyectComponent,
    ModalEditComponent,
    EditAboutComponent,
    EditEducationComponent,
    EditProyectComponent,
    EditSkillComponent,
    EditImgComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
  ],
  providers: [LoginService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
