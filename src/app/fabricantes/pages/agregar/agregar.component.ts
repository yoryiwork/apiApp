import { Component, OnInit } from '@angular/core';
import { Fabricante } from 'src/app/Interfaces/fabricante.interface';
import { FabricantesService } from '../../services/fabricantes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
              private fabricantesService: FabricantesService,
              private router: Router ) { }

  ngOnInit(): void {}

  editando: boolean = false;
  color: string = 'accent';

  fabricante: Fabricante = {
    nombre: ''
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  guardar(){
    this.fabricantesService.agregarFabricante( this.fabricante )
      .subscribe( fabricante => {
        this.router.navigate(['fabricantes']);
        this.mostrarSnakbar( 'Registro creado' )
      })
    window.location.reload();
  }

}