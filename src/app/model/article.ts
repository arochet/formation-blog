export class Article {
    titre: string = "";
    contenue: string = "";
    notation: number = 0;

    constructor(t: string, c: string) {
        this.titre = t;
        //this.contenue = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut metus at neque finibus scelerisque. Suspendisse auctor lorem eros, ut commodo metus facilisis vel. Proin quis scelerisque ligula. Nunc vitae auctor ante. Proin volutpat dolor in ligula euismod, id tristique ligula semper. Fusce auctor interdum eros, nec elementum lacus tincidunt id. Mauris elit justo, lobortis sit amet hendrerit sed, euismod et magna.";
        this.contenue = c;
    }
}