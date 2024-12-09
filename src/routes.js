import Menu from 'components/Menu';
import PaginaPadrao from './components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                {/* Menu sempre aparece */}
                <Menu />
                <Routes>
                    {/* Rota pai com PaginaPadrao */}
                    <Route path="/" element={<PaginaPadrao />}>
                        {/* Rota inicial como filha */}
                        <Route index element={<Inicio />} />
                        {/* Rota para o cardápio também dentro do layout */}
                        <Route path="cardapio" element={<Cardapio />} />
                        {/* Rota para sobre também dentro do layout */}
                        <Route path="sobre" element={<Sobre />} />
                    </Route>
                    <Route path='prato/:id' element={<Prato />} />
                    {/* Rota para Página não Emcontrado também dentro do layout */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}
