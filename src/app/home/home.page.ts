import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public articleService: ArticleService, public router: Router) {}

  goToAjoutArticle() {
    //Redirige vers l'url localhost:8100/ajout-article
    this.router.navigate(['ajout-article']);
  }

  ouvrirArticle(index: number) {
    this.router.navigate(['article-view', index]);//Récupère les paramètres et convertis en "localhost:8100/article-view/index"
  }
}
