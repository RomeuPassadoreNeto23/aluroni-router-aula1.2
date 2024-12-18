import Menu from 'components/Menu'; // Importa o componente de Menu que será exibido no topo da página
import PaginaPadrao from './components/PaginaPadrao'; // Componente que serve como layout padrão para algumas páginas
import Cardapio from 'pages/Cardapio'; // Importa a página do cardápio
import Inicio from 'pages/Inicio'; // Importa a página inicial
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa componentes necessários para configurar o roteamento
import Sobre from 'pages/Sobre'; // Importa a página "Sobre"
import Footer from 'components/Footer'; // Importa o rodapé da aplicação
import NotFound from 'pages/NotFound'; // Importa a página exibida para rotas não encontradas
import Prato from 'pages/Prato'; // Importa a página de detalhes de um prato

export default function AppRouter() {
    return (
        <main className='container'>
            {/* Envolve o sistema de rotas com o Router */}
            <Router>
                {/* O Menu é exibido em todas as páginas */}
                <Menu />
                <Routes>
                    {/* Define uma rota pai que utiliza o layout padrão */}
                    <Route path="/" element={<PaginaPadrao />}>
                        {/* Rota inicial (home) que usa o layout padrão */}
                        <Route index element={<Inicio />} />
                        {/* Rota para o cardápio, também usando o layout padrão */}
                        <Route path="cardapio" element={<Cardapio />} />
                        {/* Rota para a página "Sobre", dentro do layout padrão */}
                        <Route path="sobre" element={<Sobre />} />
                    </Route>
                    {/* Rota para a página de detalhes de um prato, com um parâmetro dinâmico "id" */}
                    <Route path="prato/:id" element={<Prato />} />
                    {/* Rota para páginas não encontradas. Exibida para URLs inválidas */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {/* O Footer também é exibido em todas as páginas */}
                <Footer />
            </Router>
        </main>
    );
}
