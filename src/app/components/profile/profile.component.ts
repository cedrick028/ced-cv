import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {

  @ViewChild('introText', { static: true }) introText!: ElementRef<HTMLElement>
  @ViewChild('profilePic', { static: true }) profilePic!: ElementRef<HTMLElement>
  @ViewChild('myName', { static: true }) myName!: ElementRef<HTMLElement>
  @ViewChild('myPosition', { static: true }) myPosition!: ElementRef<HTMLElement>
  @ViewChild('myDescription', { static: true }) myDescription!: ElementRef<HTMLElement>
  @ViewChild('emailBtn', { static: true }) emailBtn!: ElementRef<HTMLElement>

  myArray: any[] = [
    { id: 1, name: 'prod 1', price: 300 },
    { id: 2, name: 'prod 2', price: 400 },
    { id: 3, name: 'prod 3', price: 100 },
  ]

  constructor() { }

  ngAfterViewInit() {
    gsap.set([
      this.introText.nativeElement,
      this.profilePic.nativeElement,
      this.myName.nativeElement,
      this.myPosition.nativeElement,
      this.myDescription.nativeElement,
      this.emailBtn.nativeElement
    ], {
      y: 50,
      opacity: 0
    });

    gsap.to(this.introText.nativeElement, 2, {
      y: 0,
      opacity: 1,
      ease: 'elastic.out',
      scrollTrigger: {
        trigger: this.introText.nativeElement,
        start: 'top 80%'
      }
    });

    gsap.to(this.profilePic.nativeElement, 1.6, {
      y: 0,
      opacity: 1,
      ease: 'elastic.out',
      scrollTrigger: {
        trigger: this.profilePic.nativeElement,
        start: 'top 80%'
      },
      delay: .4
    });

    gsap.to(this.myName.nativeElement, .4, {
      y: 0,
      opacity: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: this.myName.nativeElement,
        start: 'top 80%'
      },
      delay: .8
    });

    gsap.to(this.myPosition.nativeElement, .4, {
      y: 0,
      opacity: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: this.myPosition.nativeElement,
        start: 'top 80%'
      },
      delay: 1
    });

    gsap.to(this.myDescription.nativeElement, .4, {
      y: 0,
      opacity: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: this.myDescription.nativeElement,
        start: 'top 80%'
      },
      delay: 1.1
    });

    gsap.to(this.emailBtn.nativeElement, .6, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.emailBtn.nativeElement,
        start: 'top 100%'
      },
      delay: 1.2
    });
  }

}
