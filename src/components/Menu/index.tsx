import { ReactComponent as Logo } from 'assets/logo.svg'; // Importa o arquivo SVG como um componente React. O logo será usado no menu.
import styles from './Menu.module.scss'; // Importa os estilos para o componente Menu em formato SCSS.
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router para navegação entre páginas.

export default function Menu() {
    // Define um array de rotas com os links do menu e seus destinos.
    const rotas = [{
        label: 'Início', // Rótulo do link 'Início'
        to: '/'         // Caminho de navegação para a página inicial
    }, {
        label: 'Cardápio', // Rótulo do link 'Cardápio'
        to: '/cardapio'    // Caminho de navegação para a página de cardápio
    }, {
        label: 'Sobre', // Rótulo do link 'Sobre'
        to: '/sobre'    // Caminho de navegação para a página 'Sobre'
    }];
    
    return (
        <nav className={styles.menu}> {/* Cria um elemento <nav> que funciona como o container para o menu */}
            <Logo /> {/* Exibe o logo importado do arquivo SVG */}
            <ul className={styles.menu__list}> {/* Lista não ordenada (ul) que conterá os itens de navegação */}
                {rotas.map((rota, index) => ( // Mapeia o array 'rotas' para gerar um item de lista (li) para cada rota
                    <li key={index} className={styles.menu__link}> {/* Cada item da lista tem uma chave única e uma classe CSS para estilo */}
                        <Link to={rota.to}>{rota.label}</Link> {/* Link que redireciona para a rota indicada, com o texto da rota */}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
