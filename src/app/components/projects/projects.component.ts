import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectList: any[] = [
    {
      id: 1, thumbnail: '../../../assets/images/invento_thumbnail.jpg', name: 'Invento', date: 'Nov 2025', description: 'Landing page with GSAP animation. Mobile responsive.',
      techStack: [
        'HTML5',
        'Tailwind CSS',
        'Angular',
        'TypeScript',
      ],
      link: 'https://cedrick028.github.io/invento/'
    },
    {
      id: 2, thumbnail: '../../../assets/images/jscales_thumbnail.jpg', name: 'JScales by Ced', date: 'Jan 2025', description: 'Responsive E-commerce site made with Angular and Tailwind CSS.',
      techStack: [
        'HTML5',
        'Tailwind CSS',
        'Angular',
        'TypeScript',
        'JSON'
      ],
      link: 'https://cedrick028.github.io/jscales_by_ced/#/home'
    },
    {
      id: 3, thumbnail: '../../../assets/images/bikes_thumbnail.jpg', name: 'Bikes by Ced', date: 'Jan 2023', description: 'Landing page made with React and Tailwind CSS.',
      techStack: [
        'HTML5',
        'Tailwind CSS',
        'React',
        'JavaScript'
      ],
      link: 'https://cedrick028.github.io/bikes_by_ced/'
    },
    {
      id: 4, thumbnail: '../../../assets/images/rc_thumbnail.jpg', name: 'RC Engineering', date: 'Jan 2023', description: 'Web project about engineering services based from India.',
      techStack: [
        'HTML5',
        'Tailwind CSS',
        'React',
        'JavaScript'
      ],
      link: 'https://cedrick028.github.io/rc_engineering/'
    },
    {
      id: 5, thumbnail: '../../../assets/images/shimano_thumbnail.jpg', name: 'Shimano', date: 'Jan 2023', description: 'Interactive digital advertisement made GSAP animation',
      techStack: [
        'HTML5',
        'CSS',
        'JavaScript',
        'GSAP'
      ],
      link: 'https://cedrick028.github.io/Cedrick_Shimano_300x600/'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
