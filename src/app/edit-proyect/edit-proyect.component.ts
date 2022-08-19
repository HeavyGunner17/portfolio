import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProyectComponent } from '../proyect/proyect.component';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {
  public editProyectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: any },
    public dialogRef: MatDialogRef<ProyectComponent>,
  ) {
    {
      this.editProyectForm = this.fb.group({
        titulo: ['', Validators.required],
        descripcion: ['', Validators.required],
      })
    }
  }

  ngOnInit(): void {
  }

  editProyecto() {
    this.dialogRef.close(this.editProyectForm.value)
  }

}