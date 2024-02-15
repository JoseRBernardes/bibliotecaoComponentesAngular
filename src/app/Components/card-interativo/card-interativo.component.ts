import { Component } from '@angular/core';

@Component({
  selector: 'app-card-interativo',
  templateUrl: './card-interativo.component.html',
  styleUrl: './card-interativo.component.css'
})
export class CardInterativoComponent {
  photo: string = "photo"
  contentHidden: string ="contentHidden"

  photoTransition():void{
    this.photo = this.photo ==="photo" ? "photoAction":"photo"
    this.contentHidden = this.contentHidden ==="contentHidden" ? "content" : "contentHidden"
  }

}
