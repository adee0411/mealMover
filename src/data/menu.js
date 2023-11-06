const menu = {
  pizza: [
    {
      id: "",
      title: "Húsimádó pizza",
      price: 3499,
      image_url:
        "https://donpedropizza.hu/wp-content/uploads/2019/07/Husimado-pizza2-scaled.jpg",
      details: [
        "paradicsomszósz",
        "sonka",
        "tarja",
        "bacon",
        "szalámi",
        "csirkemell",
        "mozzarella",
      ],
    },
    {
      id: "",
      title: "Porky pizza",
      price: 3299,
      image_url:
        "https://www.thespeckledpalate.com/wp-content/uploads/2014/07/The-Speckled-Palate-BBQ-Pulled-Pork-Pizza-Image-735x1103.jpg",
      details: ["barbecue- szósz", "pulled pork", "jalapeno", "cheddar"],
    },
    {
      id: "",
      title: "Fitness pizza",
      price: 3199,
      image_url:
        "https://www.fittboszi.hu/static/r/749/egyszeru-fitnesz-pizza-turobol-es-zabpehelybol-hu-0jx6J.jpg",
      details: [
        "paradicsomszósz",
        "kukorica",
        "brokkoli",
        "kaliforniai paprika",
        "fetasajt",
        "mozzarella",
      ],
    },
    {
      id: "",
      title: "Sajtburger pizza",
      price: 3899,
      image_url:
        "https://www.tasteandtellblog.com/wp-content/uploads/2023/05/Cheeseburger-Pizza-5.jpg",
      details: [
        "hamburger alapszósz",
        "marhahús korong",
        "paradicsomkarika",
        "csemege uborka",
        "vöröshagyma",
        "mozzarella",
        "cheddar",
      ],
    },
  ],
  hamburger: [
    {
      id: "",
      title: "Mexicana Burger",
      price: 2990,
      image_url:
        "https://www.bambamarha.hu/wp-content/uploads/2023/07/Mexicana-Burger-jpeg.webp",
      details: [
        "MARHAHÚSPOGÁCSA",
        "CHEDDAR SAJT",
        "BABPÜRÉ",
        "MOLESZÓSZ",
        "AVOKÁDÓKRÉM",
        "JALAPENO",
        "NACHOS CHIPS",
        "RÓMAI SALÁTA",
      ],
    },
    {
      id: "",
      title: "Sloppy Joe Burger",
      price: 2890,
      image_url:
        "https://media-cdn.tripadvisor.com/media/photo-s/0e/b9/85/d9/sloppy-joe-burger.jpg",
      details: [
        "MARHAHÚSPOGÁCSA",
        "KÁPOSZTASALÁTA",
        "SLOPPY JOE RAGU",
        "GOUDA SAJT",
        "RÁNTOTT HAGYMAKARIKA",
      ],
    },
    {
      id: "",
      title: "Mentes Burger",
      price: 3590,
      image_url:
        "https://www.bambamarha.hu/wp-content/uploads/2023/07/Mentes-Burger-jpeg.webp",
      details: [
        "Glutén-, laktóz-, állati eredetű alapanyag mentes zsömle",
        "Beyond Meat pogácsa (zöldborsófehérje alapú)",
        "vegán cheddar stílusú sajt",
        "házi hambiszósz (vegán alapú majonéz, tojás mentes, veganéz)",
      ],
    },
    {
      id: "",
      title: "Amerikai Sajtburger",
      price: 3290,
      image_url:
        "https://www.bambamarha.hu/wp-content/uploads/2023/07/Premium-Sajtburger.webp",
      details: [
        "MARHAHÚSPOGÁCSA",
        "FEHÉR CHEDDAR",
        "EMENTÁLI SAJT",
        "GOUDA SAJT",
        "KAPROS SAVANYÚ UBORKA",
        "AMERIKAI BURGERSZÓSZ",
        "PARADICSOM",
        "JÉGSALÁTA",
        "FEHÉRHAGYMA",
      ],
    },
  ],
  tészta: [
    {
      id: "",
      title: "Pasta Bolognese",
      price: 2290,
      image_url:
        "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2022/09/Pasta-Bolognese-SQ-175.jpg",
      details: [
        "Olasz marha- és sertésragu",
        "hagyma",
        "sárgarépa",
        "házi paradicsomszósz",
        "Grana Padano sajt",
      ],
    },
    {
      id: "",
      title: "Pasta Carbonara",
      price: 2490,
      image_url:
        "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg",
      details: [
        "Bacon és hagyma",
        "friss petrezselyem",
        "tejszínes szósz",
        "tojássárgája",
        "Grana Padano sajt",
      ],
    },
    {
      id: "",
      title: "Pasta Pollo Dell' Orto",
      price: 2890,
      image_url:
        "https://gyor.vapiano.hu/images/products/originals/20170310_082515_pasta-pollo-dell-orto.jpg",
      details: [
        "Csirkemell",
        "gomba",
        "szárított paradicsom",
        "zsálya",
        "hagyma",
        "cukkini",
        "fenyőmag",
        "fehérboros szósz",
        "Grana Padano sajt",
      ],
    },
    {
      id: "",
      title: "Pomodoro e Tonno",
      price: 2890,
      image_url:
        "https://www.fattoincasadabenedetta.it/wp-content/uploads/2021/03/SITO-.-09-Pasta-con-tonno-olive-e-pomodoro.jpg",
      details: [
        "Tonhal",
        "balzsamecetes hagyma",
        "koktélparadicsom",
        "paradicsomszósz",
        "Grana Padano sajt",
      ],
    },
  ],
  taco: [
    {
      id: "",
      title: "Csirkés Taco",
      price: 2490,
      image_url:
        "https://littlesunnykitchen.com/wp-content/uploads/2021/10/Shredded-Chicken-Tacos-Recipe-1.jpg",
      details: [
        "14 cm Tortilla lap",
        "sült csirkemell",
        "saláta",
        "sajt",
        "jalapeno",
        "salsa szósz / fűszeres tejföl",
      ],
    },
    {
      id: "",
      title: "Marhahúsos Taco",
      price: 2490,
      image_url:
        "https://joyfoodsunshine.com/wp-content/uploads/2022/04/mexian-ground-beef-tacos-recipe-9.jpg",
      details: [
        "14 cm Tortilla lap",
        "sült marhahús",
        "saláta",
        "sajt",
        "jalapeno",
        "salsa szósz / fűszeres tejföl",
      ],
    },
    {
      id: "",
      title: "Zöldséges Taco",
      price: 2490,
      image_url:
        "https://cookieandkate.com/images/2018/04/delicious-vegetarian-tacos-recipe.jpg",
      details: [
        "14 cm Tortilla lap",
        "sült hagymakarika",
        "saláta",
        "sajt",
        "jalapeno",
        "salsa szósz / fűszeres tejföl",
      ],
    },
  ],
  BBQ: [
    {
      id: "",
      title: "BBQ csirkeszárny",
      price: 3790,
      image_url:
        "https://assets.kraftfoods.com/recipe_images/opendeploy/50482_640x428.jpg",
      details: ["bbq csirkeszárny", "steak burgonya", "coleslaw saláta"],
    },
    {
      id: "",
      title: "BBQ marhaszegy",
      price: 6390,
      image_url:
        "https://www.thecookierookie.com/wp-content/uploads/2023/06/best-bbq-brisket-recipe-7-of-8-edited.jpg",
      details: ["bbq marhaszegy", "steak burgonya", "coleslaw saláta"],
    },
    {
      id: "",
      title: "BBQ oldalas",
      price: 5390,
      image_url:
        "https://www.foodandwine.com/thmb/3vphgXNFQ1yI_Qv7b2pFXJYw5zo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/200609-r-xl-sticky-barbecued-beef-ribs-2000-7f29a1d0eeed49159a7cc7479d12e700.jpg",
      details: ["bbq oldalas", "steak burgonya", "coleslaw saláta"],
    },
    {
      id: "",
      title: "Pulled Pork",
      price: 4390,
      image_url:
        "https://www.ontariopork.on.ca/Portals/11/EasyDNNnews/338/Root-Beer-Pulled-Pork-Recipe.jpg",
      details: ["tépett marhaszegy", "házi buci", "coleslaw saláta"],
    },
  ],
};

const addIDToMenu = (menuObj) => {
  for (const categoryName in menuObj) {
    menuObj[categoryName].forEach((menu, index) => {
      menu.id = `${categoryName}${String(index + 1).padStart(3, "0")}`;
    });
  }
};

addIDToMenu(menu);

export default menu;
