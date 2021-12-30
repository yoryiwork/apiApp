import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Linea } from 'src/app/Interfaces/linea.interface';
import { LineasService } from '../../services/lineas.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
              private servicio: LineasService,
              private router: Router ) { }

  ngOnInit(): void {}

  editando: boolean = false;
  color: string = 'accent';

  linea: Linea = {
    linea: '',
    descrip: '',
    usuario: '',
    clasificacion: ''
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  guardar(){
    this.servicio.agregar( this.linea )
      .subscribe( resp => {
        this.router.navigate(['lineas']);
        this.mostrarSnakbar( ' Linea creada! ' )
      })
    window.location.reload();
  }

}