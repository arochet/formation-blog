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

  constructor(public route: ActivatedRoute, public articleService: ArticleService) { }

  ngOnInit() {
    this.idArticle = this.route.snapshot.params["idArticle"];//On cherche l'id dans l'url
    const listArticle = this.articleService.listArticles;
    const monArticle = listArticle[this.idArticle];
    
    console.log("monArticle : ");
    console.log(monArticle);

    if (monArticle != null) {
      this.titre = monArticle.titre;
      this.contenue = monArticle.contenue;
    } else {
      this.titre = "Erreur ! l'id " + this.idArticle + " ne correspond à aucun article";
    }
  }

}
