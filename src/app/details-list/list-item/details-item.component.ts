import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Fact } from 'src/app/fact.model';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.css']
})
export class DetailsItemComponent implements OnInit {
  @Input() detail: Fact;

  constructor() { }

  ngOnInit() {
  }

}
