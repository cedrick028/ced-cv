import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  storyList: any[] = [
    { id: 1, icon: '../../../assets/images/bottle_icon.jpg', date: '1997', title: 'Born', description: [
        'I was born in 1997.'
      ]
    },
    { id: 2, icon: '../../../assets/images/abc_icon.jpg', date: '2001', title: 'Started schooling', description: [
        'By the age of 4, I had already started school—clearly in a hurry to see what the world had to offer.'
      ]
    },
    { id: 3, icon: '../../../assets/images/basketball_icon.jpg', date: '2004', title: 'Fell in love with basketball', description: [
        'At 7, I fell in love for the first time.',
        'Not with a person—but with a basketball. That love stuck, and I’ve been playing ever since.'
      ]
    },
    { id: 4, icon: '../../../assets/images/keyboard_icon.jpg', date: '2014', title: 'First code', description: [
        'Fast forward to 2014, I wrote my first line of code:',
        'Hello, World!',
        'Turns out, the world said hello back.'
      ]
    },
    { id: 5, icon: '../../../assets/images/graduate_icon.jpg', date: '2020', title: 'Bachelors degree', description: [
        'I officially pursued technology and earned my Bachelor’s Degree in Information Technology in 2020, but curiosity couldn’t wait—I landed my first job as a Front-End Developer in 2019, a year before graduation.',
        'Somewhere in college, I discovered another passion: cycling—a different kind of balance, speed, and freedom.'
      ]
    },
    { id: 6, icon: '../../../assets/images/work_icon.jpg', date: '2023', title: 'System Developer', description: [
        'My journey eventually brought me to the UAE, where I now work as a System Developer, building systems and solving problems one day at a time.'
      ]
    },
    { id: 7, icon: '../../../assets/images/ring_icon.jpg', date: '2024', title: 'BIG YEAR', description: [
        'Then came 2024—a big year',
        'I married my wife, moved into our own personal space, and unlocked a new life skill: cooking.',
        '(Some dishes are great. Some are… learning experiences.)',
        'Between life and work stress, I also discovered a powerful coping mechanism: comedy podcasts—because sometimes the best solution is just a good laugh.'
      ]
    },
    { id: 8, icon: '', date: '', title: 'Present', description: [
        'Basketball taught me teamwork.',
        'Coding taught me logic.',
        'Cycling taught me endurance.',
        'Marriage taught me responsibility.',
        'Cooking taught me humility.',
        'Comedy reminded me not to take life too seriously.',
        'Still learning. Still building.'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
