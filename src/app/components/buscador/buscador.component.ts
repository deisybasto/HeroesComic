import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscadod',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  index: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private _heroService: HeroesService,
    private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroService.buscarHeroes(params['termino']);
      console.log(this.heroes);

    });
  }
  indexFind(name: string) {

    this.index = this._heroService.findIndexHero(name);
    console.log(this.index);
    console.log(name);
    this.verHeroe(this.index);
  };
  verHeroe(idx: number) {
    this.router.navigate(['heroe', idx]);
  }
}
