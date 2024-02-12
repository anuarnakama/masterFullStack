import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-noticias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog-noticias.component.html',
  styleUrl: './blog-noticias.component.css'
})
export class BlogNoticiasComponent {

  arrNoticias: any[] = []

  newNoticia: any = {
    'titulo': '', 'imagen': '','texto': '', 'fecha': ''
  };


  constructor(){
    this.cargarDatos();
  
    this.arrNoticias = [
      {'titulo': 'Mi titular', 'imagen': "https://www.dongee.com/tutoriales/content/images/size/w1000/2023/01/image-32.png",'texto': 'mi texto de noticia', 'fecha': ''},
      {'titulo': 'Mi titular2', 'imagen': "https://www.dongee.com/tutoriales/content/images/size/w1000/2023/01/image-32.png",'texto': 'mi texto de noticia2', 'fecha': ''},
    ];
}


  registrar(){
    this.arrNoticias.push(this.newNoticia);
    this.newNoticia = {
      'titulo': '', 'imagen': '','texto': '', 'fecha': ''
    };
  }


  cargarDatos(): string {
    let html: string = "";
    this.arrNoticias.forEach( (element: any) => {
      html += `<p>${element.titulo}</p>` + `<img src="${element.imagen}" />`
    })
    return html;
  }



}
