import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent,RouterOutlet,FooterComponent]
})
export class HomeComponent {
constructor(private router:Router){}
ngOnInit():void{}
onButtonClick(){
  this.router.navigate(['/about'])
}
onBtnClick(){
  this.router.navigate(['/practice'])
}

}
