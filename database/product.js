import blueDrink from "../public/assets/blue-drink.png"
import yellowDrink from "../public/assets/yellow-drink.png"
import purpleDrink from "../public/assets/purple-drink.png"


export const productList = [
  {
    id: 1,
    category: 1,
    name: "Trà sữa",
    price: {
      "M": 20000,
      "L:": 25000
    },
    discount: {
      active: false,
      amount: null
    },
    image: blueDrink,
    desc: "Description",
    isAvailable: true,
  },
  {
    id: 2,
    category: 1,
    name: "Trà sữa Trân Châu Khaoxin",
    price: {
      "M": 30000,
      "L:": 35000
    },
    discount: {
      active: false,
      amount: null
    },
    image: yellowDrink,
    desc: "Description",
    isAvailable: true,
  },
  {
    id: 3,
    category: 1,
    name: "Trà trái cây nhiệt đới abc",
    price: {
      "M": 10000,
      "L:": 15000
    },
    discount: {
      active: false,
      amount: null
    },
    image: purpleDrink,
    desc: "Description",
    isAvailable: true,
  },
  {
    id: 4,
    category: 1,
    name: "Trà sữa QWERTY",
    price: {
      "M": 40000,
      "L:": 55000
    },
    discount: {
      active: false,
      amount: null
    },
    image: blueDrink,
    desc: "Description",
    isAvailable: true,
  },
]