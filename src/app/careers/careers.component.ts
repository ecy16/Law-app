import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-careers',
    standalone: true,
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class CareersComponent {

}
