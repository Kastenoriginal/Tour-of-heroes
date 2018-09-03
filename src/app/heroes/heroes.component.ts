import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../services/hero.service';
import {takeWhile} from 'rxjs/operators';
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
  }

  getHeroes(): void {
    this.heroService.getHeroes().pipe(takeWhile(() => this.isAlive)).subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, bio: string) {
    name = name.trim();
    bio = bio.trim();

    if (!name || !bio) {
      return;
    }

    const newHero = new Hero();
    newHero.name = name;
    newHero.bio = bio;

    this.heroService.addHero(newHero).subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter(it => it !== hero);
    this.heroService.deleteHero(hero).pipe(takeWhile(() => this.isAlive)).subscribe();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
