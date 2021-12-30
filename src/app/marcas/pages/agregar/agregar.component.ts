import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Marca } from 'src/app/Interfaces/marca.interface';
import { MarcasService } from '../../services/marcas.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
              private servicio: MarcasService,
              private router: Router ) { }

  ngOnInit(): void {}

  editando: boolean = false;
  color: string = 'accent';

  objeto: Marca = {
    Descrip: '',
    Usuario: '',
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  guardar(){
    this.servicio.agregar( this.objeto )
      .subscribe( resp => {
        this.router.navigate(['marcas']);
        this.mostrarSnakbar( ' Marca creada! ' )
      })
    window.location.reload();
  }

}
