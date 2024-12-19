import React from 'react';
import filtros from './filtros.json'; // Importa o arquivo JSON com as opções de filtro
import styles from './Filtros.module.scss'; // Importa os estilos para o componente Filtros
import classNames from 'classnames'; // Importa a função para manipulação condicional de classes CSS

// Define o tipo de cada opção no filtro, com base no formato dos dados em 'filtros.json'
type IOpcao = typeof filtros[0];

interface Props {
  filtro: number | null; // Estado que guarda o filtro atual (pode ser um número ou null se não houver filtro)
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>; // Função para atualizar o estado do filtro
}

export default function Filtros({ filtro, setFiltro }: Props) {

  // Função para selecionar ou desmarcar o filtro
  // Se o filtro já está selecionado, ele será desmarcado ao clicar novamente
  function selecionarFiltro(opcao: IOpcao) {
    if (filtro === opcao.id) return setFiltro(null); // Se o filtro atual for o mesmo, remove o filtro
    return setFiltro(opcao.id); // Caso contrário, define o filtro como o id da opção
  }

  return (
    <div className={styles.filtros}> {/* Contêiner dos filtros */}
      {/* Mapeia as opções de filtro e cria um botão para cada uma */}
      {filtros.map(opcao => (
        <button 
          className={classNames({
            [styles.filtros__filtro]: true, // Aplica a classe básica de filtro
            [styles['filtros__filtro--ativo']]: filtro === opcao.id // Aplica a classe 'ativo' se o filtro atual for igual ao id da opção
          })} 
          key={opcao.id} // A chave única de cada botão é o id da opção
          onClick={() => selecionarFiltro(opcao)} // Chama a função de seleção do filtro ao clicar no botão
        >
          {opcao.label} {/* Exibe o nome da opção de filtro */}
        </button>
      ))}
    </div>
  );
}
