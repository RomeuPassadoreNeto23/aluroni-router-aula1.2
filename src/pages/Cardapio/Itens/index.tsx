import cardapio from 'data/cardapio.json'; // Importa o cardápio de um arquivo JSON contendo os itens
import Item from './Item'; // Importa o componente Item que renderiza um único prato do cardápio
import styles from './Itens.module.scss'; // Importa os estilos específicos para a exibição dos itens
import { useState, useEffect } from 'react'; // Importa hooks do React para gerenciar o estado e efeitos colaterais
import { Cardapio } from 'types/Prato'; // Importa o tipo Cardapio para tipar os itens do cardápio

// Definição das propriedades que o componente Itens recebe
interface Props {
  busca: string, // Termo de busca fornecido pelo usuário
  filtro: number | null, // Filtro selecionado (categoria do prato) ou null se nenhum filtro
  ordenador: string // Critério de ordenação selecionado (por porção, qtd pessoas, preço)
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio); // Estado local que armazenará os itens filtrados e ordenados
  const { busca, filtro, ordenador } = props; // Desestruturação das propriedades recebidas pelo componente

  // Função que testa se o título do prato corresponde ao termo de busca
  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i'); // Cria uma expressão regular para busca case-insensitive
    return regex.test(title); // Retorna true se o título corresponder à busca
  }

  // Função que testa se o prato corresponde ao filtro de categoria
  function testaFiltro(id: number) {
    if(filtro !== null) return filtro === id; // Se um filtro estiver selecionado, retorna true se o id da categoria for igual
    return true; // Se nenhum filtro estiver selecionado, todos os itens passam
  }

  // Função que ordena a lista com base no critério selecionado
  function ordenar(novaLista: Cardapio) {
    switch(ordenador) {
      case 'porcao': // Ordena por tamanho da porção
        return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
      case 'qtd_pessoas': // Ordena por quantidade de pessoas
        return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
      case 'preco': // Ordena por preço
        return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
      default: // Se nenhum critério for especificado, retorna a lista sem ordenar
        return novaLista; 
    }
  }

  // useEffect que dispara sempre que o termo de busca, filtro ou ordenador mudam
  useEffect(() => {
    // Filtra o cardápio com base no título (busca) e categoria (filtro)
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    // Ordena a lista filtrada e atualiza o estado com a nova lista
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]); // O efeito depende de 'busca', 'filtro' e 'ordenador'

  return (
    <div className={styles.itens}> 
      {/* Mapeia a lista de pratos e para cada item, renderiza o componente Item */}
      {lista.map(item => (
        <Item key={item.id} {...item} /> // Para cada item, passa suas propriedades como props para o componente Item
      ))}
    </div>
  );
}
