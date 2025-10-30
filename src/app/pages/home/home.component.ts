import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
    constructor(private router: Router) {}

      goToProjects() {
    console.log('Button clicked! Navigating to /projects');
    this.router.navigate(['/projects']);
  }
}
