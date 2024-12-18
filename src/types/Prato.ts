// Importa o arquivo JSON chamado "cardapio" da pasta "data".
// Este arquivo contém os dados do cardápio, geralmente um array de objetos representando pratos.
import cardapio from 'data/cardapio.json';

// Define um tipo "Cardapio" com base na estrutura do JSON importado.
// O tipo "Cardapio" será o mesmo que o tipo inferido automaticamente pelo TypeScript para "cardapio".
export type Cardapio = typeof cardapio;

// Define um tipo "Prato" com base no primeiro elemento do array "cardapio".
// Isso assume que todos os itens do cardápio têm a mesma estrutura.
// Útil para representar um prato individual dentro do cardápio.
export type Prato = typeof cardapio[0];
