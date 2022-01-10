import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Idioma } from './Interfaces/idioma.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['en', 'es']);
    // this.langs = this.translate.getLangs();
    // this.translate.addLangs(['en', 'es']);
    // this.langs = this.translate.getLangs();
    // this.translate.stream('HELLO')
    //   .subscribe((res: string) => {
    //     console.log(res);
    //   });
    // this.translate.stream('GREETING', { name: 'nicolas' })
    //   .subscribe((res: string) => {
    //     console.log(res);
    //   });
  }

  cambiarIdioma(idioma: string) {
    this.translate.use( idioma );
  }

  idiomas: Idioma[] = [
    {
      nombre: 'Español',
      abreviacion: 'es'
    },
    {
      nombre: 'Inglés',
      abreviacion: 'en'
    }
  ];

  title = 'apiApp';
}
