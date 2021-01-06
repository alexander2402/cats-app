import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Fact } from "src/app/fact.model";
import { TextCutterService } from "src/app/text-cutter.service";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"],
})
export class ListItemComponent implements OnInit {
  @Input() fact: Fact;
  @Output() onItemClick: EventEmitter<any> = new EventEmitter();
  constructor(public textCutter: TextCutterService) {}

  ngOnInit() {}

  onClick() {
    this.onItemClick.emit(this.fact.id);
  }
}
