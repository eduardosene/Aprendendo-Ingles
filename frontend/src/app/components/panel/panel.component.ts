import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  valueProgress: number = 0;
  constructor() {}

  ngOnInit(): void {}
  currentProgress(valueProgress: number): void {
    this.valueProgress = valueProgress;
  }
}
