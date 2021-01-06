import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Fact } from "../fact.model";

@Component({
  selector: "app-details-list",
  templateUrl: "./details-list.component.html",
  styleUrls: ["./details-list.component.css"],
})
export class DetailsListComponent implements OnInit {
  @Input() details: Fact[];
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  itemClicked(itemId) {
    this.onClick.emit(itemId);
  }
}
