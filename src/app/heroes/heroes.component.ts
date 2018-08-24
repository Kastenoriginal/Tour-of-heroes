import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../services/hero.service';
import {takeWhile} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Hero[];
  isAlive = true;
  private currentUrl: string;

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit() {
    this.getHeroes();
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
  }

  getHeroes(): void {
    this.heroService.getHeroes().pipe(takeWhile(() => this.isAlive)).subscribe(heroes => this.heroes = heroes);
  }

  add(name: string) {
    name = name.trim();

    if (!name) {
      return;
    }

    this.heroService.addHero({name} as Hero).subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter(it => it !== hero);
    this.heroService.deleteHero(hero).pipe(takeWhile(() => this.isAlive)).subscribe();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
