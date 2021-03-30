import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css'],
})
export class ProgressbarComponent implements OnInit {
  @Input() valueProgress: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
