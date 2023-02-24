import { articles } from '../data/articles';


export const getArticlesByDepartment = ( department ) =>{

    const validDepartments = ['recamaras', 'salas'];
    if (!validDepartments.includes(department)) {
        throw new Error(`${ department } is not a valid department`);
    }

    return articles.filter( article => article.department === department );
}


