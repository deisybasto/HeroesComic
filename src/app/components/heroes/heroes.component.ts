import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HeroesService, Heroes } from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroes[] = [];

  constructor(private _heroesService: HeroesService,
    private router: Router) {


  }

  ngOnInit(): void {

    console.log('ngOnInit');

    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['heroe', idx])
  }

}
