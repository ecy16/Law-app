import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-people',
    standalone: true,
    templateUrl: './people.component.html',
    styleUrl: './people.component.scss',
    imports: [FooterComponent, HeaderComponent]
})
export class PeopleComponent {

}
