import { Phrase } from './../phrase.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.css'],
})
export class ContentPanelComponent implements OnInit {
  phrase: Phrase = { phraseEN: '', phrasePT: '' };
  phrases: Phrase[] = [];
  answer: string = '';
  currentRound: number = 0;
  currentValueProgress: number = 0;
  currentAttempts: number = 3;

  @Output() valueProgress: EventEmitter<number> = new EventEmitter();
  @Output() attempts: EventEmitter<number> = new EventEmitter();
  @Output() endGame: EventEmitter<string> = new EventEmitter();

  constructor(private panelService: PanelService) {}

  ngOnInit(): void {
    this.panelService.read().subscribe((phrases) => {
      this.phrases = phrases;
      this.round();
    });
  }
  checkAnswer(): void {
    if (this.answer == this.phrase.phrasePT) {
      this.currentRound == this.phrases.length - 1
        ? this.endGame.emit('win')
        : this.changeProgress();
    } else {
      this.currentAttempts == 0
        ? this.endGame.emit('defeat')
        : this.changeAttempts();
    }
  }
  round(): void {
    this.phrase.phraseEN = this.phrases[this.currentRound].phraseEN;
    this.phrase.phrasePT = this.phrases[this.currentRound].phrasePT;
    this.answer = '';
  }
  changeProgress(): void {
    this.currentRound++;
    this.currentValueProgress =
      this.currentValueProgress + 100 / this.phrases.length;
    this.valueProgress.emit(this.currentValueProgress);
    this.round();
  }
  changeAttempts(): void {
    this.currentAttempts--;
    this.attempts.emit(this.currentAttempts);
  }

  checkEndGameWin(): any {
    this.currentRound == this.phrases.length ? this.endGame.emit('win') : '';
  }
  checkEndGameDefeat(): any {
    this.currentAttempts == -1 ? this.endGame.emit('defeat') : '';
  }
}
