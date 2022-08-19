import { Component, Inject, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
  import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-edit-img',
  templateUrl: './edit-img.component.html',
  styleUrls: ['./edit-img.component.css']
})
export class EditImgComponent implements OnInit {

  public editImgForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: any },
    public dialogRef: MatDialogRef<AboutComponent>,
  ) {
    {
      this.editImgForm = this.fb.group({
        img: ['', Validators.required],
      })
    }
  }

  ngOnInit(): void {
  }

  editSkill() {
    this.dialogRef.close(this.editImgForm.value)
    console.log(this.editImgForm.value)
  }
}

