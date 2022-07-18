import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

@ViewChild('txtBuscar') txtBuscar!:ElementRef <HTMLInputElement>;

constructor( private GifsService: GifsService ) {}

  buscar(){

    const valor = this.txtBuscar.nativeElement.value;

    this.GifsService.buscarGifs(valor);

    

    this.txtBuscar.nativeElement.value = '';

  }

}
