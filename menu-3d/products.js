export const PRODUCTS = [
  {
    id: "burger",
    name: "Burger",
    basePrice: 7.90,
    arModel: "burger.glb",
    options: {
      menu: {
        label: "En menu ?",
        choices: [
          { label: "Non", price: 0 },
          { label: "Oui (+ frites + boisson)", price: 3.00 }
        ]
      },
      fries: {
        label: "Type de frites",
        choices: [
          { label: "Classiques", price: 0 },
          { label: "Cheddar", price: 1.50 },
          { label: "Potatoes", price: 1.00 }
        ]
      },
      drink: {
        label: "Boisson",
        choices: [
          { label: "Coca", price: 0 },
          { label: "Fanta", price: 0 },
          { label: "Eau", price: 0 }
        ]
      }
    }
  },

  {
    id: "tacos",
    name: "Tacos",
    basePrice: 8.50,
    arModel: "burger.glb",
    options: {
      menu: {
        label: "En menu ?",
        choices: [
          { label: "Non", price: 0 },
          { label: "Oui (+ frites + boisson)", price: 3.00 }
        ]
      },
      fries: {
        label: "Type de frites",
        choices: [
          { label: "Classiques", price: 0 },
          { label: "Cheddar", price: 1.50 }
        ]
      },
      drink: {
        label: "Boisson",
        choices: [
          { label: "Coca", price: 0 },
          { label: "Ice Tea", price: 0 }
        ]
      }
    }
  }
];
