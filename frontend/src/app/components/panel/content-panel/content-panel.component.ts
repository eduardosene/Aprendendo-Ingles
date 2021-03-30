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
  @Output() valueProgress: EventEmitter<number> = new EventEmitter();

  constructor(private panelService: PanelService) {}

  ngOnInit(): void {
    this.panelService.read().subscribe((phrases) => {
      this.phrases = phrases;
      this.round();
    });
  }

  round(): void {
    this.phrase.phraseEN = this.phrases[this.currentRound].phraseEN;
    this.phrase.phrasePT = this.phrases[this.currentRound].phrasePT;
    this.answer = '';
  }
  checkAnswer(): void {
    if (this.answer == this.phrase.phrasePT) {
      this.currentRound++;
      this.round();
      this.changeProgress();
    } else {
      console.log('Erro');
    }
  }
  changeProgress() {
    this.currentValueProgress =
      this.currentValueProgress + 100 / this.phrases.length;
    this.valueProgress.emit(this.currentValueProgress);
  }
}
