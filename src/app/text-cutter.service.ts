import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TextCutterService {
  constructor() {}

  cut(text: string, length: number) {
    return text.substr(0, length) + "...";
  }
}
