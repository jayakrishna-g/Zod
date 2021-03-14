import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-space-creation-form',
  templateUrl: './space-creation-form.component.html',
  styleUrls: ['./space-creation-form.component.scss'],
})
export class SpaceCreationFormComponent implements OnInit {
  spaceCreationForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SpaceCreationFormComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createSpaceCreationForm();
  }

  createSpaceCreationForm() {
    this.spaceCreationForm = this.formBuilder.group({
      spaceName: ['', Validators.required],
      spaceDescription: ['', Validators.required],
    });
  }
  submit() {
    if (this.spaceCreationForm.valid) {
      this.dialogRef.close(this.spaceCreationForm.value);
    }
  }
}
