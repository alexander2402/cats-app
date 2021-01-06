import { Component, OnInit } from '@angular/core';
import { Fact } from '../fact.model';
import { FactsServiceService } from '../facts-service.service';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.css']
})
export class DetailsListComponent implements OnInit {
  details: Fact[];
  constructor(public factService: FactsServiceService) { }

  ngOnInit() {
  }

}
