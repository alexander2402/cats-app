import { Injectable } from '@angular/core';
import { Fact } from './fact.model';
import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class FactsServiceService {
  public facts: Fact[] = [];  //list of facts which received from API
  public details: Fact[] = []; // details which would be populated by click
  isSingleClick: Boolean = true;

  constructor() {}

  ngOnInit() {
    this.onFetchFacts(); //initial fetching cat facts from API
  }

  onFetchFacts() {
    try {
      fetch(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10"
      )
        .then((res) => res.json())
        .then((res) => {
          this.facts = res.map((fact) => {
            return new Fact((fact.id), fact.text, fact.user); //creating Array of Objects from data received from API
          });
        });
    } catch (error) {
      console.log("Sorry, API is temporary unavailable!")
    }

  }

  //Function to Detect Double click. First we detect double click and on second one we call   method2CallForDblClick()
  method1CallForClick(index, target) {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.isSingleClick = false;
        this.method2CallForDblClick(index, target);
      }
    }, 250);
  }

  //Adding/Removing needed data on double click
  method2CallForDblClick(index, target) {
    this.pushToArray(index, target);
    this.removeFromArray(index, target);
  }

  //Removing Details/Facts on double click
  removeFromArray(index, target) {
    if (target === "details") { //deletes details from right side on double click
      this.details.splice(index, 1);
    } else if (target === "facts") { //deletes facts from left side on double click
      this.facts.splice(index, 1);
    }
  }

  //Adding Details/Facts on double click
  pushToArray(index, target) {
    if (target === "details") { //adding facts to the  left side on double click
      this.facts.push(this.details[index]);
      this.facts.sort(function (a, b) {
        return a.id - b.id;
      });
    } else if (target === "facts") { //adding  details to the  right side on double click
      this.details.push(this.facts[index]);
    }
  }


  //Sending list of selected details to the PHP Server
  sendToServer() {
     $.post("http://localhost:8889/json.php", {json : JSON.stringify(this.details)});
  }
}
