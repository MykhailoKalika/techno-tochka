import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {HeaderSectionComponent} from "./sections/header-section/header-section.component";
import {MainDescriptionSectionComponent} from "./sections/main-description-section/main-description-section.component";
import {PricesSectionComponent} from "./sections/prices-section/prices-section.component";
import {HowDoWeWorkSectionComponent} from "./sections/how-do-we-work-section/how-do-we-work-section.component";
import {NumbersSectionComponent} from "./sections/numbers-section/numbers-section.component";
import {PopularQuestionsComponent} from "./sections/popular-questions/popular-questions.component";
import {WaitingComponent} from "./sections/waiting/waiting.component";
import {ReviewsComponent} from "./sections/reviews/reviews.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AsyncPipe,
    HeaderSectionComponent,
    MainDescriptionSectionComponent,
    PricesSectionComponent,
    HowDoWeWorkSectionComponent,
    NumbersSectionComponent,
    ReviewsComponent,
    PopularQuestionsComponent,
    WaitingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
