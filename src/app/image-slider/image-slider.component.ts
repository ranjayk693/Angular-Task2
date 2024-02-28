import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
})
export class ImageSliderComponent implements OnInit {

  
  // Taking input as array data from the app compunent
  @Input() slides: any[] = [];
  IsEmpty:boolean=false;
  currentSlide = 0;  //inital index
  faArrowRight = faArrowRight;  //font awesome right arrow
  faArrowLeft = faArrowLeft;    //font awesome left arrow

  // Next  Function to increment the index
  next() {
    if(this.slides.length!==0)
    {
      this.IsEmpty=false;
      let currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.jumpToSlide(currentSlide);
    }
    else{
      this.IsEmpty=true;
    }
    
  }

  // Previous function to decrement the index
  previous() {
    if(this.slides.length!==0){
      this.IsEmpty=false;
      let currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.jumpToSlide(currentSlide);
    }
   
  }

// Redirect to the image for given index no 
  jumpToSlide(index: number) {
    
    setTimeout(() => {
      if(this.slides.length!==0){
        this.IsEmpty=false;
        this.currentSlide = index;
      }
    },200);
    
  }

  // Auto change the image slider after 5 sec
  ngOnInit() {
      setInterval(() => {
        this.next();
      }, 5000);
    
  }
}
