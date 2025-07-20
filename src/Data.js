// Import Imgs
import service1 from "./assets/images/service.png";
import service2 from "./assets/images/service-02.png";
import service3 from "./assets/images/service-03.png";
import service4 from "./assets/images/service-04.png";
import service5 from "./assets/images/service-05.png";
import visa from "./assets/images/visa.png";
import maestro from "./assets/images/maestro.png";
import paypal from "./assets/images/paypal.png";
import discover from "./assets/images/discover.png";
import master from "./assets/images/card.png";
import amex from "./assets/images/amex.png";
import google from "./assets/images/google.png";
import paytm from "./assets/images/paytm.png";
import shopify from "./assets/images/shopify.png";

export const services = [
  {
    id: 1,
    img: service1,
    title: "Free Shipping",
    subTitle: "From all orders over $100",
  },
  {
    id: 2,
    img: service2,
    title: "Daily Surprise Offers",
    subTitle: "Save up to 25% off",
  },
  {
    id: 3,
    img: service3,
    title: "Support 24/7",
    subTitle: "Shop width an export",
  },
  {
    id: 4,
    img: service4,
    title: "Affordable Prices",
    subTitle: "Get factory direct price",
  },
  {
    id: 5,
    img: service5,
    title: "Secure Payments",
    subTitle: "100% protected payments",
  },
];

export const categories = [
  {
    id: 1,
    category: "Laptops",
    img: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp",
    count: 5,
    link: "laptops",
  },
  {
    id: 2,
    category: "Motorcycle",
    img: "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/1.webp",
    count: 5,
    link: "motorcycle",
  },
  {
    id: 3,
    category: "Tablets",
    img: "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp",
    count: 3,
    link: "tablets",
  },
  {
    id: 4,
    category: "Tops",
    img: "https://cdn.dummyjson.com/product-images/tops/blue-frock/1.webp",
    count: 5,
    link: "tops",
  },
  {
    id: 5,
    category: "Furniture",
    img: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
    count: 5,
    link: "furniture",
  },
  {
    id: 6,
    category: "Grocreies",
    img: "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp",
    count: 27,
    link: "Groceries",
  },
  {
    id: 7,
    category: "Mobile Accessories",
    img: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp",
    count: 14,
    link: "mobile accessories",
  },
  {
    id: 8,
    category: "Fragrances",
    img: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
    count: 5,
    link: "fragrances",
  },
  {
    id: 9,
    category: "Smartphones",
    img: "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp",
    count: 16,
    link: "smartphones",
  },
  {
    id: 10,
    category: "Vehicle",
    img: "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/1.webp",
    count: 5,
    link: "vehcile",
  },
];

export const blogs = [
  {
    id: 1,
    img: "https://electrolyte1-store.myshopify.com/cdn/shop/articles/8-min_575x305_crop_center.jpg?v=1632570724",
    title: "Who avoids a pain that produces?",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptatibus sequi beatae explicabo accusamus sapiente excepturi, perspiciatis rem iusto, at nesciunt sint omnis doloribus illum. Enim rerum distinctio corporis aliquid?",
    date: "25 Sep 2024",
    auther: "By Spacing Tech",
    tags: [
      "Android",
      "Blog",
      "Device",
      "Engineer",
      "Gadget",
      "Mobile",
      "News",
      "Robot",
      "Smartphone",
    ],
    comments: {
      count: 2,
      data: [
        {
          id: 1,
          name: "Daxi Roy",
          date: "2 Nov 2025",
          comment:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.",
        },
        {
          id: 2,
          name: "Janet Chua",
          date: "3 Nov 2025",
          comment:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
        },
      ],
    },
  },
  {
    id: 2,
    img: "https://electrolyte1-store.myshopify.com/cdn/shop/articles/2-min_034f5504-6653-43e6-8c23-9f3d8774d921_575x305_crop_center.jpg?v=1632570022",
    title: "Wel illum qui dolorem eum fugiat?",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptatibus sequi beatae explicabo accusamus sapiente excepturi, perspiciatis rem iusto, at nesciunt sint omnis doloribus illum. Enim rerum distinctio corporis aliquid?",
    date: "25 Sep 2024",
    auther: "By Spacing Tech",
    tags: [
      "Android",
      "Blog",
      "Device",
      "Engineer",
      "Gadget",
      "Mobile",
      "News",
      "Robot",
      "Smartphone",
    ],
    comments: {
      count: 2,
      data: [
        {
          id: 1,
          name: "Noah James",
          date: "4 Nov 2025",
          comment:
            "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s standard dummy text ever since.",
        },
        {
          id: 2,
          name: "Carla Houston",
          date: "4 Nov 2025",
          comment:
            "If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill.",
        },
      ],
    },
  },
  {
    id: 3,
    img: "https://electrolyte1-store.myshopify.com/cdn/shop/articles/6-min_575x305_crop_center.jpg?v=1632570521",
    title: "Which of us ever undertakes?",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptatibus sequi beatae explicabo accusamus sapiente excepturi, perspiciatis rem iusto, at nesciunt sint omnis doloribus illum. Enim rerum distinctio corporis aliquid?",
    date: "25 Sep 2024",
    auther: "By Spacing Tech",
    tags: [
      "Android",
      "Blog",
      "Device",
      "Engineer",
      "Gadget",
      "Mobile",
      "News",
      "Robot",
      "Smartphone",
    ],
    comments: {
      count: 2,
      data: [
        {
          id: 1,
          name: "Ashley Rosa",
          date: "2 Nov 2025",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          name: "Oliver Jake",
          date: "2 Nov 2025",
          comment:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
      ],
    },
  },
  {
    id: 4,
    img: "https://electrolyte1-store.myshopify.com/cdn/shop/articles/3-min_b76cfe2e-e74c-4277-83ad-2a339490040a_575x305_crop_center.jpg?v=1632570079",
    title: "Where can I get some?",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptatibus sequi beatae explicabo accusamus sapiente excepturi, perspiciatis rem iusto, at nesciunt sint omnis doloribus illum. Enim rerum distinctio corporis aliquid?",
    date: "25 Sep 2024",
    auther: "By Spacing Tech",
    tags: [
      "Android",
      "Blog",
      "Device",
      "Engineer",
      "Gadget",
      "Mobile",
      "News",
      "Robot",
      "Smartphone",
    ],
    comments: {
      count: 2,
      data: [
        {
          id: 1,
          name: "Wesley Bates",
          date: "12 Nov 2025",
          comment:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
        },
        {
          id: 2,
          name: "Charlie Kyle",
          date: "12 Nov 2025",
          comment:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
      ],
    },
  },
  {
    id: 5,
    img: "https://electrolyte1-store.myshopify.com/cdn/shop/articles/5-min_a51a79a6-6116-4c4a-b486-7d19f04bb3f9_575x305_crop_center.jpg?v=1632570360",
    title: "Where does it come from?",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptatibus sequi beatae explicabo accusamus sapiente excepturi, perspiciatis rem iusto, at nesciunt sint omnis doloribus illum. Enim rerum distinctio corporis aliquid?",
    date: "25 Sep 2024",
    auther: "By Spacing Tech",
    tags: [
      "Android",
      "Blog",
      "Device",
      "Engineer",
      "Gadget",
      "Mobile",
      "News",
      "Robot",
      "Smartphone",
    ],
    comments: {
      count: 1,
      data: [
        {
          id: 1,
          name: "Amelia Margaret",
          date: "1 Nov 2025",
          comment:
            "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        },
      ],
    },
  },
  {
    id: 6,
    img: "https://electrolyte1-store.myshopify.com/cdn/shop/articles/1-min_4d8c0d04-e1c1-441f-b2f8-6a7db33b54d0_575x305_crop_center.jpg?v=1632569934",
    title: "Why do we use it?",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptatibus sequi beatae explicabo accusamus sapiente excepturi, perspiciatis rem iusto, at nesciunt sint omnis doloribus illum. Enim rerum distinctio corporis aliquid?",
    date: "25 Sep 2024",
    auther: "By Spacing Tech",
    tags: [
      "Android",
      "Blog",
      "Device",
      "Engineer",
      "Gadget",
      "Mobile",
      "News",
      "Robot",
      "Smartphone",
    ],
    comments: {
      count: 2,
      data: [
        {
          id: 1,
          name: "Emily emma",
          date: "8 Nov 2025",
          comment:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
        },
        {
          id: 2,
          name: "Tipene Darrow",
          date: "8 Nov 2025",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ],
    },
  },
  {
    id: 7,
    img: "https://electrolyte1-store.myshopify.com/cdn/shop/articles/7-min_575x305_crop_center.jpg?v=1632570635",
    title: "What is Lorem Ipsum?",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptatibus sequi beatae explicabo accusamus sapiente excepturi, perspiciatis rem iusto, at nesciunt sint omnis doloribus illum. Enim rerum distinctio corporis aliquid?",
    date: "25 Sep 2024",
    auther: "By Spacing Tech",
    tags: [
      "Android",
      "Blog",
      "Device",
      "Engineer",
      "Gadget",
      "Mobile",
      "News",
      "Robot",
      "Smartphone",
    ],
    comments: {
      count: 2,
      data: [
        {
          id: 1,
          name: "Charlotte Sarah",
          date: "4 Nov 2025",
          comment:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        },
        {
          id: 2,
          name: "Penny Albritton",
          date: "5 Nov 2025",
          comment:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
        },
      ],
    },
  },
];

export const accordionInfo1 = [
  {
    id: 1,
    title: "What is Lorem Ipsum?",
    list: [
      {
        id: 1,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 2,
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },

  {
    id: 2,
    title: "Why do we use it?",
    list: [
      {
        id: 1,
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        id: 2,
        description:
          "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      },
    ],
  },

  {
    id: 3,
    title: "Where does it come from?",
    list: [
      {
        id: 1,
        description:
          "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      },
    ],
  },

  {
    id: 4,
    title: "Where can I get some?",
    list: [
      {
        id: 1,
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      },
    ],
  },
];

export const accordionInfo2 = [
  {
    id: 1,
    title: "What is Lorem Ipsum?",
    list: [
      {
        id: 1,
        description:
          "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 2,
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },

  {
    id: 2,
    title: "Why do we use it?",
    list: [
      {
        id: 1,
        description:
          "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        id: 2,
        description:
          "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      },
    ],
  },

  {
    id: 3,
    title: "Where does it come from?",
    list: [
      {
        id: 1,
        description:
          "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      },
    ],
  },

  {
    id: 4,
    title: "Where can I get some?",
    list: [
      {
        id: 1,
        description:
          "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
      },
      {
        id: 2,
        description:
          "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      },
    ],
  },

  {
    id: 5,
    title: "What is Lorem Ipsum?",
    list: [
      {
        id: 1,
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },

  {
    id: 6,
    title: "Where does it come from?",
    list: [
      {
        id: 1,
        description:
          "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      },
    ],
  },
];

export const popularMethods = [
  {
    id: 1,
    img: `${visa}`,
    title: "Visa payment",
    subTitle: "Lorem Ipsum is printing & typesetting industry's standard text",
  },

  {
    id: 2,
    img: `${maestro}`,
    title: "Maestro payment",
    subTitle: "Lorem Ipsum is printing & typesetting industry's standard text",
  },

  {
    id: 3,
    img: `${paypal}`,
    title: "Paypal payment",
    subTitle: "Lorem Ipsum is printing & typesetting industry's standard text",
  },

  {
    id: 4,
    img: `${discover}`,
    title: "Discover payment",
    subTitle: "Lorem Ipsum is printing & typesetting industry's standard text",
  },

  {
    id: 5,
    img: `${master}`,
    title: "Master payment",
    subTitle: "Lorem Ipsum is printing & typesetting industry's standard text",
  },

  {
    id: 6,
    img: `${amex}`,
    title: "Express payment",
    subTitle: "Lorem Ipsum is printing & typesetting industry's standard text",
  },

  {
    id: 7,
    img: `${google}`,
    title: "Google payment",
    subTitle: "Lorem Ipsum is printing & typesetting industry's standard text",
  },

  {
    id: 8,
    img: `${paytm}`,
    title: "Paytm payment",
    subTitle: "Lorem Ipsum is printing & typesetting industry's standard text",
  },

  {
    id: 9,
    img: `${shopify}`,
    title: "Shopify payment",
    subTitle: "Lorem Ipsum is printing & typesetting industry's standard text",
  },
];

export const ourRules = [
  {
    id: 1,
    title: "Introduction words",
    subTitle:
      "There are many variations of passages of Lorem Ipsum available, by injected, or words which don't look even slightly believable.",
  },

  {
    id: 2,
    title: "Intellectual property",
    subTitle:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything hidden in the middle of text.",
  },

  {
    id: 3,
    title: "Your content",
    subTitle:
      "All the Lorem Ipsum generators on the Internet tend to repeat as necessary, making this the first true generator on the Internet.",
  },

  {
    id: 4,
    title: "Sever ability",
    subTitle:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence, to looks reasonable.",
  },

  {
    id: 5,
    title: "No majority",
    subTitle:
      "It was popularized in the 1960s with the release of sheets containing passages, and more recently versions of Lorem Ipsum.",
  },

  {
    id: 6,
    title: "Variation terms",
    subTitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, beatae vitae dicta sunt explicabo.",
  },

  {
    id: 7,
    title: "Sheets release",
    subTitle:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe sint et molestiae non recusandae.",
  },

  {
    id: 8,
    title: "Maxim placate",
    subTitle:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil maxime placeat facere possimus, omnis dolor repellendus.",
  },
];

export const orders = [
  {
    order: "#1457",
    date: "March 26, 2024",
    status: "	Proccessing",
    count: 1,
    price: 30,
  },

  {
    order: "#2394",
    date: "June 02, 2024",
    status: "Completed",
    count: 3,
    price: 55,
  },

  {
    order: "#4873",
    date: "Augest 16, 2024",
    status: "Completed",
    count: 1,
    price: 25,
  },

  {
    order: "#8083",
    date: "Sept 3, 2024",
    status: "	Proccessing",
    count: 2,
    price: 35,
  },
];
