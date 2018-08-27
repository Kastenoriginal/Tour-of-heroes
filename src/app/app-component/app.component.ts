import {Component, OnInit} from '@angular/core';
import {ENTRIES} from './menu-entries';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {HeroService} from '../services/hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  menuEntries = ENTRIES;
  cssClass = 'default';
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  changeTheme(cssClass: string) {
    if (cssClass === 'dashboard' || cssClass === '/dashboard') {
      this.cssClass = 'default';
    } else {
      this.cssClass = cssClass;
    }
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
