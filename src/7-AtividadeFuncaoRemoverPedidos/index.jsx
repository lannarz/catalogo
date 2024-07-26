// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

import {useState} from "react";

export default function Home() {

 const [listaProdutos, setProdutos] = useState([
  {id: 1, nome: 'Quem é você, Alasca?', preco: 'R$47,90'},
  {id: 2, nome: 'O Príncipe Cruel', preco: 'R$44,90'},
  {id: 3, nome: 'Daisy Jones & the Six', preco: 'R$23,99'}
 ]);

 const [listaPedidos, setListaPedidos] = useState([]);

 const adicionarItemPedidos = (objeto) => {
       setListaPedidos([...listaPedidos, objeto])
 }

 const removerItensPedidos = (id) => {
  let remover = false;
  let listaAux = listaPedidos.filter((produto) => {
    if(remover == false) {
      if(produto.id !== id) {
        return produto
      } else{
         remover = true;
         return null
      }
    } else {
      return produto
    }
  });
  setListaPedidos(listaAux);
 }

 return (
  <div>
      <h1>Encanto Livraria</h1>

      {
        listaProdutos.map((produto) =>
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
            <button onClick={() => adicionarItemPedidos(produto)}>Comprar</button>
          </div>  
        )
      }
      {
        listaPedidos.map((produto) =>
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
          </div>
        )
      }

  </div>
 );

}