
import { useMemo } from 'react';
import { ArticleCard } from '.';
import { getArticlesByDepartment } from '../helpers';

export const ArticleList = ({ department }) => {

    const departments = useMemo( () => getArticlesByDepartment( department ), [ department ]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                departments.map( department => (
                    <ArticleCard 
                        key={ department.id } 
                        { ...department }
                    />
                ))
            }
        </div>
    )
}
