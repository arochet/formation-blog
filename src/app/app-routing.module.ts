import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ajout-article',
    loadChildren: () => import('./ajout-article/ajout-article.module').then( m => m.AjoutArticlePageModule)
  },
  {
    path: 'article-view/:idArticle',
    loadChildren: () => import('./article-view/article-view.module').then( m => m.ArticleViewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
