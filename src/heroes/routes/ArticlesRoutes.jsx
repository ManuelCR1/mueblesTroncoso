import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { SalasPage, ArticlePage, RecamarasPage, SearchPage, CocinasPage, ServicioPage } from '../pages';

export const ArticlesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="cocina" element={<CocinasPage />} />
                <Route path="recamaras" element={<RecamarasPage />} />
                <Route path="servicio" element={<ServicioPage />} />
                <Route path="salas" element={<SalasPage />} />
                
                <Route path="search" element={<SearchPage />} />
                <Route path="article/:id" element={<ArticlePage />} />
                                

                <Route path="/" element={<Navigate to="/recamaras" />} />

            </Routes>
        </div>


    </>
  )
}
