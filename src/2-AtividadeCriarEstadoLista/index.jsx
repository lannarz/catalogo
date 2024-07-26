// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import {useState} from "react";

export default function Home() {

 const [listaProdutos, setProdutos] = useState([
  {id: 1, nome: 'Quem é você, Alasca?', preco: 'R$47,90'},
  {id: 2, nome: 'O Príncipe Cruel', preco: 'R$44,90'},
  {id: 3, nome: 'Daisy Jones & the Six', preco: 'R$23,99'}
 ]);

 return (
  <div>
      <h1>Encanto Livraria</h1>
  </div>
 );

}

