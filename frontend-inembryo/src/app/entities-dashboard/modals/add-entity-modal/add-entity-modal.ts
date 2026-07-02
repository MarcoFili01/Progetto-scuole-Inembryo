import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-entity-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatDialogModule, MatFormFieldModule, 
    MatInputModule, MatSelectModule, MatButtonModule
  ],
  templateUrl: './add-entity-modal.html'
})
export class AddEntityModalComponent {
  entityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEntityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Inietta i dati passati
  ) {
    this.entityForm = this.fb.group({
    nome_istituzione: [this.data?.nome_istituzione || '', Validators.required],
    provincia: [this.data?.provincia || '', Validators.required],
    tipo: [this.data?.tipo || ''],
    email_istituzionale: [this.data?.email_istituzionale || ''],
    pec: [this.data?.pec || ''],
    sito_web: [this.data?.sito_web || ''],
    linkedin: [this.data?.linkedin || ''],
    social: [this.data?.social || ''],
    numero_telefono: [this.data?.numero_telefono || '']
  });
  }

  onSave(): void {
    if (this.entityForm.valid) {
      this.dialogRef.close(this.entityForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}