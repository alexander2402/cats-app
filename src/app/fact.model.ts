

export class Fact {
  public id: number;
  public text: string;
  public user: string;
  public rating: string;

  constructor(text: string, user: string, rating: string, id:number) {
    this.id = id;
    this.text = text;
    this.user = user;
    this.rating = rating;
  }
}
