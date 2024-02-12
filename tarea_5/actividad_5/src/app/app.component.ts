import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { BlogNoticiasComponent } from './components/blog-noticias/blog-noticias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent, BlogNoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actividad_5';
}
