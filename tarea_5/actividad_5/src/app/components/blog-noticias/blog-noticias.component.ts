import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-blog-noticias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog-noticias.component.html',
  styleUrl: './blog-noticias.component.css'
})
export class BlogNoticiasComponent {

  arrNoticias: INoticia[] = [];

  newNoticia: INoticia = {
    titulo: '', url: '', texto: ''
  };


  ngOnInit(): void{
    this.cargarDatos();
  
    this.arrNoticias = [
      {titulo: 'Primera noticia', url: "https://placehold.co/600x400/png", texto: 'Esta es mi primera noticia en el blog.', fecha: new Date()},
      {titulo: 'Segunda noticia en el blog', url: "https://placehold.co/600x400/png",texto: 'Seguimos con las notcias en el blog, en este caso es la segundo', fecha: new Date()},
    ];

  }

  constructor(){

  }


  registrar(){
    if(this.newNoticia.titulo !== "" && this.newNoticia.url !== "" && 
      this.newNoticia.texto !== "" && this.newNoticia.fecha !== undefined){
      this.arrNoticias.push(this.newNoticia);
      console.log(this.newNoticia.fecha);
      this.newNoticia = {
        titulo: '', url: '', texto: ''
      };
    }else{
      alert("Debe de rellenar todos los campos para registrar una noticia");
    }
  }


  cargarDatos(): string {
    let html: string = "";
    let classNoticia = "noticia";
    this.arrNoticias.forEach( (noticia: INoticia) => {
      html += `<article class=${classNoticia}>`+ `<h2>${noticia.titulo}</h2>` 
      + `<p>${noticia.fecha}</p>` 
      + `<p>${noticia.texto}</p>` 
      + `<img src="${noticia.url}" />` + `</article>`
    })
    return html;
  }



}
