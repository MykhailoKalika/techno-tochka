import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {NgOptimizedImage} from "@angular/common";
import {PopularQuestion} from "../../interfaces/popular-question";

@Component({
  selector: 'app-popular-questions',
  standalone: true,
  imports: [MatExpansionModule, NgOptimizedImage],
  templateUrl: './popular-questions.component.html',
  styleUrl: './popular-questions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularQuestionsComponent {
  public questions: PopularQuestion[] = [
    {
      header: 'Які види техніки ви ремонтуєте?',
      content: 'Ми спеціалізуємося на ремонті побутової техніки, комп\'ютерів, смартфонів, планшетів та аудіо-відео обладнання. Якщо у вас є конкретний запит, не соромтеся звертатися!',
    },
    {
      header: 'Чи можу я отримати безкоштовну консультацію?',
      content: 'Так, ми пропонуємо безкоштовну консультацію, де наші фахівці зможуть оцінити проблему та надати рекомендації щодо ремонту.',
    },
    {
      header: 'Як зробити ремонт дешевше?',
      content: 'Ціна ремонту смартфона зазвичай залежить від типу пошкодження, марки та моделі смартфона, гарантійних умов, кваліфікації майстрів, використаних запчастин, місцезнаходження сервісного центру, доступності запчастин та обсягу робіт.',
    },
    {
      header: 'Чи робимо термінові ремонти?',
      content: 'Ціна ремонту смартфона зазвичай залежить від типу пошкодження, марки та моделі смартфона, гарантійних умов, кваліфікації майстрів, використаних запчастин, місцезнаходження сервісного центру, доступності запчастин та обсягу робіт.',
    },
  ];
}
