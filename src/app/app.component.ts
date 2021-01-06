import { Component } from "@angular/core";
import { FactsServiceService } from "./facts-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "cats-app";

  constructor(public factsService: FactsServiceService) {
    factsService.onFetchFacts();
  }

  ngOnInit() {}

  itemClicked(itemId) {
    this.factsService.singleClickHandler(itemId);
  }
  sendToServer() {
    this.factsService.sendToServer();
  }
}
