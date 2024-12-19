import styles from './NotFound.module.scss'; // Importa os estilos específicos do componente "NotFound"
import { ReactComponent as NotFoundImg } from 'assets/not_found.svg'; // Importa uma imagem SVG como componente React
import classNames from 'classnames'; // Biblioteca para combinar classes de maneira dinâmica
import stylesTema from 'styles/Tema.module.scss'; // Importa estilos globais ou compartilhados
import { useNavigate } from 'react-router-dom'; // Hook para navegação programática no React Router

export default function NotFound() {
    const navigate = useNavigate(); // Cria uma função para manipular navegação entre páginas

    return (
        <div
            className={classNames({
                [styles.container]: true, // Adiciona a classe "container" do arquivo específico "NotFound.module.scss"
                [stylesTema.container]: true // Adiciona a classe "container" compartilhada do tema global
            })}
        >
            {/* Botão para voltar à página anterior */}
            <div className={styles.voltar}>
                <button onClick={() => navigate(-1)}>
                    {'< Voltar'} {/* Texto do botão "Voltar" */}
                </button>
            </div>

            {/* Exibe a imagem SVG importada */}
            <NotFoundImg />
        </div>
    );
}
