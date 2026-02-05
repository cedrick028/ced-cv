import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceList: any[] = [
    {
      id: 1,
      company: 'Core Laboratories International B.V.',
      position: 'Systems Developer',
      date: 'Nov 2023 - Present',
      responsibilities: [
        'Built web pages using Angular and Typescript',
        'Generate charts to represent data from API using Chart.js',
        'Implements reusable components',
        'Collaborating with designers and senior developers from Houston, TX'
      ],
      logo: 'assets/images/corelab.png',
      techStack: [
        'HTML5',
        'CSS',
        'Angular',
        'TypeScript',
        'Node JS',
        '.NET',
        'SQL'
      ]
    },
    {
      id: 2,
      company: 'Smartly IO / Adlib Digital',
      position: 'Front-End Developer',
      date: 'Jun 2021 - Aug 2023',
      responsibilities: [
        'Converts Adobe XD design to HTML5 interactive social media advertisement',
        'Developed dynamic templates for DCO display and social campaigns',
        'Creates static, animated, HTML5, VPAID and Rich Media banner',
        'Implements animations using GSAP'
      ],
      logo: 'assets/images/smartlyio.png',
      techStack: [
        'HTML5',
        'CSS',
        'Javascript',
        'GSAP',
        'Google Ads'
      ]
    },
    {
      id: 3,
      company: 'Wideout Workforces Inc.',
      position: 'Front-End Developer',
      date: 'Oct 2019 - Jan 2021',
      responsibilities: [
        'Converts Adobe XD design to HTML5 interactive social media advertisement',
        'Creates multiple different ad versions and sizes',
        'Handles peer-to-peer QA'
      ],
      logo: 'assets/images/wideout.png',
      techStack: [
        'HTML5',
        'CSS',
        'Javascript',
        'GSAP'
      ]
    },
    {
      id: 4,
      company: 'TDK',
      position: 'Network Support',
      date: 'Aug 2019',
      responsibilities: [
        'Set up and configure network devices (routers, switches, access points) under supervision',
        'Assist in fixing basic network and internet issues',
        'Learn and apply basic networking concepts',
      ],
      logo: 'assets/images/tdk.png',
      techStack: []
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
