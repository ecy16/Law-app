import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PracticeComponent } from './practice/practice.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LayoutComponent } from './layout/layout.component';
import { PeopleComponent } from './people/people.component';
import { CareersComponent } from './careers/careers.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent,pathMatch:'full'},
    {path:'',component:HomeComponent},
    
    {path:'about',component:AboutComponent},
    {path:'practice',component:PracticeComponent},
    {path:'contacts',component:ContactsComponent},
    {path:'people',component:PeopleComponent},
    {path:'careers',component:CareersComponent},




];
