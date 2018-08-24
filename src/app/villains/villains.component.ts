import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {

  @Output() cssClassChange = new EventEmitter<string>();
  private currentUrl: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
    // this.cssClassChange.emit(this.currentUrl);
  }
}
