import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Fabricante } from 'src/app/Interfaces/fabricante.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fabricante) { }

  ngOnInit(): void {
  }

  borrar() {
    this.dialogRef.close(true);
  }

  cerrar() {
    this.dialogRef.close();
  }

}
