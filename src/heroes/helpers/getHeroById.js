import { articles } from '../data/articles';


export const getHeroById = ( id ) => {

    return articles.find( article => article.id === id );
}