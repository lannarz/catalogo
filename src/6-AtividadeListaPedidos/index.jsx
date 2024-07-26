// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

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