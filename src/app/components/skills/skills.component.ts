import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  frontendList: any[] = [
    { icon: 'assets/images/html.png', label: 'HTML5' },
    { icon: 'assets/images/css.png', label: 'CSS3' },
    { icon: 'assets/images/js.png', label: 'JavaScript' },
    { icon: 'assets/images/ts.png', label: 'TypeScript' }
  ]

  backendList: any[] = [
    { icon: 'assets/images/sql.png', label: 'SQL' },
    { icon: 'assets/images/supabase.png', label: 'Supabase' },
    { icon: 'assets/images/c.png', label: 'C' }
  ]

  frameworkList: any[] = [
    { icon: 'assets/images/angular.png', label: 'Angular' },
    { icon: 'assets/images/react.png', label: 'React' }
  ]

  cssFrameworkList: any[] = [
    { icon: 'assets/images/tailwind.png', label: 'Tailwind' },
    { icon: 'assets/images/bootstrap.png', label: 'Bootstrap' }
  ]

  toolsList: any[] = [
    { icon: 'assets/images/git.png', label: 'Git' },
    { icon: 'assets/images/npm.png', label: 'NPM' },
    { icon: 'assets/images/vite.png', label: 'Vite' }
  ]

  otherList: any[] = [
    { icon: 'assets/images/gsap.png', label: 'GSAP' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
