import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Impuesto } from 'src/app/Interfaces/impuestos.interface';
import { ImpuestosService } from '../../services/impuestos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
    private impuestosService: ImpuestosService,
    private router: Router ) { }

  ngOnInit(): void {}

  editando: boolean = false;
  color: string = 'accent';

  impuesto: Impuesto = {
    descrip: '',
    usuario: '',
    tasa: '',
    tasaCuota: '',
    tipoImpuesto: ''
  }

  mostrarSnakbar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'close', {
      duration: 1500
    });
  }

  guardar(){
    this.impuestosService.agregarImpuesto( this.impuesto )
      .subscribe( impuesto => {
        this.router.navigate(['impuestos']);
        this.mostrarSnakbar( ' Impuesto creado! ' )
      })
    // window.location.reload();
  }

}
