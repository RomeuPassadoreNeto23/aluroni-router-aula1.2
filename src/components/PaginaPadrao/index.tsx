import { Outlet } from 'react-router-dom'; // Importa o componente Outlet do React Router para renderizar as rotas aninhadas
import styles from './PaginaPadrao.module.scss'; // Importa o arquivo de estilos específicos para a página padrão
import stylesTema from 'styles/Tema.module.scss'; // Importa os estilos gerais ou de tema para a aplicação

export default function PaginaPadrao() {
    return (
        <>
            {/* Cabeçalho da página */}
            <header className={styles.header}> 
                {/* Texto do cabeçalho, com a classe definida em 'PaginaPadrao.module.scss' */}
                <div className={styles.header__text}>
                    A casa do código e da massa {/* Texto centralizado no cabeçalho */}
                </div>
            </header>

            {/* Container principal que envolve o conteúdo da página */}
            <div className={stylesTema.container}>
                {/* Componente Outlet do React Router para renderizar as rotas aninhadas */}
                {/* Ele vai exibir o conteúdo correspondente à rota filha da rota 'PaginaPadrao' */}
                <Outlet />
            </div>
        </>
    );
}
