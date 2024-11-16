import Menu from 'components/Menu';
import PaginaPadrao from './components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Route, Routes ,useOutlet } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaPadrao />} />
                    <Route  element={<Inicio />} />
                    <Route path='cardapio' element={<Cardapio />} />
                </Routes>
            </Router>
        </main>
    );

}