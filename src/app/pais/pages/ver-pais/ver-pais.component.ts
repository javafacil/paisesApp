import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss'],
})
export class VerPaisComponent implements OnInit {
  cca2?: String;
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    console.log('VerPaisComponent - ngOnInit');

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe((res: any) => {
        console.log('asdads: ' + JSON.stringify(res));
        this.pais = res[0];
      });
  }
}
