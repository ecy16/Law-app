import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, RouterLink, RouterModule, FooterComponent]
})
export class AppComponent {
  title = 'Law-app';

}
