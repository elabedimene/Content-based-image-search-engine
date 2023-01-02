import { Component, OnInit } from '@angular/core';
import { SearchEngineService } from '../Services/search-engine.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit{
  
  selectedFiles !: any
  constructor() { }
  
  ngOnInit(): void {
  }



}