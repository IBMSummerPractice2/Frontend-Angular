import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PollComponentComponent } from "./poll-component/poll-component.component";
import { HomeComponentComponent } from "./home-component/home-component.component";

@NgModule({
    declarations: [
        PollComponentComponent,
        HomeComponentComponent
    ],
    imports: [
        CommonModule
]

})
export class CoreModule{}