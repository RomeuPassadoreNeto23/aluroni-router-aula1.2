import styles from './Footer.module.scss'; // Importa os estilos específicos para o componente Footer em formato SCSS
import { ReactComponent as Logo } from 'assets/logo.svg'; // Importa o logo como componente React

// Componente Footer que renderiza o rodapé da página
export default function Footer() {
    return (
        <footer className={styles.footer}> {/* Elemento <footer> que serve como o rodapé da página */}
            <Logo /> {/* Renderiza o logo como um componente SVG */}
        </footer>
    );
}
