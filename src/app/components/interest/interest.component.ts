import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  interestList: any[] = [
    { id: 1, icon: 'assets/images/basketball.jpg', title: 'Basketball', description: 'Playing for fun and following NBA and PBA games' },
    { id: 2, icon: 'assets/images/biking.jpg', title: 'Biking', description: 'Staying active and clearing my mind through long rides' },
    { id: 3, icon: 'assets/images/hobby.jpg', title: 'Hobby', description: 'Practicing patience and attention to detail through model kits' },
    { id: 4, icon: 'assets/images/cooking.jpg', title: 'Cooking', description: 'Exploring new recipes and improving my cooking skills' },
    { id: 5, icon: 'assets/images/podcast.jpg', title: 'Podcast', description: 'Relaxing and recharging with light, humorous content' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
