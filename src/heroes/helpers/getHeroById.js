import { articles } from '../data/articles';


export const getHeroById = ( id ) => {

    return articles.find( hero => hero.id === id );
}