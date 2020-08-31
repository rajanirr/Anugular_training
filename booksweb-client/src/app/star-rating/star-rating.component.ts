import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  user = [{ rate: '4.8' }, { rate: '4.8' }, { rate: '3.2' }, { rate: '2.2' }];

  constructor() { }

  ngOnInit(): void {
  }

}
