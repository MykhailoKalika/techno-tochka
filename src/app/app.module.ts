import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {HeaderSectionComponent} from "./sections/header-section/header-section.component";
import {MainDescriptionSectionComponent} from "./sections/main-description-section/main-description-section.component";
import {PricesSectionComponent} from "./sections/prices-section/prices-section.component";
import {HowDoWeWorkSectionComponent} from "./sections/how-do-we-work-section/how-do-we-work-section.component";
import {NumbersSectionComponent} from "./sections/numbers-section/numbers-section.component";
import {ReviewsModule} from "./reviews/reviews.module";
import {PopularQuestionsComponent} from "./sections/popular-questions/popular-questions.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    AsyncPipe,
    HeaderSectionComponent,
    MainDescriptionSectionComponent,
    PricesSectionComponent,
    HowDoWeWorkSectionComponent,
    NumbersSectionComponent,
    ReviewsModule,
    PopularQuestionsComponent
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
