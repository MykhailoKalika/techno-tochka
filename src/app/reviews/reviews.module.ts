import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainDescriptionSectionComponent} from "../sections/main-description-section/main-description-section.component";
import {ReviewsComponent} from "./reviews-component/reviews.component";



@NgModule({
  declarations: [
    ReviewsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReviewsComponent,
  ]
})
export class ReviewsModule { }
