import { Injectable } from "@angular/core";
import { Fact } from "./fact.model";
import * as $ from "jquery";

@Injectable({
  providedIn: "root",
})
export class FactsServiceService {
  public facts: Fact[] = []; //list of facts which received from API
  public details: Fact[] = []; // details which would be populated by click
  isSingleClick: Boolean = true;

  constructor() {}

  ngOnInit() {}

  onFetchFacts() {
    try {
      fetch(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10"
      )
        .then((res) => res.json())
        .then((res) => {
          this.facts = res.map((fact) => {
            return new Fact(fact.text, fact.createdAt, fact._id); //creating Array of Objects from data received from API
          });
        });
    } catch (error) {
      console.log("Sorry, API is temporary unavailable!");
    }
  }

  //Function to Detect Double click. First we detect double click and on second one we call   doubleClickHandler()
  singleClickHandler(id) {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.isSingleClick = false;
        this.doubleClickHandler(id);
      }
    }, 250);
  }

  //Adding/Removing needed data on double click
  doubleClickHandler(id) {
    this.swapItem(id);
  }

  targetDefiner(id) {
    let targetObj = { targetArrayStr: undefined, targetItemIndex: undefined };
    this.facts.forEach((fact, index) => {
      if (fact.id == id) {
        targetObj.targetArrayStr = "details";
        targetObj.targetItemIndex = index;
      }
    });
    if (!targetObj.targetArrayStr) {
      this.details.forEach((detail, index) => {
        if (detail.id == id) {
          targetObj.targetArrayStr = "facts";
          targetObj.targetItemIndex = index;
        }
      });
    }
    return targetObj;
  }

  //Removing Details/Facts on double click
  swapItem(id) {
    let targetObj = this.targetDefiner(id);
    if (targetObj.targetArrayStr == "details") {
      this.pushToArray(targetObj.targetItemIndex, "details");
      this.facts.splice(targetObj.targetItemIndex, 1);
    } else if (targetObj.targetArrayStr == "facts") {
      this.pushToArray(targetObj.targetItemIndex, "facts");
      this.details.splice(targetObj.targetItemIndex, 1);
    }
  }

  pushToArray(index, target) {
    if (target === "facts") {
      this.facts.push(this.details[index]);
      // this.facts.sort(function (a, b) {
      //   return a.id - b.id;
      // });
    } else if (target === "details") {
      this.details.push(this.facts[index]);
    }
  }

  //Sending list of selected details to the PHP Server
  sendToServer() {
    $.post("http://localhost:8889/json.php", {
      json: JSON.stringify(this.details),
    });
  }
}
