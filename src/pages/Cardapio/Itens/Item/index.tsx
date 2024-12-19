import styles from './Item.module.scss'; // Importa os estilos específicos do componente "Item"
import TagsPrato from 'components/TagsParaPrato'; // Importa o componente que exibe as tags para o prato
import { useNavigate } from 'react-router-dom'; // Importa o hook para navegação entre páginas
import { Prato } from 'types/Prato'; // Importa o tipo "Prato" para tipagem das propriedades

// Componente funcional "Item", que recebe as propriedades de um prato (Prato)
export default function Item(props: Prato) {
  const { id, title, description, photo } = props; // Desestrutura as propriedades do prato
  const navigate = useNavigate(); // Inicializa o hook de navegação
  
  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}> 
      {/* O componente "item" é um contêiner que, quando clicado, navega para a página de detalhes do prato */}
      
      <div className={styles.item__imagem}>
        {/* Exibe a imagem do prato */}
        <img src={photo} alt={title} />
      </div>
      
      <div className={styles.item__descricao}>
        {/* Contêiner para a descrição do prato */}
        <div className={styles.item__titulo}>
          {/* Título e descrição do prato */}
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        
        {/* Componente TagsPrato exibe as tags associadas ao prato */}
        <TagsPrato {...props} />
      </div>
    </div>
  );
}
