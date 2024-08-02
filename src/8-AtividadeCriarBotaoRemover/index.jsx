// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".


import {useState} from "react";

import  Header from "./components/Header";
import  Footer from "./components/Footer";


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

  <Header title ={"Livros disponíveis"}/>

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
            <button onClick={() => removerItensPedidos(produto.id)}>Remover</button>
          </div>
        )
      }

<Footer desenvolvedor ={"Lanna Rizzo"}/>

  </div>
 );

}