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
      header: 'Від чого залежить ціна ремонту смартфона?',
      content: 'Ціна ремонту смартфона зазвичай залежить від типу пошкодження, марки та моделі смартфона, гарантійних умов, кваліфікації майстрів, використаних запчастин, місцезнаходження сервісного центру, доступності запчастин та обсягу робіт.',
    },
    {
      header: 'У вас бескоштовна діагностика телефону?',
      content: 'Ціна ремонту смартфона зазвичай залежить від типу пошкодження, марки та моделі смартфона, гарантійних умов, кваліфікації майстрів, використаних запчастин, місцезнаходження сервісного центру, доступності запчастин та обсягу робіт.',
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
