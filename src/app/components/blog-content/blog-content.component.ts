import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent {
  contentBlog = [
    {
      imagen: '../assets/img/IMG_20210708_112130.jpg',
      titulo: 'Título de Prueba',
      fecha: '08/07/2021',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod adipisci quam cumque placeat atque corporis, eum in impedit delectus, enim culpa, voluptate ratione! Officia optio recusandae ea quia officiis.',
      link: 'http://link-del-blog-1.com'
    },
    {
      imagen: '../assets/img/IMG_20210708_112130.jpg',
      titulo: 'Título de Prueba',
      fecha: '08/07/2021',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod adipisci quam cumque placeat atque corporis, eum in impedit delectus, enim culpa, voluptate ratione! Officia optio recusandae ea quia officiis.',
      link: 'http://link-del-blog-1.com'
    },
    {
      imagen: '../assets/img/IMG_20210708_112130.jpg',
      titulo: 'Título de Prueba',
      fecha: '08/07/2021',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod adipisci quam cumque placeat atque corporis, eum in impedit delectus, enim culpa, voluptate ratione! Officia optio recusandae ea quia officiis.',
      link: 'http://link-del-blog-1.com'
    }
  ];
}
