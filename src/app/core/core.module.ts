import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PollComponentComponent } from "./poll-component/poll-component.component";
import { HomeComponentComponent } from "./home-component/home-component.component";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
    declarations: [
        PollComponentComponent,
        HomeComponentComponent,
       
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
]

})
export class CoreModule{}