import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css'],
})
export class AttemptsComponent implements OnInit {
  fullHeart: string = 'assets/img/heart/full_heart.png';
  emptyHeart: string = 'assets/img/heart/empty_heart.png';

  constructor() {}

  ngOnInit(): void {}
}
