import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';


export const ArticlePage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const article = useMemo( () => getHeroById( id ), [ id ]); 

  const onNavigateBack = () => {
    navigate(-1);
  }


  if ( !article ) {
    return <Navigate to="/salas" />
  }
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ `/assets/articles/${ id }.jpg` } 
          alt={ article.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ article.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> { article.alter_ego } </li>
          <li className="list-group-item"> <b>Department:</b> { article.department } </li>
          <li className="list-group-item"> <b>First appearance:</b> { article.first_appearance } </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{ article.characters }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>

    </div>
  )
}
