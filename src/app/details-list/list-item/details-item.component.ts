import { EventEmitter, Input, Output, Component, OnInit } from "@angular/core";
import { Fact } from "src/app/fact.model";

@Component({
  selector: "app-details-item",
  templateUrl: "./details-item.component.html",
  styleUrls: ["./details-item.component.css"],
})
export class DetailsItemComponent implements OnInit {
  @Input() detail: Fact;
  @Output() onItemClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.onItemClick.emit(this.detail.id);
  }
}
