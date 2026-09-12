export let products = [
  {
    image: "image/item-1.png",
    name: "Creed Avantus",
    id: "item1",
    price: "$100"
  },
  {
    image: "image/item-2.png",
    name: "Jean Paul Gaultier",
    id: "item2",
    price: "$88"
  },
  {
    image: "image/item-3.png",
    name: "Jean Paul Gaultier-2",
    id: "item3",
    price: "$78"
  },
  {
    image: "image/item-4.png",
    name: "Jean Paul Gaultier-3",
    id: "item4",
    price: "$55"
  },
  {
    image: "image/item-5.png",
    name: "Stronger With You Intensely",
    id: "item5",
    price: "$99"
  },
   {
    image: "image/item-6.png",
    name: "ACQUA Di GIO",
    id: "item6",
    price: "$69"
  },
  {
    image: "image/item-7.png",
    name: "Perfums de Marly",
    id: "item7",
    price: "$231"
  },
  {
    image: "image/item-8.png",
    name: "Louis Vuitton Imagination",
    id: "item8",
    price: "$77"
  },
   {
    image: "image/item-9.png",
    name: "Versace fresh",
    id: "item9",
    price: "$48"
  },
  {
    image: "image/item-10.png",
    name: "Versace Eros EDU",
    id: "item10",
    price: "$45"
  },
  {
    image: "image/item-11.png",
    name: "Versace Sweet",
    id: "item11",
    price: "$240"
  },{
    image: "image/item-12.png",
    name: "Nautica Voyage",
    id: "item12",
    price: "$35"
  },{
    image: "image/item-13.png",
    name: "Creed Irish Tweed",
    id: "item13",
    price: "$110"
  },{
    image: "image/item-14.png",
    name: "Hawas Tropical",
    id: "item14",
    price: "$38"
  },{
    image: "image/item-15.png",
    name: "Velentino Lava",
    id: "item15",
    price: "$220"
  },{
    image: "image/item-16.png",
    name: "Hawas FOR HIM",
    id: "item16",
    price: "$40"
  },
  ,{
    image: "image/item-17.png",
    name: "TOM FORD",
    id: "item17",
    price: "$90"
  },
  ,{
    image: "image/item-18.png",
    name: "YSL Luxury",
    id: "item18",
    price: "$300"
  },
  ,{
    image: "image/item-19.png",
    name: "VELENTINO Pink",
    id: "item19",
    price: "$150"
  },
  ,{
    image: "image/item-20.png",
    name: "Replica Sailing Day",
    id: "item20",
    price: "$258"
  },
  ,{
    image: "image/item-21.png",
    name: "Burberry HER",
    id: "item21",
    price: "$148"
  },
  ,{
    image: "image/item-22.png",
    name: "The MATCHA 26",
    id: "item22",
    price: "$48"
  },
  ,{
    image: "image/item-23.png",
    name: "Replica by the Fireplace",
    id: "item23",
    price: "$288"
  },
  ,{
    image: "image/item-24.png",
    name: "Versace Black Diamond",
    id: "item24",
    price: "$148"
  },
  ,{
    image: "image/item-25.png",
    name: "Good Girl",
    id: "item25",
    price: "$118"
  },
  ,{
    image: "image/item-26.png",
    name: "Velentino Powdery",
    id: "item26",
    price: "$48"
  },
  ,{
    image: "image/item-27.png",
    name: "Velentino Lime",
    id: "item27",
    price: "$48"
  },
  ,{
    image: "image/item-28.png",
    name: "ERBA PURA",
    id: "item28",
    price: "$288"
  },
  ,{
    image: "image/item-29.png",
    name: "XERJOFF",
    id: "item29",
    price: "$258"
  },
  {
    image: "image/item-30.png",
    name: "Bomb",
    id: "item30",
    price: "$48"
  },
  {
    image: "image/item-31.png",
    name: "Armani Prive",
    id: "item31",
    price: "$478"
  },{
    image: "image/item-32.png",
    name: "Louis Vuitton NUIT DE FEU",
    id: "item32",
    price: "$480"
  },{
    image: "image/item-33.png",
    name: "9PM Magma",
    id: "item33",
    price: "$28"
  },{
    image: "image/item-34.png",
    name: "Hawas FOR HIM",
    id: "item34",
    price: "$128"
  },{
    image: "image/item-35.png",
    name: "Hawas Tropical",
    id: "item35",
    price: "$148"
  },,{
    image: "image/item-35.png",
    name: "Hawas Tropical",
    id: "item36",
    price: "$111"
  },,{
    image: "image/item-35.png",
    name: "Hawas Tropical",
    id: "item37",
    price: "$259"
  },,{
    image: "image/item-35.png",
    name: "Hawas Tropical",
    id: "item38",
    price: "$190"
  },,{
    image: "image/item-35.png",
    name: "Hawas Tropical",
    id: "item39",
    price: "$24"
  },,{
    image: "image/item-35.png",
    name: "Hawas Tropical",
    id: "item40",
    price: "$57"
  },
];
const itemContainer = document.querySelector(".item-container");

if (itemContainer) {
  products.forEach((product) => {
    itemContainer.innerHTML += `
      <div class="item" data-aos="fade-up"
     data-aos-duration="1000">
        <div class="item-img">
          <img src="${product.image}">
        </div>

        <div class="item-about">
          <h3>${product.name}</h3>
          <button>About</button>
          <button class="buy-button"
            data-product-id="${product.id}">
            Buy
          </button>
        </div>
      </div>
    `;
  });
}