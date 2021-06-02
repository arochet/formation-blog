import { Article } from "../model/article";

export class ArticleService {
    listArticles: Article[] = [new Article("Titre 1", "Contenue 1"), new Article("Titre 2", "Contenue 2"), new Article("Titre 3", "Contenue 3")];

    getArticle(index: number) {
        return this.listArticles[index];
    }

    ajouterArticle(t:string, c: string) {
        this.listArticles.push(new Article(t, c));//Ajoute au tableau un nouvelle article
    }

    augmenterNote(index: number) {
        this.getArticle(index).notation ++;
    }
    
    diminuerNote(index: number) {
        this.getArticle(index).notation --;
    }
}