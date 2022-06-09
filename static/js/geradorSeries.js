const geraSerie = () => {
    const main = document.querySelector("main#conteudoPrincipal");
    const resposta = confirm("Você deseja GERAR uma série aleatória?");

    // Série: 0/57

    const series = [
        "Agentes da S.H.I.E.L.D. (2013)",
        "Almost Human (2013)",
        "Altered Carbon (2018)",
        "Arcane (2021)",
        "Arquivo X (1993)",
        "Awake (2012)",
        "Battlestar Galactica (2004)",
        "Battlestar Galactica Blood & Chrome (2012)",
        "Brooklyn Nine-Nine (2013)",
        "Caprica (2010)",
        "Chernobyl (2019)",
        "Contos do Loop (2020)",
        "Cyberchase - A Corrida do Espaço (2002)",
        "Dark Net (2016)",
        "Deuses Americanos (2017)",
        "Doctor Who (2005)",
        "Engane-me se Puder (2009)",
        "Fenda no Tempo (1995)",
        "Firefly (2002)",
        "Forever - Uma Vida Eterna (2014)",
        "Futurama (1999)",
        "Halt and Catch Fire (2014)",
        "Hi Hi Puffy AmiYumi (2004)",
        "Homem-Aranha - A Série Animada (1994)",
        "Homem-Aranha (1967)",
        "Kipo e os Animonstros (2020)",
        "Lucifer (2016)",
        "Mr. Robot (2015)",
        "Now and Again (1999)",
        "O Homem do Castelo Alto (2015)",
        "Pandora (2019)",
        "Peaky Blinders (2013)",
        "Power Rangers - RPM (2009)",
        "Power Rangers - SPD (2005)",
        "Power Rangers - Tempestade Ninja (2003)",
        "Scorpion (2014)",
        "Silicon Valley (2014)",
        "South Park",
        "Super Mario (1989)",
        "Terra Nova (2011)",
        "The 100 (2014)",
        "The Big Bang Theory (2007)",
        "The Boys (2019)",
        "The Expanse (2015)",
        "The Good Place (2016)",
        "The Handmaid's Tale (2017)",
        "The IT Crowd (2006)",
        "The Middleman (2008)",
        "The OA (2016)",
        "The Office (2005)",
        "The Owl House (2020)",
        "The Prisoner (1967)",
        "The Rain (2018)",
        "Travelers (2016)",
        "Under The Dome (2013)",
        "Westworld (2016)",
        "Zoo (2015)"
    ];

    console.log(series.length);

    if (resposta) {
        let numAleatorio = Math.floor(Math.random() * series.length);

        const img = document.createElement("img");
        const h1 = document.createElement("h1");

        const confirmacao = confirm("AVISO DE IMAGENS PISCANDO! Deseja pular direto para o resultado?");
        if (confirmacao) {
            main.innerHTML = "";
            img.src = `../images/series/${series[numAleatorio]}.jpg`;
            main.appendChild(img);
            main.appendChild(h1);
            h1.className = "estilos";
            h1.textContent = `${series[numAleatorio]}`;
            alert("Série gerada com sucesso! Sua próxima série é...");
        } else {
            main.innerHTML = "";

            h1.className = "estilos";
            h1.textContent = "Por favor, aguarde enquanto estamos gerando a sua série 😉";

            let i = 0;
            const intervalo = setInterval(() => {
                img.src = `../images/series/${series[i]}.jpg`;

                main.appendChild(img);
                main.appendChild(h1);

                i++;
                if (i === numAleatorio) {
                    setTimeout(() => {
                        alert("Série gerada com sucesso! Sua próxima série é...");
                    }, 0);
                    h1.textContent = `${series[numAleatorio - 1]}`;
                    clearInterval(intervalo);
                }
            }, 250);
        }
    }
}
