import Menu from 'components/Menu';
import PaginaPadrao from './components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from 'pages/Sobre';

export default function AppRouter() {
    return (
        <main>
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
                </Routes>
            </Router>
        </main>
    );
}
