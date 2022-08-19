import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EducationComponent } from '../education/education.component';


@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  public editEduForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: any },
    public dialogRef: MatDialogRef<EducationComponent>,
  ) {
    {
      this.editEduForm = this.fb.group({
        institucion: ['', Validators.required],
        titulo: ['', Validators.required],
        tiempo: ['', Validators.required],
        inicio: ['', Validators.required],
      })
    }
  }

  ngOnInit(): void {
  }

  editEducacion() {
    this.dialogRef.close(this.editEduForm.value)
  }
}