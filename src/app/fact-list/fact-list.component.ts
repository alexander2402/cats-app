import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Fact } from "../fact.model";

@Component({
  selector: "app-fact-list",
  templateUrl: "./fact-list.component.html",
  styleUrls: ["./fact-list.component.css"],
})
export class FactListComponent implements OnInit {
  @Input() facts: Fact[];
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  itemClicked(itemId) {
    this.onClick.emit(itemId);
  }
}
