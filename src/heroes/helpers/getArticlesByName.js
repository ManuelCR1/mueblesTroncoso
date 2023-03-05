import { articles } from '../data/articles';


export const getArticlesByName = ( name = '' ) => {

    name = name.toLocaleLowerCase().trim();
    
    if ( name.length === 0 ) return [];

    return articles.filter(
        article => article.name.toLocaleLowerCase().includes( name ) 
    );

}



