import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {takeWhile} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Hero[];
  aliveBool = true;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().pipe(takeWhile(() => this.aliveBool)).subscribe(hero => this.heroes = hero);
  }

  ngOnDestroy(): void {
    this.aliveBool = false;
  }



}
