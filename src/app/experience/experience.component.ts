import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  achievements: string[] = [
    'Engineered a dynamic e-commerce platform using Angular, resulting in a 40% increase in online sales and a 50% reduction in page load time.',
    'Developed reusable components, services, and models, significantly improving application maintainability and scalability by 60%.',
    'Refactored code to enhance performance and quality, ensuring optimal functionality and reducing bugs by 30%.',
    'Ensured cross-browser compatibility and responsiveness across all pages, enhancing user accessibility and experience.',
    'Collaborated with UI/UX designers to optimize user interfaces, improving user satisfaction and engagement scores by 20%.',
    'Participated in Agile Scrum ceremonies, contributing to efficient and timely project delivery, meeting 95% of deadlines.'
  ];

  developments: string[] = [
    'Completed Udemy courses in FrontEnd Development (specific courses can be listed)',
    'Developing English Language Proficiency',
    'Completed Udemy courses in FrontEnd Development, including: - Modern JavaScript from the Beginning - Angular - The Complete Guide',
    'Developing English Language Proficiency through structured courses and practice.'
  ]
}
