import { Component, OnInit } from '@angular/core';
import { Fact } from '../fact.model';
import { FactsServiceService } from '../facts-service.service';

@Component({
  selector: 'app-fact-list',
  templateUrl: './fact-list.component.html',
  styleUrls: ['./fact-list.component.css']
})
export class FactListComponent implements OnInit {

  constructor(public factsService: FactsServiceService) { }

  ngOnInit() {
    this.factsService.onFetchFacts();
    setTimeout(() => {
      console.log(this.factsService.facts);
    }, 1000);

  }




}
