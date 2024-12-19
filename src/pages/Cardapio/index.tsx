import styles from './Cardapio.module.scss'; // Importa os estilos específicos para o componente "Cardapio"
import Buscador from './Buscador'; // Componente de busca, que permite ao usuário filtrar itens pelo nome ou outros critérios
import { useState } from 'react'; // Importa o hook useState para gerenciar estados locais dentro do componente
import Filtros from './Filtros'; // Componente que permite filtrar itens do cardápio por categoria ou tipo
import Ordenador from './Ordenador'; // Componente que define a ordem dos itens (ex.: por preço, nome, etc.)
import Itens from './Itens'; // Componente responsável por renderizar a lista de itens do cardápio
import stylesTema from 'styles/Tema.module.scss'; // Estilos globais ou compartilhados para manter a consistência visual

export default function Cardapio() {
  // Estado para controlar o texto digitado pelo usuário no buscador
  const [busca, setBusca] = useState('');

  // Estado para armazenar a categoria ou filtro selecionado pelo usuário
  // Pode ser um número (representando o ID da categoria) ou null (nenhum filtro aplicado)
  const [filtro, setFiltro] = useState<number | null>(null);

  // Estado para armazenar a opção de ordenação selecionada (ex.: crescente ou decrescente por um critério)
  const [ordenador, setOrdenador] = useState('');

  return (
    <section className={styles.cardapio}>
      {/* Título da página com estilização global aplicada */}
      <h3 className={stylesTema.titulo}>Cardápio</h3>

      {/* Componente de busca */}
      {/* Permite ao usuário buscar itens pelo nome */}
      <Buscador busca={busca} setBusca={setBusca} />

      {/* Área que contém filtros e opções de ordenação */}
      <div className={styles.cardapio__filtros}>
        {/* Componente de filtros */}
        {/* Oferece opções de categorias ou tipos de pratos para filtrar os itens */}
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        
        {/* Componente de ordenação */}
        {/* Define como os itens serão organizados (ex.: ordem alfabética ou preço) */}
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>

      {/* Componente que exibe os itens do cardápio */}
      {/* Recebe os estados de busca, filtro e ordenação para determinar os itens visíveis */}
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}
