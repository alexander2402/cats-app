

export class Fact {
  public id: number;
  public text: string;
  public date: Date;
  public rating: string;

  constructor(id:number,text: string, date: Date,) {
    this.id = id;
    this.text = text;
    this.date = date;
    this.rating = `Rating: ${Math.floor((Math.random() * 10) + 1)} stars`;
  }
}
