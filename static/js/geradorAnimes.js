const geraAnime = () => {
    const main = document.querySelector("main#conteudoPrincipal");
    const resposta = confirm("Você deseja GERAR um anime aleatório?");

    const animes = [
        "86: Eighty Six (2021)",
        "Absolute Duo (2015)",
        "Accel World (2012)",
        "Air (2005)",
        "Akudama Drive (2020)",
        "Amagi Brilliant Park (2014)",
        "Angel Beats! (2010)",
        "Ano Hana (2011)",
        "Another (2012)",
        "Ao Haru Ride (2014)",
        "Ao no Kanata no Four Rhythm (2016)",
        "Araburu Kisetsu no Otome-domo yo (2019)",
        "Attack on Titan (2013)",
        "Ballroom e Youkoso (2017)",
        "Beatless (2018)",
        "Black Bullet (2014)",
        "Black Cover (2017)",
        "Black Lagoon (2006)",
        "Bleach (2004)",
        "Blend S (2017)",
        "Blue Exorcist (2011)",
        "Boku no Hero Academia (2016)",
        // "Boku wa Tomodachi ga Sukunai (2010)",
        "Bokurano (2006)",
        "Btooom! (2012)",
        // "Burn The Witch (2020)",
        // "Campione! (2012)",
        "Cells at Works (2020)",
        "Charlotte (2015)",
        "Chuunibyou Demo Koi ga Shitai! (2012)",
        "Citrus (2018)",
        // "Clannad (2007)",
        "Code Breaker (2012)",
        "Code Geass - Lelouch of the Rebellion (2006)",
        "Cowboy Bebop (1998)",
        "D-Frag! (2014)",
        "Darling in the Franxx (2018)",
        "Death Parade (2015)",
        "Deca-Dence (2020)",
        "Demon Slayer (2019)",
        "Domestic Girlfriend (2019)",
        "Don't Toy With Me, Miss Nagatoro (2021)",
        // "Dororo (2019)",
        "Dr. Stone (2019)",
        "Dragon Ball (1986)",
        "Dumbbell Nan Kilo Moteru (2019)",
        "Enfen Lied (2004)",
        "Erased (2016)",
        "Ergo Proxy (2006)",
        "Fairy Tail (2009)",
        "Fire Force (2019)",
        "Fooly Cooly (2000)",
        "Free! (2013)",
        "From the New World (2012)",
        "Fruits Basket (2019)",
        "Fullmetal Alchemist (2003)",
        "Gabriel DropOut (2017)",
        "Gamers! (2017)",
        "Gantz (2004)",
        "Gargantia on the Verdurous Planet (2013)",
        "Gintama (2006)",
        "Girlfriend Girlfriend (2021)",
        "Girls und Panzer (2012)",
        "Given (2020)",
        "Golden Time (2013)",
        "Gotoubun no Hanayome (2019)",
        "Guilty Crown (2011)",
        "Haikyu!! (2014)",
        "Hand Shakers (2017)",
        "Happy Sugar Life (2018)",
        "Hige wo Soru (2021)",
        "High School DxD (2012)",
        "Himouto! Umaru-chan (2015)",
        "Hitori Bocchi no Marumaru Seikatsu (2013)",
        "Horimiya (2021)",
        "Hunter x Hunter (2011)",
        "Imouto Sae Ireba li (2017)",
        "In Spectre (2020)",
        "Interviews with Monster Girls (2017)",
        "Inu x Boku SS (2012)",
        "Irozuku Sekai no Ashita Kara (2018)",
        "Ishuzoku Reviewers (2018)",
        "Jujutsu Kaisen (2020)",
        "K-On! (2011)",
        "Kaguya-sama - Love is War (2019)",
        "Kaichou wa Maid-sama! (2010)",
        "Kaifuku Jutsushi no Yarinaoshi (2021)",
        "Kamigami no Asobi (2014)",
        "Kanata no Astra (2019)",
        "Kashimashi - Girls Meets Girl (2006)",
        "Kemurikusa (2019)",
        // "Kenka Bancho Otome - Girl Beats Boys (2017)",
        "Kill la Kill (2013)",
        "Kimi ni Todoke (2009)",
        "Kiss Him, Not Me (2015)",
        "Kiss x Sis (2010)",
        "Kiznaiver (2016)",
        "Kobayashi-san Chi no Maid Dragon (2017)",
        "Koi to Senkyo to Chocolate (2012)",
        "Kono Bijutsubu ni wa Mondai ga Aru! (2016)",
        // "Konosuba (2016)",
        "Kumo Desu ga, Nani ka (2021)",
        "Kyoukai no Kanata (2013)",
        "Lapis Re Lights (2020)",
        "Love Lab (2013)",
        "Love and Lies (2017)",
        "Love Live! School Idol Project (2013)",
        "Mai-Otome (2005)",
        "Majo no Tabitabi (2020)",
        // "Mawaru Penguindrum (2011)",
        "Michiko to Hatchin (2008)",
        "Mieruko-chan (2021)",
        "Mirai Nikki (2011)",
        "Mitsuboshi Colors (2018)",
        "Mob Psycho 100 (2019)",
        "Monogatari (2009)",
        "Monster Musume no Iru Nichijou (2015)",
        "Mushoku Tensei (2021)",
        "My Dress-Up Darling (2022)",
        "Nanana's Buried Treasure (2014)",
        // "Naruto (2002)",
        "Neon Genesis Evangelion (1995)",
        "Netoge no Yome wa Onnanoko ja Nai to Omotta (2013)",
        "Nichijou (2011)",
        "Noragami (2014)",
        "One Piece (1999)",
        "One Punch Man (2015)",
        "Orange (2016)",
        "Oregairu (2013)",
        "Os Cavaleiros do Zodíaco (1986)",
        // "Overlord (2015)",
        "Owari no Seraph (2015)",
        "Pokémon (1997)",
        "Prison School (2015)",
        "Psycho-Pass (2012)",
        "Quando as Cigarras Choram (2006)",
        "Rascal Does Not Dream of Bunny Girl Senpai (2018)",
        "Record of Ragnarok (2021)",
        "Re Creators (2017)",
        "Re Zero Kara Hajimeru Isekai Seikatsu (2016)",
        "ReLIFE (2016)",
        "Rent-a-Girlfriend (2020)",
        "Sakurasou no Pet na Kanojo (2012)",
        "Samurai Champloo (2005)",
        "Schwarzesmarken (2016)",
        "Sentouin, Hakenshimasu! (2021)",
        "Serial Experiments Lain (1998)",
        "Shimoneta (2015)",
        "Shingeki no Bahamut (2014)",
        "Soul Eater (2008)",
        "Steins;Gate (2011)",
        "Strike the Blood (2013)",
        "Suzumiya Haruhi no Yuuutsu (2006)",
        "Sword Art Online (2012)",
        "Teasing Master Takagi-san (2018)",
        "Tengen Toppa Gurren Lagann (2007)",
        "Tensei Shitara Slime Datta Ken (2018)",
        // "Terra Formars (2014)",
        "The Irregular at Magic High School (2014)",
        "The Promissed Neverland (2019)",
        "The Seven Deadly Sins (2014)",
        "To Love-Ru (2008)",
        "Tokyo Magnitude 8.0 (2009)",
        "Tokyo Ravens (2013)",
        "TONIKAWA - Over The Moon For You (2020)",
        "Toradora (2008)",
        "Tower of God (2020)",
        "Trinity Seven (2014)",
        "Tsurezure Children (2017)",
        "Uchi no Maid ga Uzasugiru! (2018)",
        "UQ Holder (2017)",
        "WataMote (2013)",
        "Wonder Egg Priority (2021)",
        "WorldEnd (2017)",
        "Yosuga no Sora (2010)",
        "Your Lie in April (2014)",
        "Yozakura Quartet (2008)",
        "Yu Yu Hakusho (1992)",
        "Yuragi-sou no Yuuna-san (2018)",
        "Zankyou no Terror (2014)",
        "Zero no Tsukaima (2007)",
        "Zombieland Saga (2018)"
    ];

    if (resposta) {
        let numAleatorio = Math.floor(Math.random() * animes.length);

        const img = document.createElement("img");
        const h1 = document.createElement("h1");

        const confirmacao = confirm("AVISO DE IMAGENS PISCANDO! Deseja pular direto para o resultado?");
        if (confirmacao) {
            main.innerHTML = "";
            img.src = `../images/animes/${animes[numAleatorio]}.jpg`;
            main.appendChild(img);
            main.appendChild(h1);
            h1.className = "estilos";
            h1.textContent = `${animes[numAleatorio]}`;
            alert("Anime gerado com sucesso! Seu próximo anime é...");
        } else {
            main.innerHTML = "";

            h1.className = "estilos";
            h1.textContent = "Por favor, aguarde enquanto estamos gerando o seu anime 😉";

            let i = 0;
            const intervalo = setInterval(() => {
                img.src = `../images/animes/${animes[i]}.jpg`;

                main.appendChild(img);
                main.appendChild(h1);

                i++;
                if (i === numAleatorio) {
                    setTimeout(() => {
                        alert("Anime gerado com sucesso! Seu próximo anime é...");
                    }, 0);
                    h1.textContent = `${animes[numAleatorio - 1]}`;
                    clearInterval(intervalo);
                }
            }, 250);
        }
    }
}