import React from 'react'; // Importa o React, necessário para a criação de componentes React
import styles from './Buscador.module.scss'; // Importa o arquivo de estilos para o componente
import { CgSearch } from 'react-icons/cg'; // Importa o ícone de busca da biblioteca react-icons

// Define a interface para as props do componente
interface Props {
  busca: string; // O valor atual da busca (string)
  setBusca: React.Dispatch<React.SetStateAction<string>>; // Função para atualizar o valor da busca
}

export default function Buscador({ busca, setBusca }: Props) {
  return (
    <div className={styles.buscador}> {/* Container principal do buscador, estilizado pelo arquivo SCSS */}
      <input
        value={busca} // O valor do input é controlado pelo estado 'busca'
        onChange={(evento) => setBusca(evento.target.value)} // Atualiza o estado 'busca' sempre que o usuário digitar no campo
        placeholder="Buscar" // Texto de placeholder que aparece quando o campo está vazio
      />
      <CgSearch size={20} color="#4C4D5E" /> {/* Ícone de busca ao lado do campo de input */}
    </div>
  );
}
