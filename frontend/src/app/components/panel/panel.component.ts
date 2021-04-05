import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  attempts: number = 3;
  valueProgress: number = 0;
  @Output() endGame: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  currentProgress(valueProgress: number): void {
    this.valueProgress = valueProgress;
  }
  currentAttempts(attempts: number): void {
    this.attempts = attempts;
  }
  statusEndGame(endGame: any): void {
    this.endGame.emit(endGame);
  }
}
