import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-contacts',
    standalone: true,
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.scss',
    imports: [FooterComponent, HeaderComponent]
})
export class ContactsComponent {

}
