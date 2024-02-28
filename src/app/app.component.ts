import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    ImageSliderComponent,
    JsonPipe,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // font icon for trash
  faTrash=faTrash;

  // FormGroup for the image url
  UrlImage:FormGroup;
  constructor(private fb:FormBuilder){
    this.UrlImage=this.fb.group({
      url:['',Validators.required],
      caption:['',Validators.required]
    })
  }

  // Slides array
  slides: {url:string,caption:string}[] = [
    {
      url: 'https://e0.pxfuel.com/wallpapers/329/521/desktop-wallpaper-water-and-fire-flaming-tiger.jpg',
      caption: 'First slide image',
    },
    {
      url: 'https://c4.wallpaperflare.com/wallpaper/471/127/715/tiger-water-green-eyes-neon-wallpaper-preview.jpg',
      caption: 'Second Slide Image',
    },
    
    {
      url: 'https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2022/01/good-nature-homepage-hero_2-scaled.jpg',
      caption: 'Third slide Image',
    },
  ];

  // Adding image url and caption to the image
  OnAddURL(){
    //Getting URL and caption from the form and push it to the image array 
    const url=this.UrlImage.get("url")?.value
    const caption=this.UrlImage.get("caption")?.value
    // If caption and image url exists then push the url link and caption.
    if(url && caption){
      this.slides.push({url,caption});
      return;
    }
    alert("Please enter the valid url and caption")
  }

  // Delete the images
  OnDelete(index: number) {
    // Updating the slides array
    this.slides = this.slides.filter((data, dataIndex) => dataIndex !== index);
  }
  
}
