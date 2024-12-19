// Importa os estilos específicos do componente "Prato" usando CSS Modules
import styles from './Prato.module.scss';

// Importa hooks e componentes do React Router DOM
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';

// Importa o cardápio (dados estáticos em formato JSON)
import cardapio from 'data/cardapio.json';

// Importa o componente que exibe as tags associadas a um prato
import TagsPrato from 'components/TagsParaPrato';

// Importa a página de erro "NotFound" para casos de prato inexistente
import NotFound from 'pages/NotFound';

// Importa o layout padrão para a página
import PaginaPadrao from 'components/PaginaPadrao';

export default function Prato() {
    // Extrai o parâmetro dinâmico "id" da URL
    const { id } = useParams();

    // Hook para navegação programática
    const navigate = useNavigate();

    // Procura pelo prato correspondente no cardápio usando o ID
    const prato = cardapio.find(item => item.id === Number(id));

    // Verifica se o prato existe. Caso contrário, exibe a página "NotFound"
    if (!prato) {
        return <NotFound />;
    }

    return (
        <Routes>
            {/* Define que o layout padrão será usado para rotas não específicas */}
            <Route path="*" element={<PaginaPadrao />} />

            {/* Renderiza o conteúdo principal do prato */}
            <Route index element={
                <>
                    {/* Botão para voltar à página anterior */}
                    <button className={styles.voltar} onClick={() => navigate(-1)}>
                        {'< Voltar'}
                    </button>

                    {/* Seção principal exibindo os detalhes do prato */}
                    <section className={styles.container}>
                        {/* Título do prato */}
                        <h1 className={styles.titulo}>
                            {prato.title}
                        </h1>

                        {/* Imagem do prato */}
                        <div className={styles.imagem}>
                            <img src={prato.photo} alt={prato.title} />
                        </div>

                        {/* Descrição e tags do prato */}
                        <div className={styles.conteudo}>
                            {/* Descrição do prato */}
                            <p className={styles.conteudo__descricao}>
                                {prato.description}
                            </p>

                            {/* Componente para exibir as tags do prato */}
                            <TagsPrato {...prato} />
                        </div>
                    </section>
                </>
            } />
        </Routes>
    );
}
