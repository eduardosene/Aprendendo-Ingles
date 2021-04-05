export class Attempts {
  constructor(
    public heart: boolean = true,
    public fullHeart: string = 'assets/img/heart/full_heart.png',
    public emptyHeart: string = 'assets/img/heart/empty_heart.png'
  ) {}

  showHeart(): any {
    return this.heart == true ? this.fullHeart : this.emptyHeart;
  }
}
