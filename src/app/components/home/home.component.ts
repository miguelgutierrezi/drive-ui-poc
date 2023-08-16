import {Component, OnInit} from '@angular/core';
import {DriveService} from "../../services/drive.service";
import {FileService} from "../../services/file.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  queryForm: FormGroup;
  codes: Object = [];
  base64File: string = '';
  elements: Array<any> = [];

  constructor(
    private driveService: DriveService,
    private fileService: FileService,
    private fb: FormBuilder
  ) {
    this.queryForm = this.fb.group({
      folderName: ['', Validators.required],
      file: [null]
    });
  }

  public ngOnInit() {
  }

  public onFileSelected(event: any): void {
    this.convertFileToBase64(event.target.files[0]);
  }

  public onSubmit(): void {
    if (this.queryForm.valid) {
      this.isLoading = true;
      this.fileService.getCodesFromFile(this.base64File).subscribe({
        next: res => {
          this.codes = res;
          this.processCodes();
        }, error: error => {
          console.log(error)
        }
      });
    }
  }

  private processCodes() {
    for (let key in Object.keys(this.codes)) {
      // @ts-ignore
      const code = this.codes[key];
      this.driveService.processCode(code, this.queryForm.get('folderName')?.value).subscribe({
        next: res => {
          this.elements.push(res);
        }, error: error => {
          console.log(error);
        }
      });
    }
    this.isLoading = false;
  }

  private convertFileToBase64(file: File): void {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.base64File = event.target.result.split(',')[1];
    };

    reader.readAsDataURL(file);
  }
}
