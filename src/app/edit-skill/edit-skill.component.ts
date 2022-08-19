import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  public editSkillForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: any },
    public dialogRef: MatDialogRef<SkillsComponent>,
  ) {
    {
      this.editSkillForm = this.fb.group({
        skill: ['', Validators.required],
        valor: ['', Validators.required],
      })
    }
  }

  ngOnInit(): void {
  }

  editSkill() {
    this.dialogRef.close(this.editSkillForm.value)
    console.log(this.editSkillForm.value)
  }
}