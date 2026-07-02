import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-confirm-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './delete-confirm-modal.html',
  styleUrl: './delete-confirm-modal.css',
})
export class DeleteConfirmModal {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
