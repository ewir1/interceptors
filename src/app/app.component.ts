import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';

  constructor(private _usuariosServices: UsuariosService) {
    this._usuariosServices.obtenerUsuarios()
      .subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log('Error en el app component');
      });
  }
}
