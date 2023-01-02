import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SearchEngineService } from '../Services/search-engine.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private http: HttpClient , public service : SearchEngineService) {}

  referenceImage !: File;
  mostSimilarImages !: string[];

  shortLink: string = "";
  loading: boolean = false; 

  onReferenceImageChange(event: any) {
    this.referenceImage = event.target.files[0];
  }

  //searchSimilarImages() {
   // this.service.upload(this.referenceImage)
  //}


  searchSimilarImages() {
    const formData = new FormData();
    formData.append('referenceImage', this.referenceImage, this.referenceImage.name);

    this.http.post('/search-similar-images', formData).subscribe((response) => {
      console.log(response);
     // this.referenceImage = 'data:image/jpeg;base64,' + response.referenceImage;
     // this.mostSimilarImages = response.mostSimilarImages.map((image) => 'data:image/jpeg;base64,' + image);
    });
  }


  onUpload() {
    this.loading = !this.loading;
    console.log(this.referenceImage);
    this.service.upload(this.referenceImage).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
}
}


