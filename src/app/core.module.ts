import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DriveService} from "./services/drive.service";
import {FileService} from "./services/file.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DriveService,
    FileService
  ]
})
export class CoreModule {}
