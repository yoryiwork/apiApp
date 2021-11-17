import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClavesSatService } from '../../services/claves-sat.service';
import { claveSat } from '../../../Interfaces/claveSAT.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
    private clavesSatService: ClavesSatService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  editando: boolean = false;
  color: string = 'accent';

  claveSat: claveSat = {
    descripcion: ''
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  guardar(){
    this.clavesSatService.agregarClaveSAT( this.claveSat )
      .subscribe( clave => {
        this.router.navigate(['clavesSat']);
        this.mostrarSnakbar( 'Registro creado' )
      })
    window.location.reload();
  }

}
