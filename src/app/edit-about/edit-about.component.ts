import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
  export class EditAboutComponent implements OnInit {

    public editAboutForm: FormGroup;
  
    constructor(
      private fb: FormBuilder,
      @Inject(MAT_DIALOG_DATA) public data: { id: any },
      public dialogRef: MatDialogRef<AboutComponent>,
    ) {
      {
        this.editAboutForm = this.fb.group({
          descripcionUno: ['', Validators.required],
          descripcionDos: ['', Validators.required],
        })
      }
    }
  
    ngOnInit(): void {
    }
  
    editSkill() {
      this.dialogRef.close(this.editAboutForm.value)
      console.log(this.editAboutForm.value)
    }
  
  }
