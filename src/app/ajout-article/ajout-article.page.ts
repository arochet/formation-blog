import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.page.html',
  styleUrls: ['./ajout-article.page.scss'],
})
export class AjoutArticlePage implements OnInit {

  valueTitre: string = "";
  valueContenue: string = "";

  constructor(public router: Router, public articleService: ArticleService) { }

  ngOnInit() {
  }

  ajouterArticle() {
    console.log("Entrée utilisateur de titre : " + this.valueTitre);
    console.log("Entrée utilisateur de contenue : " + this.valueContenue);
    this.articleService.ajouterArticle(this.valueTitre, this.valueContenue);
    this.router.navigate(["home"]);
  }
}
