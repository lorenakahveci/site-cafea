// https://www.beanzcafe.ro/boabe

// Baza de date conform produselor

//Cream obiect cu produsele

const bazaDate = [
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_747ecbf631f6f4ee9c01e4647eb70ec8.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_81c6594f440741a37dbb73e2712174cc.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_f59877f3f95d4f89ea7a46b6f2b61248.jpg",
    ],
    titlu: "Cafea Boabe, REVIGO Arabica & Robusta, BEANS REPUBLIC, 1kg",
    descriere:
      "Buna, sunt Revigo, cel mai revigorant dintre avatarurile Beans Republic Am un mix vibrant de cafea Arabica si Robusta recoltata din America Centrala, America de Sud si Africa cu note de ciocolata neagra si nucsoara care confera un corp cremos. Pregatita la espressorul tau, este o cafea care te revigoreaza cu fiecare ceasca. Intreaga lume e o republica a cafelei, fa cunostinta cu celelalte avataruri Beans Republic!",
    pret: 76.3,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/fb6d88e45198d64315952f1ba99a5460/r/e/res_7c5ac00ebe872b6205de6f4baaccb613.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/fb6d88e45198d64315952f1ba99a5460/r/e/res_10ff5f48f871b7b94d7d070c9ae1a6aa.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/fb6d88e45198d64315952f1ba99a5460/r/e/res_6527d99b0d5ce2a547d7253ee02658d2.jpg",
    ],
    titlu: "Cafea Boabe, ESPLENDIDA 100% Arabica, BEANS REPUBLIC, 1kg",
    descriere:
      "Buna, sunt Esplendida, cel mai suav avatar Beans Republic! Am pregatit o cafea 100% Arabica recoltata din America Centrala si de Sud, cu un corp bogat si note subtile de ciocolata cu lapte si zahar caramelizat. Proaspat prajita in loturi mici si optima pentru espressorul tau atunci cand vrei sa iti prepari un espresso, americano sau cappuccino. Intreaga lume e o republica a cafelei, fa cunostinta cu celelalte avataruri Beans Republic!",
    pret: 76.3,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_19796d2e9ff77f52312d6928d85ca53d.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_15a025b4196b2af9864d27d6f9a2cf81.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_5b2eceb4854b55e72f6267a209455b4d.jpg ",
    ],
    titlu: "Cafea Boabe, COLUMBIANA 100% Arabica, BEANS REPUBLIC, 1kg",
    descriere:
      "Buna, sunt Columbiana, cel mai efervescent avatar Beans Republic! cafeaua mea de specialitate ,100% Arabica, este ideal sa o prepari la oricare dintre espressoarele cunoscute ca americano, cappuccino sau espresso. Notele fructate si de citrice iti vor redefini gustul pentru cafea. Intreaga lume e o republica a cafelei, fa cunostinta cu celelalte avataruri Beans Republic!",
    pret: 87.2,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_76ac8774a4e579f164bfc9ddb2804338.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_1abbfb092fb1f78af642f46c1ec07c2f.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_2152bf095693a7c690b6ff61e5d4e77a.jpg",
    ],
    titlu: "Cafea Boabe, BURUNDI 100% Arabica, BEANS REPUBLIC, 1kg",
    descriere:
      "Salut, sunt Burundi, cel mai surprinzator avatar Beans Republic! cafeaua mea 100% Arabica este recoltata de la altitudini mari ceea ce ii infuzeaza note complexe de cacao, lavanda si papaya. Savureaz-o fie ca espresso sau daca iti doresti un latte aromat! Intreaga lume e o republica a cafelei, fa cunostinta cu celelalte avataruri Beans Republic!",
    pret: 87.2,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_055ad9bb097601d6801b070e08a6f3d1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_da754ae39f25fde4db62838ba8fe760d.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/r/e/res_a7a5e2fc238d82f27c43aee81aaafc6f.jpg",
    ],
    titlu: "Cafea Boabe, BRASILIERO 100% Arabica, BEANS REPUBLIC, 1kg",
    descriere:
      "Salut, sunt Brasileiro, cel mai popular avatar Beans Republic! Cafeaua mea proaspat prajita este 100% Arabica din regiunea Santos, Brazilia, care te surprinde cu note de ciocolata si nuci si un gust de final de cacao. Iti recomand sa o prepari cu oricare dintre espressoarele cunoscute ca sa degusti un cappuccino autentic sau un espresso cremos. Intreaga lume e o republica a cafelei, fa cunostinta cu celelalte avataruri Beans Republic!",
    pret: 76.3,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/p/a/pack_miju_500x569px_002_.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/p/a/pack_miju_500x569px_002_.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/p/a/pack_miju_500x569px_002_.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_miju_-_cafea_boabe.png",
    ],
    titlu: "Miju - cafea boabe",
    descriere: "Cafeaua este parte din cine suntem noi",
    pret: 49.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/b/e/beanz_simulari_330g_anjip.jpg",
      "https://s13emagst.akamaized.net/products/40747/40746130/images/res_e8f20ad11c484fbc85480c589015f852.jpg",
    ],
    titlu: "Anjip - cafea boabe",
    descriere:
      "Vreau ca oamenii sa zâmbeasca când gusta aceasta cafea” spune Anjip. În anii ‘90, Anjip îsi începea activitatea în industria cafelei ca mic fermier în Papua Noua Guinee, valea Waghi. Pasiunea pentru cafea si efortul constant l-au ajutat pe Anjip sa devina unul dintre cei mai importani fermieri de cafea din zona Marenban, cunoscuta mai ales pentru calitate. Cultivata la o înaltime de 1.500 metri, vei descoperi la cafeaua lui Anjip note de caramel, condimente si un corp echilibrat.",
    pret: 49.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/b/e/beanz_simulari_330g_digner.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_digner_-_cafea_boabe.png",
    ],
    titlu: "Digner - cafea boabe",
    descriere: "Din valea Waghi, PNG, descoperi note de caramel si condimente",
    pret: 49.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/k/i/kick_back_white.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_kick_-_cafea_boabe.png",
    ],
    titlu: "Kick - cafea boabe",
    descriere:
      "O cafea cu atitudine, robusta, produsa din boabe 100% Arabica din Columbia si Indonezia.",
    pret: 49.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/1/0/100132155_1.png",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/b/a/back_5.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/1/0/100132155_1.png",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_indonesia_mandheling.png",
    ],
    titlu: "Indonesia Mandheling, 250g",
    descriere:
      "Buchetul ei bogat face din Indonesia Mandheling o cafea cu o esenta desavarsita",
    pret: 40.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/c/dcff-simulari-pachete-etichete-brazil-bkg1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/c/dcff-simulari-pachete-etichete-brazil-bkg1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_brazil_mogiana.png",
    ],
    titlu: "Brazil Mogiana, 250g",
    descriere:
      "Echilibrul perfect dintre intensitate si gustul dulce, cu note de ciocolata, nuci si miere",
    pret: 34.99,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/c/dcff-simulari-pachete-etichete-india-bkg1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/indina_plantation_2.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_india_plantation.png",
    ],
    titlu: "India Plantation, 250g",
    descriere:
      "Cultivata la umbra arborilor de piper, banane, nucsoara, India Plantation este considerata una dintre cele mai bune cafele ale Indiei ",
    pret: 40.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/c/o/costa-rica-1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/c/dcff-simulari-pachete-etichete-costarica-bkg1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_costa_rica_shb.png",
    ],
    TITLU: "Costa Rica SHB, 250g",
    descriere:
      "Combinatia surprinzatoare de arome care vin direct din natura, fac din Costa Rica SHB o cafea speciala",
    pret: 40.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/b/r/brazil-cerrado-1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/_/0/_0000_brazil-cerrado-1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/c/dcff-simulari-pachete-etichete-indonesia-bkg1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_brazil_cerrado.png",
    ],
    titlu: "Brazil Cerrado, 250g",
    descriere:
      "Cu o personalitate complexa din care ies in evidenta notele de ciocolata alba, caramel si nuci ",
    pret: 40.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/c/o/congo-k4-1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/c/dcff-simulari-pachete-etichete-congo-bkg1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/c/dcff-simulari-pachete-etichete-congo-bkg1.jpg",
    ],
    titlu: "Congo K4, 250g",
    descriere:
      "Aceasta Arabica speciala are personalitatea complexa a cafelei cultivate la altitudine ridicata ",
    pret: 40.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/k/e/kenya-gitura-1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/c/dcff-simulari-pachete-etichete-kenya-bkg1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_kenya_gitura.png",
    ],
    titlu: "Kenya Gitura, 250g",
    descriere:
      "Considerata unul dintre cele mai bune sortimente de cafea din lume ",
    pret: 48.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/c/o/colombia-supremo-1_1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/c/dcff-simulari-pachete-etichete-colombia-bkg1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_colombia_supremo.png",
    ],
    titlu: "Colombia Supremo, 250g",
    descriere:
      "Considerata de multi experti ca fiind cafeaua absoluta! Buchet bogat de arome, cu note de piersica, citrice si caramel",
    pret: 40.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/e/t/ethiopia-sidamo-1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/c/dcff-simulari-pachete-etichete-ethiopia-bkg1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_ethiopia_sidamo.png",
    ],
    titlu: "Ethiopia Sidamo, 250g",
    descriere:
      "Cultivata intre 1.500 si 1.800 de metri altitudine. Datorita conditiilor climatice, boabele absorb mai multe substante din sol si dezvolta un gust intens in care se regasesc note florale si de caramel. ",
    pret: 40.0,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_doncafe_espresso_left_side_570x600px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_doncafe_espresso_left_side_570x600px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_doncafe_espresso_right_side_570x600px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/w/dw7kgtmbm.jpg",
    ],
    titlu: "Doncafe Espresso Perfetto, 1kg",
    descriere:
      "Un espresso autentic, cu gust intens, obținut din soiuri de cafea ARABICA si ROBUSTA atent selecționate.",
    pret: 79.2,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe-fresh-barista-expert-italian-roast-front.png",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/6/d6yzs2mbm.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_doncafe_fresh_barista_expert_italian_roast.png",
    ],
    titlu: "Doncafe Fresh Barista Expert Italian Roast, 500g ",
    descriere:
      "VIOREL PETRE, Master Roaster, semnează Doncafé Fresh Barista Expert Italian Roast",
    pret: 44.2,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe-fresh-barista-expert-american-roast-front.png",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/5/d5yzs2mbm.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_doncafe_fresh_barista_expert_american_roast.png",
    ],
    titlu: "Doncafe Fresh Barista Expert American Roast, 500g",
    descriere:
      "GHIULI APTISA, Coffee Creator, semnează Doncafé Fresh Barista Expert American Roast",
    pret: 44.2,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_doncafe_cremoso_left_350x370px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_doncafe_cremoso_left_570x600px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_doncafe_espresso_cremoso_1kg.png",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/k/dkb9h4mbm.jpg",
    ],
    titlu: "Doncafe Espresso Cremoso, 1kg",
    descriere:
      "O cafea cu cremaă bogată si cremoasă, aciditate scăzută și corp intens.",
    pret: 79.2,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_doncafe_selected_right_side_570x600px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_doncafe_selected_right_side_570x600px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_doncafe_selected_boabe_100_arabica_1kg.png",
    ],
    titlu: "Doncafe Selected boabe 100% Arabica, 1 kg",
    descriere:
      "O combinație armonioasă de soiuri de cafea ARABICA din America Centrală și de Sud",
    pret: 83.43,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_espresso_perfetto_500g_right_350x370px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_espresso_perfetto_500g_left_570x600px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_espresso_perfetto_500g_left_350x370px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_espresso_perfetto_500g_left_350x370px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_espresso_perfetto_500g_left_350x370px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_espresso_perfetto_500_g_570x600px_1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_espresso_perfetto_500_g_570x600px_1.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/4/d4ndfvbbm.jpg",
    ],
    titlu: "Doncafe Espresso Perfetto, 500g",
    descriere:
      "Un espresso autentic, cu gust intens, obținut din soiuri de cafea ARABICA si ROBUSTA atent selecționate.",
    pret: 42.4,
  },
  {
    poze: [
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/o/doncafe_doncafe_cremoso_500g_front_350x370px.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/d/h/dhndfvbbm.jpg",
      "https://www.beanzcafe.ro/media/catalog/product/cache/f2517d7f347b97757a1954a89bf35e2b/i/n/informatii_pachete_500x500_doncafe_espresso_cremoso_500g.png",
    ],
    titlu: "Doncafe Espresso Cremoso, 500g",
    descriere:
      "O cafea cu cremă bogată si cremoasă, aciditate scăzută și corp intens. ",
    pret: 42.4,
  },
];

// Manipularea DOM

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("incarcare pagina!");

  const body = document.body;

  const header = body.querySelector("header");

  const main = body.querySelector("main");

  const footer = body.querySelector("footer");

  const mainSect2 = main.querySelectorAll("section")[1];

  // Testare selector
  // mainSect2.style.border = "5px solid red";

  const mainSect2Ol = document.createElement("ol");

  mainSect2.appendChild(mainSect2Ol);

  // Randare produse

  function randareProduseL(baza, parinte) {
    // Iterare array de produse

    let evenimentParagraf = 0;

    for (let obiect of baza) {
      // Figure parinte de produs

      const li = document.createElement("li");

      const liFigure = document.createElement("figure");

      liFigure.innerHTML = `<img src=${obiect.poze[0]} alt=${obiect.titlu}>`;

      const liP = document.createElement("p");

      liP.innerText = "vizualizare rapida";
      liP.style.display = "none";

      // Modificarea pozei la hover
      liFigure.addEventListener("mouseenter", function () {
        if (evenimentParagraf < 1) {
          liFigure.innerHTML = `<img src=${obiect.poze[1]} alt=${obiect.titlu}>`;
          // Afisarea mesajului pe poza
          liP.style.display = "block";
          console.log("paragraf vizibil", evenimentParagraf);

          evenimentParagraf++;
        }
      });
      // Revenirea pozei la mouseout
      liFigure.addEventListener("mouseleave", function () {
        if (evenimentParagraf > 0) {
          liFigure.innerHTML = `<img src=${obiect.poze[0]} alt=${obiect.titlu}>`;
          // Ascunderea mesajului de pe poza
          liP.style.display = "none";
          console.log("paragraf ascuns", evenimentParagraf);

          evenimentParagraf--;
        }
      });

      // introducere in parintele li

      li.appendChild(liFigure);
      li.appendChild(liP);

      // Partea a doua a containerului de produs

      const liDiv = document.createElement("div");

      const liDivH3 = document.createElement("h3");

      liDivH3.innerText = obiect.titlu;

      liDiv.appendChild(liDivH3);

      const liDivP = document.createElement("p");

      liDivP.innerText = obiect.descriere;

      liDiv.appendChild(liDivP);

      const liDivH3_2 = document.createElement("h3");

      liDivH3_2.innerText = obiect.pret;

      liDiv.appendChild(liDivH3_2);

      const liDivForm = document.createElement("form");

      liDivForm.innerHTML = `<a href=""><i class="fa-solid fa-minus"></i></a><input type="number"><a href=""><i class="fa-solid fa-plus"></i></a>`;

      liDiv.appendChild(liDivForm);

      const liDivButon = document.createElement("button");

      liDivButon.innerHTML =
        '<i class="fa-solid fa-cart-shopping"></i><span>ADAUGA IN COS</span>';

      liDiv.appendChild(liDivButon);

      li.appendChild(liDiv);

      parinte.appendChild(li);
    }
  }

  // Eveniment pentru randare

  const headerBoabe = header.querySelector("#boabe");

  headerBoabe.addEventListener("click", function (e) {
    // apelam la click functia de randare a produselor
    console.log("click pe boabe");

    randareProduseL(bazaDate, mainSect2Ol);
  });
});
