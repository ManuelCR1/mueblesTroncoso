import { Link } from 'react-router-dom';

const CharactersByHero = ({ marca, description}) => {
    // if ( marca === description ) return (<></>);
    // return <p>{ description }</p>
    return ( marca === description )
     ? <></>
     : <p>{ description }</p>;
}


export const ArticleCard = ({ 
    id,
    name,
    department,
    marca,
    description,
    size
}) => {

    const heroImageUrl = `/assets/articles/${ id }.jpg`;

    // const charactesByHero =  (<p>{ description }</p>);


    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt={ name } />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ name }</h5>
                            <p className="card-text">{ marca }</p>

                            {/* {
                                ( marca !== description ) && charactesByHero
                                ( marca !== description ) && <p>{ description }</p>
                            } */}
                            <CharactersByHero description={ description } marca={ marca } />

                            <p className="card-text">
                                <small className="text-muted">{ department }</small>
                            </p>

                            <Link to={`/article/${ id }`}>
                                Más..
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
