import classNames from 'classnames'; // Importa a biblioteca classNames para manipulação dinâmica de classes CSS
import styles from './TagsPrato.module.scss'; // Importa os estilos do componente TagsPrato em formato SCSS
import { Prato } from 'types/Prato'; // Importa o tipo 'Prato' para garantir que as propriedades passem a validação

// O componente TagsPrato recebe um objeto do tipo 'Prato' e exibe as informações associadas ao prato
export default function TagsPrato({ 
  category,  // Categoria do prato
  size,      // Tamanho do prato (em gramas)
  serving,   // Quantidade de pessoas que servem
  price      // Preço do prato
}: Prato) {
  return (
    <div className={styles.tags}> {/* Container principal com a classe 'tags' */}
      {/* Exibe a categoria do prato, com a classe dinâmica baseada na categoria */}
      <div className={classNames({
        [styles.tags__tipo]: true, // Aplica a classe 'tags__tipo' para estilo comum
        [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true // Aplica uma classe específica para cada categoria (ex: 'tags__tipo__vegano')
      })}>
        {category.label} {/* Exibe o nome da categoria do prato */}
      </div>
      
      {/* Exibe o tamanho do prato em gramas (ex: 200g) */}
      <div className={styles.tags__porcao}>
        {size}g
      </div>
      
      {/* Exibe a quantidade de pessoas que o prato serve. Se for '1', o plural é removido */}
      <div className={styles.__qtdpessoas}>
        {serving} 2 pessoas{serving === 1 ? '' : 's'}
      </div>
      
      {/* Exibe o preço do prato formatado para 2 casas decimais */}
      <div className={styles.tags__valor}>
        R$ {price.toFixed(2)} {/* Mostra o preço com 2 casas decimais */}
      </div>
    </div>
  );
}
