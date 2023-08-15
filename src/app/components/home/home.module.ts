import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        HomeRoutingModule,
        SharedModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }
