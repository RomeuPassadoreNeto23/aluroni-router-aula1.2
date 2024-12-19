import Cardapio from 'data/cardapio.json'; // Importa os dados do cardápio a partir de um arquivo JSON
import styles from './Inicio.module.scss'; // Importa os estilos específicos para o componente "Inicio"
import stylesTema from 'styles/Tema.module.scss'; // Importa estilos globais ou compartilhados
import nossaCasa from 'assets/nossa_casa.png'; // Importa uma imagem da seção "Nossa Casa"
import { useNavigate } from 'react-router-dom'; // Hook para navegação no React Router
import { Prato } from 'types/Prato'; // Importa o tipo "Prato" para tipagem estática do TypeScript

export default function Inicio() {
    const navigate = useNavigate(); // Hook para realizar navegações programáticas dentro do app

    // Inicializa os pratos recomendados com todos os itens do cardápio
    let pratosRecomendados = [...Cardapio];

    // Função que redireciona o usuário para a página de detalhes de um prato
    function redirecionarParaDetalhes(prato: Prato) {
        navigate(`/prato/${prato.id}`, { state: { prato } }); // Navega para a rota do prato e passa o prato como estado
    };

    // Seleciona 3 pratos aleatórios do cardápio
    pratosRecomendados = pratosRecomendados
        .sort(() => 0.5 - Math.random()) // Embaralha os itens aleatoriamente
        .splice(0, 3); // Seleciona os primeiros 3 itens

    return (
        <section>
            {/* Título da seção de recomendações */}
            <h3 className={stylesTema.titulo}>
                Recomendações da cozinha
            </h3>

            {/* Contêiner para os pratos recomendados */}
            <div className={styles.recomenddos}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        {/* Imagem do prato recomendado */}
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>

                        {/* Botão para ver mais detalhes do prato */}
                        <button
                            className={styles.recomendado__botao}
                            onClick={() => redirecionarParaDetalhes(item)}>
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>

            {/* Título da seção "Nossa Casa" */}
            <h3 className={stylesTema.titulo}> NOSSA CASA </h3>

            {/* Contêiner da seção "Nossa Casa" */}
            <div className={styles.nossaCasa}>
                {/* Imagem da fachada da casa */}
                <img src={nossaCasa} alt="Casa do Aluroni" />

                {/* Endereço da casa */}
                <div className={styles.nossaCasa__endereco}>
                    Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
}
