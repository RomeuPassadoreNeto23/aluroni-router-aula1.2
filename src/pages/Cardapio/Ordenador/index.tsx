// Importa os módulos e dependências necessárias
import styles from './Ordenador.module.scss'; // Importa os estilos do componente
import opcoes from './opcoes.json'; // Importa as opções de ordenação a partir de um arquivo JSON
import React, { useState } from 'react'; // Importa React e useState para gerenciamento de estado
import classNames from 'classnames'; // Biblioteca para adicionar classes condicionalmente
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'; // Ícones para a seta para cima e para baixo

// Definição do tipo das propriedades que o componente recebe
interface Props { 
  ordenador: string, // Estado que guarda o valor da ordenação atual
  setOrdenador: React.Dispatch<React.SetStateAction<string>> // Função para atualizar o valor de ordenação
}

// Função do componente Ordenador
export default function Ordenador({
  ordenador,
  setOrdenador
}: Props) {
  // Estado para controlar se o menu de opções está aberto ou fechado
  const [aberto, setAberto] = useState(false);

  // Busca o nome da opção de ordenação que está ativa, se houver
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

  return (
    // Botão principal que abre e fecha o menu de opções de ordenação
    <button
      className={classNames({
        [styles.ordenador]: true, // Aplica a classe base do botão
        [styles['ordenador--ativo']]: ordenador !== '' // Aplica a classe "ativo" se houver uma ordenação selecionada
      })}
      onClick={() => setAberto(!aberto)} // Alterna o estado 'aberto' para abrir/fechar o menu
      onBlur={() => setAberto(false)} // Fecha o menu quando o foco sai do botão
    >
      {/* Exibe o nome da ordenação ou 'Ordenar Por' caso não haja uma opção selecionada */}
      <span>{nomeOrdenador || 'Ordenar Por'}</span>

      {/* Ícone que alterna entre seta para cima e seta para baixo dependendo do estado 'aberto' */}
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }

      {/* Menu suspenso de opções de ordenação */}
      <div className={classNames({
        [styles.ordenador__options]: true, // Classe base para o menu de opções
        [styles['ordenador__options--ativo']]: aberto // Aplica a classe "ativo" se o menu estiver aberto
      })}>
        {/* Mapeia as opções de ordenação para exibi-las como itens clicáveis */}
        {opcoes.map(opcao => (
          <div className={styles.ordenador__option} key={opcao.value} onClick={() => setOrdenador(opcao.value)}>
            {opcao.nome} {/* Exibe o nome da opção */}
          </div>
        ))}
      </div>
    </button>
  );
}
