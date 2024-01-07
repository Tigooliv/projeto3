

import React, { useState } from "react";
import "./Stilo.css";
import "./GlobalStilo.css";
import "./Banner.css";



function App() {
  const [jogadores] = useState([
    'Tiago', 'Ricardo', 'Darlan', 'Rone', 'Cachorrão','Tales', 
    'Wallace', 'Biriba', 'Gerson', 'Robison','ygor',
    'Bruno', 'Andinho', 'leo','Luiz',
    'Marcelo', 'João', 'Gabriel', 'Mateus', 'Lobinho','Deivi',
    'Alex', 'Alesandro', 'Diego', 'Carlinhos', 'Bebe','Theo'
  ]);

  const [equipes, setEquipes] = useState({
    Juventus: ['zeca'],
    ' proximo': [],
    Milan: [],
    PSG: [],
    Barcelona: ['china'],
  });

  const distribuirJogadores = () => {
    if (jogadores.length >= 25) {
      const jogadoresEmbaralhados = [...jogadores].sort(() => Math.random() - 0.5);

      const novasEquipes = {
        Juventus: ['zeca'],
        'proximo': ['zeca','china','bahia',],
        Milan: [ ],
        PSG: [],
        Barcelona: ['china'],
      };

      jogadoresEmbaralhados.slice(0, 20).forEach((jogador, index) => {
        const nomeEquipe = Object.keys(novasEquipes)[index % 5];
        novasEquipes[nomeEquipe].push(jogador);
      });

      setEquipes(novasEquipes);
    } else {
      console.log("Adicione pelo menos 25 jogadores antes de sortear as equipes.");
    }
  };

  return (
    <div className="div">
      <section>
        <header>
          <img className="banner" src="./imagens/futebol.jpg" alt="Banner de futebol" />
          <button className="click" onClick={distribuirJogadores}>
            Sortear equipes
          </button>
        </header>
      </section>

      <div className="times">
        {Object.keys(equipes).map((nomeEquipe, index) => (
          <div className="time" key={index}>
            <h2>{nomeEquipe}</h2>
            <ul>
              {equipes[nomeEquipe].map((jogador, jogadorIndex) => (
                <li key={jogadorIndex}>{jogador}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;