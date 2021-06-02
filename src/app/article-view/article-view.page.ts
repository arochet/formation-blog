import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.page.html',
  styleUrls: ['./article-view.page.scss'],
})
export class ArticleViewPage implements OnInit {

  idArticle: number = -1;
  titre: string = "";
  contenue: string = "";
  notation: number = 0;

  constructor(public route: ActivatedRoute, public articleService: ArticleService) { }

  ngOnInit() {
    this.idArticle = this.route.snapshot.params["idArticle"];//On cherche l'id dans l'url
    const monArticle = this.articleService.getArticle(this.idArticle);
    
    console.log("monArticle : ");
    console.log(monArticle);

    if (monArticle != null) {
      this.titre = monArticle.titre;
      this.contenue = monArticle.contenue;
      this.notation = monArticle.notation;
    } else {
      this.titre = "Erreur ! l'id " + this.idArticle + " ne correspond à aucun article";
    }
  }

  augmenterNote() {
    this.articleService.augmenterNote(this.idArticle);
    this.notation = this.articleService.getArticle(this.idArticle).notation;
  }
  
  diminuerNote() {
    this.articleService.diminuerNote(this.idArticle);
    this.notation = this.articleService.getArticle(this.idArticle).notation;
  }
}
