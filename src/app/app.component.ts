
import { Component } from "@angular/core";
import { Fact } from "./fact.model";
import { FactsServiceService } from "./facts-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "cats-app";

  constructor(public factService: FactsServiceService) {}

  ngOnInit() {
  }
}
