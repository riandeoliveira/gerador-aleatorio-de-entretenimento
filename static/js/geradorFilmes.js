const geraFilme = () => {
    const main = document.querySelector("main#conteudoPrincipal");
    const resposta = confirm("Você deseja GERAR um filme aleatório?");
    
    // Filmes: 37/200

    const filmes = [
        // "12 Anos de Escravidão (2014)",
        "500 Dias com Ela (2009)",
        // "1492 - A Conquista do Paraíso (1992)",
        // "1917 (2019)",
        "2001 - Uma Odisseia no Espaço (1968)",
        "2010 - O Ano Em Que Faremos Contato (1984)",
        // "2019 - O Ano da Extinção (2010)",
        "A Autópsia (2017)",
        "A Cabana (2017)",
        "A Casa do Lago (2006)",
        // "A Chave Mágica (1995)",
        // "A Cinco Passos de Você (2019)",
        "A Garota no Trem (2016)",
        "A Garota que Conquistou o Tempo (2016)",
        "A Grande Ilusão (2006)",
        "A Lagoa Azul (1980)",
        "A Máquina do Tempo (2002)",
        // "A Menina que Roubava Livros (2013)",
        // "A Nação do Medo (1994)",
        // "A Noite é Delas (2017)",
        "A Outra Terra (2011)",
        "A Possessão de Deborah Logan (2014)",
        "A Queda! As Últimas Horas de Hitler (2004)",
        "A Senha - Swordfish (2001)",
        "A Serbian Film - Terror sem Limites (2010)",
        "A Teoria do Caos (2008)",
        // "A Vastidão da Noite (2019)",
        "A Viagem de Chihiro (2003)",
        // "A Vida é Bela (1997)",
        "A Vila (2004)",
        "A Voz do Silêncio - Koe no Katachi (2016)",
        "Ace Ventura - Um Detetive Diferente (1994)",
        "Ad Astra - Rumo às Estrelas (2019)",
        "Adeus, Lenin! (2003)",
        "Akira (1991)",
        "Altered Carbon - Nova Capa (2020)",
        "Amor Sem Escalas (2009)",
        "Apocalypto (2006)",
        "As Aventuras de Peabody & Sherman (2014)",
        "As Férias de Mr. Bean (2007)",
        "Assalto em Dose Dupla (2011)",
        "Asterix e Obelix - Live-actions (1999)",
        "Astro Boy (2009)",
        "Bakemono no Ko (2015)",
        "Beetlejuice - Os Fantasmas Se Divertem (1988)",
        "Blame! (2017)",
        "Bolt - Super Cão (2008)",
        // "Brilho Eterno de uma Mente sem Lembranças (2004)",
        "Christine, O Carro Assassino (1983)",
        "Cidadão Kane (1941)",
        "Cidade de Deus (2002)",
        // "Cinco Centímetros por Segundo (2007)",
        // "Clube da Luta (1999)",
        "Coherence (2014)",
        "Construindo uma Carreira (1991)",
        "Coringa (2019)",
        "Curtindo a Vida Adoidado (1986)",
        "Da Colina Kokuriko (2011)",
        "De Olhos Bem Fechados (1999)",
        "De Repente Uma Família (2018)",
        "Deu a Louca em Hollywood (2007)",
        "Deu a Louca na Branca de Neve (2008)",
        "Deu a Louca na Chapéuzinho Vermelho (2005)",
        "Deu a Louca na Cinderela (2006)",
        "Dogão - Amigo pra Cachorro (2006)",
        "Doonie Darko (2001)",
        "Drive (2011)",
        "Duologia Baahubali (2015)",
        "Duologia Espelhos do Medo (2008)",
        "Duologia Gente Grande (2010)",
        "Duologia Kill Bill (2003)",
        "Duologia O Cão e a Raposa (1981)",
        "Duologia Tron (1982)",
        "Duologia Tropa de Elite (2007)",
        "Duologia Truque de Mestre (2013)",
        "Duologia Um Lugar Silencioso (2018)",
        "Durante a Tormenta (2018)",
        "Efeito Borboleta (2004)",
        "Ela (2013)",
        "Ela é Demais (1999)",
        "Elysium (2014)",
        "Em Algum Lugar do Passado (1980)",
        "Em Busca das Estrelas (2011)",
        // "Encantada (2007)",
        "Era Uma Vez no Oeste (1968)",
        "Feitiço do Tempo (1993)",
        // "Filhos da Esperança (2006)",
        // "Fogo no Céu (1993)",
        "Footloose - Ritmo Louco (1984)",
        "Galáxia do Terror (1981)",
        "Gantz - O (2016)",
        "Garfield - O Filme (2004)",
        "Garfield 2 (2006)",
        "Garota Exemplar (2014)",
        "Garota Infernal (2009)",
        "Gênio Indomável (1997)",
        "Glória Feita de Sangue (1957)",
        "Hora do Recreio - O Filme (2001)",
        "Jogos de Guerra (1983)",
        // "Jojo Rabbit (2019)",
        // "Kung-Fu Futebol Clube (2001)",
        "Kung-Fusão (2004)",
        "Laranja Mecânica (1971)",
        // "Lembranças de Outra Vida (1995)",
        "Loucuras na Idade Média (2001)",
        "Lucas - Um Intruso no Formigueiro (2006)",
        "Mamãe, Virei Um Peixe (2000)",
        "Marte Ataca! (1996)",
        "Mary e Max - Uma Amizade Diferente (2009)",
        "Matilda (1996)",
        "Metrópolis (1927)",
        "Metrópolis (2001)",
        "Meu Amigo Totoro (1988)",
        "Minority Report - A Nova Lei (2002)",
        "Monte Python em Busca do Cálice Sagrado (1975)",
        "Nada de Novo no Front (1930)",
        "O Anticristo (2007)",
        "O Castelo Animado (2004)",
        "O Conde de Monte Cristo (2002)",
        "O Dia Seguinte (1983)",
        // "O Enigma de Kaspar Hauser (1974)",
        "O Enigma do Horizonte (1997)",
        "O Escafandro e a Borboleta (2007)",
        // "O Estado das Coisas (2017)",
        "O Expresso Polar (2004)",
        // "O Fabuloso Destino de Amélie Poulain (2001)",
        "O Fantasma da Ópera (2004)",
        // "O Filho de Deus (2014)",
        "O Físico (2013)",
        "O Gigante de Ferro (1999)",
        "O Incidente (2014)",
        // "O Jogo da Imitação (2014)",
        "O Lobo de Wall Street (2013)",
        "O Lugar Prometido em Nossa Juventude (2004)",
        // "O Novíssimo Testamento (2015)",
        // "O Pianista (2002)",
        // "O Preço do Amanhã (2011)",
        "O Primeiro Homem (2018)",
        "O Quinto Elemento (1997)",
        "O Reino dos Gatos (2002)",
        "O Segredo dos Animais (2006)",
        "O Senhor das Armas (2005)",
        "O Sexto Sentido (1999)",
        "O Som do Trovão (2005)",
        // "O Universo no Olhar (2014)",
        "O VelociPastor (2018)",
        "Os Estagiários (2013)",
        // "Os Oito Odiados (2015)",
        "Os Viajantes do Tempo (2001)",
        "País da Violência (2018)",
        // "Pânico na Neve (2010)",
        "ParaNorman (2012)",
        "Pequenos Guerreiros (1998)",
        "Pequenos Invasores (2009)",
        "Perfect Blue (1997)",
        "Piratas do Vale do Sílicio (1999)",
        // "Planeta 51 (2009)",
        "Pokémon - Detetive Pikachu (2019)",
        "Ponte para Terabítia (2007)",
        "Princesa Mononoke (1997)",
        "Psicopata Americano (2000)",
        "Pulp Fiction - Tempo de Violência (1994)",
        // "Réquiem para um Sonho (2000)",
        "Robôs (2005)",
        "RRRrrrr!!! - Na Idade da Pedra (2004)",
        "Saga Alien (1979)",
        "Saga Blade Runner (1982)",
        "Saga Brinquedo Assassino (1989)",
        "Saga Ghost in the Shell (1995)",
        "Saga Harry Potter (2001)",
        "Saga Jimmy Neutron (2001)",
        "Saga Jogos Mortais (2004)",
        "Saga MIB - Homens de Preto (1997)",
        "Saga O Exterminador do Futuro (1984)",
        "Saga Planeta dos Macacos (1968)",
        "Saga Predador (1987)",
        "Saga Rocky (1976)",
        "Saga Star Wars (1977)",
        "Saga Velozes e Furiosos (2001)",
        "Sangue Negro (2007)",
        "Scooby-Doo! e o Rei dos Duendes (2008)",
        "Singham (2011)",
        "Sonic - O Filme (2020)",
        "Spirit - O Corcel Indomável (2002)",
        // "Sunshine - Alerta Solar (2007)",
        "Tom e Jerry - O Filme (1992)",
        "Tom e Jerry - Rumo a Marte (2005)",
        "Trilogia John Wick (2014)",
        "Trilogia Matrix (1999)",
        "Turma da Mônica em Uma Aventura no Tempo (2007)",
        "Um Dia de Fúria (1993)",
        // "Um Sonho de Liberdade (1994)",
        "Uma Cavaleira em Camelot (1998)",
        // "Uma História de Amor e Fúria (2013)",
        // "Uma Lição de Amor (2001)",
        "Up - Altas Aventuras (2009)",
        "Valerian e a Cidade dos Mil Planetas (2017)",
        "Vanilla Sky (2001)",
        "Vidas ao Vento (2013)",
        "WIFI Ralph - Quebrando a Internet (2018)"
    ];

    if (resposta) {
        let numAleatorio = Math.floor(Math.random() * filmes.length);

        const img = document.createElement("img");
        const h1 = document.createElement("h1");

        const confirmacao = confirm("AVISO DE IMAGENS PISCANDO! Deseja pular direto para o resultado?");
        if (confirmacao) {
            main.innerHTML = "";
            img.src = `../images/filmes/${filmes[numAleatorio]}.jpg`;
            main.appendChild(img);
            main.appendChild(h1);
            h1.className = "estilos";
            h1.textContent = `${filmes[numAleatorio]}`;
            alert("Filme gerado com sucesso! Seu próximo filme é...");
        } else {
            main.innerHTML = "";

            h1.className = "estilos";
            h1.textContent = "Por favor, aguarde enquanto estamos gerando o seu filme 😉";

            let i = 0;
            const intervalo = setInterval(() => {
                img.src = `../images/filmes/${filmes[i]}.jpg`;

                main.appendChild(img);
                main.appendChild(h1);

                i++;
                if (i === numAleatorio) {
                    setTimeout(() => {
                        alert("Filme gerado com sucesso! Seu próximo filme é...");
                    }, 0);
                    h1.textContent = `${filmes[numAleatorio - 1]}`;
                    clearInterval(intervalo);
                }
            }, 250);
        }

    }
}
