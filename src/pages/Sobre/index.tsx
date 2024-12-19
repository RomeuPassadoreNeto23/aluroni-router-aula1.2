// Importa os estilos específicos do componente "Sobre" do arquivo SCSS
import styles from './Sobre.module.scss';

// Importa estilos globais ou compartilhados do tema
import styleTema from 'styles/Tema.module.scss';

// Importa imagens usadas no componente
import casa from 'assets/sobre/casa.png'; // Imagem principal da casa
import massa1 from 'assets/sobre/massa1.png'; // Primeira imagem de massa
import massa2 from 'assets/sobre/massa2.png'; // Segunda imagem de massa

// Array que contém as imagens de massas, facilitando iterações ou manipulações
const imagens = [massa1, massa2];

// Define o componente "Sobre"
export default function Sobre() {
    return (
        <section>
            {/* Título da seção usando a classe de estilo compartilhada */}
            <h3 className={styleTema.titulo}> Sobre </h3>

            {/* Bloco principal com informações "Sobre Nós" */}
            <div className={styles.sobreNos}>
                {/* Imagem da casa Aluroni */}
                <img src={casa} alt="Casa aluroni" />

                {/* Bloco de texto explicativo */}
                <div className={styles.sobreNos__texto}>
                    <p>
                        Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
                    </p>
                    <p>
                        Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
                    </p>
                    <p>
                        Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu prato, seja carne ou massa!
                    </p>
                </div>
            </div>

            {/* Galeria de imagens de massas */}
            <div className={styles.imagens}>
                {imagens.map((imagem, index) => (
                    <div key={index} className={styles.imagens__imagem}>
                        {/* Exibe cada imagem com um layout específico */}
                        <img src={imagem} alt="imagem de massa" />
                    </div>
                ))}
            </div>
        </section>
    );
}
