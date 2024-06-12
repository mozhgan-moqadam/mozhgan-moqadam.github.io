import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
 profiles:string[]=[
 'Frontend Developer specializing in the Angular framework with a proven track record of boosting online sales and enhancing user experience through dynamic and responsive e-commerce platforms. Skilled in TypeScript, HTML, CSS, and Bootstrap, with a strong ability to collaborate within Agile Scrum teams.'
]
}
