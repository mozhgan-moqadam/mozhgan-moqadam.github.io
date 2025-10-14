import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      id:0,
      images: [
        'assets/projects/admin-panel 1.png',
        'assets/projects/admin-panel 2.png',
        'assets/projects/admin-panel 3.png',
      ],
      currentIndex: 0,
    },
    {
      id:1,
      images: [
        'assets/projects/portfolio-1.png',
        'assets/projects/portfolio-2.png',
        'assets/projects/portfolio-3.png',
      ],
      currentIndex: 0,
    },
  ];

  nextImage(project: any) {
    project.currentIndex = (project.currentIndex + 1) % project.images.length;
  }

  prevImage(project: any) {
    project.currentIndex =
      (project.currentIndex - 1 + project.images.length) % project.images.length;
  }
}
