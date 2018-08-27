import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {

  @Output() cssClassChange = new EventEmitter<string>();
  private currentUrl: string;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.currentUrl = this.location.path();
    while (this.currentUrl.charAt(0) === '/') {
      this.currentUrl = this.location.path().substr(1);
    }
    this.cssClassChange.emit(this.currentUrl);
  }
}
