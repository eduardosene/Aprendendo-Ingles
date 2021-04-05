import { Attempts } from './attempts.model';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css'],
})
export class AttemptsComponent implements OnInit, OnChanges {
  @Input() attempts: number = 3;
  allHeart: Attempts[] = [
    new Attempts(true),
    new Attempts(true),
    new Attempts(true),
  ];
  constructor() {}

  ngOnChanges(): void {
    if (this.attempts != this.allHeart.length) {
      let index = this.allHeart.length - this.attempts;
      this.allHeart[index - 1].heart = false;
    }
  }
  ngOnInit(): void {}
}
