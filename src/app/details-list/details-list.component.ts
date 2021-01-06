import { Component, OnInit } from '@angular/core';
import { Fact } from '../fact.model';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.css']
})
export class DetailsListComponent implements OnInit {
  details: Fact[];
  constructor() { }

  ngOnInit() {
  }

}
