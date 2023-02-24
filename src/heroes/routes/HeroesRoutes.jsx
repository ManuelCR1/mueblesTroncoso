import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { SalasPage, ArticlePage, RecamarasPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="recamaras" element={<RecamarasPage />} />
                <Route path="salas" element={<SalasPage />} />
                
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<ArticlePage />} />
                                

                <Route path="/" element={<Navigate to="/recamaras" />} />

            </Routes>
        </div>


    </>
  )
}
