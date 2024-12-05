import Cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export default function Inicio() {
    const navigate = useNavigate();
    let pratosRecomendados = [...Cardapio];
    function redirecionarParaDetalhes(prato: typeof Cardapio[0]) {
        navigate(`/prato/${prato.id}`, { state: { prato } });
    };

    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);

    return (
        <section>
            <h3 className={stylesTema.titulo}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recomenddos}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button
                            className={styles.recomendado__botao}
                            onClick={() => redirecionarParaDetalhes(item)}>
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTema.titulo}> NOSSA CASA </h3>
            <div className={styles.nossaCasa}>
                <img src={nossaCasa} alt="Casa do Aluroni" />
                <div className={styles.nossaCasa__endereco}>
                    Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                </div>
            </div>

        </section>
    );
}
