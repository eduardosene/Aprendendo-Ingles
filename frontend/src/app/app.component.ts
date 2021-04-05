import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valueEndGame: boolean = true;
  typeEndGame: string = '';

  checkEndGame(type: any): void {
    this.valueEndGame = false;
    this.typeEndGame = type;
  }
  rebootGame(): void {
    this.valueEndGame = true;
    this.typeEndGame = '';
  }
}
