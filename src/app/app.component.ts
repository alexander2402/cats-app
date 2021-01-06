
import { Component } from "@angular/core";
import { Fact } from "./fact.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "cats-app";
  public facts: Fact[] = [];
  public details: Fact[] = [];
  isSingleClick: Boolean = true;

  constructor() {}

  ngOnInit() {
    this.onFetchFacts();
  }

  onFetchFacts() {
    fetch(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10"
    )
      .then((res) => res.json())
      .then((res) => {
        this.facts = res.map((fact, index) => {
          return new Fact(fact.text, fact.createdAt,  (fact.id = index));
        });
      });
  }

  method1CallForClick(index, target) {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.isSingleClick = false;
        this.method2CallForDblClick(index, target);
      }
    }, 250);
  }

  method2CallForDblClick(index, target) {
    this.pushToArray(index, target);
    this.removeFromArray(index, target);
  }

  removeFromArray(index, target) {
    if (target === "details") {
      this.details.splice(index, 1);
    } else if (target === "facts") {
      this.facts.splice(index, 1);
    }
  }

  pushToArray(index, target) {
    if (target === "details") {
      this.facts.push(this.details[index]);
      this.facts.sort(function (a, b) {
        return a.id - b.id;
      });
    } else if (target === "facts") {
      this.details.push(this.facts[index]);
    }
  }

  sendToServer() {
    //  $.post("http://localhost:8889/json.php", {json : JSON.stringify(this.details)});
  //   $.ajax({
  //     url: "http://localhost:8889/json.php",
  //     type: "POST",
  //     crossDomain: true,
  //     header: "('Access-Control-Allow-Origin: *')",
  //     data: {json: JSON.stringify(this.details)} ,
  //     dataType: "jsonp",
  //     success: function (response) {
  //         var resp = JSON.parse(response)
  //         alert(resp.status);
  //     },
  //     error: function (xhr, status, response) {
  //         alert("error");
  //         console.log(res)
  //     }
  // });
  }
}
