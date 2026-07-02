import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Fondamentale per i cicli e filtri strutturali tipo *ngIf o @if
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { EntitiesService } from '../services/entities';
import { AddEntityModalComponent } from './modals/add-entity-modal/add-entity-modal';
import { DeleteConfirmModal } from './modals/delete-confirm-modal/delete-confirm-modal';

@Component({
  selector: 'app-entities-dashboard',
  standalone: true, // <-- Questo dice ad Angular che il componente è autonomo
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ], // <-- I moduli di Material vanno tutti elencati qui!
  templateUrl: './entities-dashboard.html',
  styleUrls: ['./entities-dashboard.css']
})
export class EntitiesDashboardComponent implements OnInit {
  displayedColumns: string[] = [
  'nome_istituzione', 'provincia', 'tipo', 'email_istituzionale', 
  'pec', 'sito_web', 'linkedin', 'social', 'numero_telefono', 'actions'
];
  filteredEntities: any[] = [];
  allEntities: any[] = [];

  constructor(public dialog: MatDialog, private entitiesService: EntitiesService) {}

  ngOnInit() {
    // Caricamento dati iniziale
    this.loadData();
  }

  loadData() {
    this.entitiesService.getAll().subscribe(data => {
      this.allEntities = data;
      this.filteredEntities = data;
    });
  }

  onFilterChange(selectedValue: string) {

  if (!selectedValue) {
    this.filteredEntities = [...this.allEntities]; // Copia pulita
  } else {
    this.filteredEntities = this.allEntities.filter(entity => {
      // Convertiamo entrambi in minuscolo per confronto sicuro
      const tipoDelDato = entity.tipo ? entity.tipo.toString().toLowerCase().trim() : '';
      const filtro = selectedValue.toLowerCase().trim();
      return tipoDelDato === filtro;
    });
  }
}

  onCategoryChange(selectedCategory: string) {
    if (!selectedCategory) {
      // Se deselezioni il filtro, mostra di nuovo tutto
      this.filteredEntities = this.allEntities;
    } else {
      // Filtra l'array originale in base alla categoria cliccata
      this.filteredEntities = this.allEntities.filter(
        entity => entity.category === selectedCategory
      );
    }
  }

  openAddPopup() {
  const dialogRef = this.dialog.open(AddEntityModalComponent, { width: '400px' });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Chiamiamo il nostro servizio per salvare nel DB
      this.entitiesService.create(result).subscribe(() => {
        this.loadData(); // Ricarichiamo la tabella dopo il salvataggio
      });
    }
  });
}

  openEditPopup(entity: any) {
  // Riusiamo lo stesso componente di Add, ma passando i dati esistenti
  const dialogRef = this.dialog.open(AddEntityModalComponent, {
    width: '400px',
    data: entity // Passiamo l'oggetto da modificare
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Chiamiamo il metodo update del servizio
      this.entitiesService.update(entity.id, result).subscribe(() => {
        this.loadData(); // Ricarichiamo la tabella
      });
    }
  });
}
  openDeletePopup(entity: any) {
  // Qui apriamo un modal di conferma. 
  // Nota: dovrai creare un DeleteConfirmModalComponent semplice.
  const dialogRef = this.dialog.open(DeleteConfirmModal, {
    width: '300px',
    data: entity
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) { // Se l'utente ha confermato
      this.entitiesService.delete(entity.id).subscribe(() => {
        this.loadData(); // Ricarichiamo la tabella
      });
    }
  });
}
}