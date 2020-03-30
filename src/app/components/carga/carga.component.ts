import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  archivos: FileItem[] = [];
  estaSobreElemento = false;

  // tslint:disable-next-line: variable-name
  constructor( public  _ci: CargaImagenesService) { }

  ngOnInit(): void {
  }

  cargarImagenes() {

    this._ci.cargarImagenesFirebase(this.archivos );

  }

  limpiarImagenes() {
    this.archivos = [];
  }

}
