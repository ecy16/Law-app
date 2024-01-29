import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-practice',
    standalone: true,
    templateUrl: './practice.component.html',
    styleUrl: './practice.component.scss',
    imports: [MatIcon, HeaderComponent, FooterComponent]
})
export class PracticeComponent {

}
