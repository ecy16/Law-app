import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    SlickCarouselModule,
  ],
})
export class HomeComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onButtonClick() {
    this.router.navigate(['/about']);
  }
  onBtnClick() {
    this.router.navigate(['/practice']);
  }
  slides = [
    { img: './assets/lawGavel.jpg' },
    { img: './assets/lawPartner.jpg' },
    { img: './assets/lawPartner2.jpg' },
    { img: './assets/booksBanner.jpg' },
  ];
  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: true,
    autoplayspeed: 4000,
    infinite: true,
    responsive:[
      {
        breakpoint:992,
        settings:{
          arrows:true,
          infinite:true,
          slidesToShow:2,
          slidesToScroll:2
        }
      }
    ]
  };
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
