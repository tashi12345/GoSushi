// Authentic Go Sushi images from Foodpanda
const FP = 'https://images.deliveryhero.io/image/fd-pk/Products/';
const img = (id) => `${FP}${id}.jpg?width=800&height=800`;

// Restaurant hero
export const HERO_IMAGE = 'https://images.deliveryhero.io/image/fd-pk/Restaurants/xcph.jpg?width=1200';

export const MENU_DATA = [
  // Popular Items
  { id: 1, name: 'BYOB Classic', price: 1279, category: 'Popular', description: 'Build your own box with your choice of 8 pieces. Hand-rolled to perfection with premium ingredients.', image: img('8786969') },
  { id: 2, name: 'Crunchy Maki Roll', price: 1599, category: 'Popular', description: 'Crispy tempura maki rolls topped with spicy mayo, tobiko, and toasted sesame seeds.', image: img('8786969') },
  { id: 3, name: 'Dynamite California Roll', price: 2199, category: 'Popular', description: 'Our signature California roll with a fiery dynamite sauce, avocado, and crab.', image: img('8787012') },
  { id: 4, name: 'Spicy California Roll', price: 1899, category: 'Popular', description: 'Classic California roll kicked up with our house spicy sauce blend.', image: img('8787069') },
  { id: 5, name: 'Volcano Maki', price: 1799, category: 'Popular', description: 'Explosive flavors with baked seafood, spicy mayo, and tempura crunch on top.', image: img('8787252') },
  { id: 6, name: 'Philadelphia Roll', price: 1699, category: 'Popular', description: 'Creamy Philadelphia cream cheese with fresh salmon and cucumber.', image: img('9133856') },

  // Pau Pau Favorites
  { id: 7, name: 'Winter Wonders Box', price: 2719, category: 'Pau Pau', description: 'A seasonal special curated by our master chefs. 12 pieces of assorted premium sushi.', image: img('9133854') },
  { id: 8, name: 'Sushi Dream Box', price: 2719, category: 'Pau Pau', description: 'The ultimate bento experience — fresh edamame, miso, nigiri, and maki rolls.', image: img('9133854') },
  { id: 9, name: 'Salmon Lovers Box', price: 2999, category: 'Pau Pau', description: 'For salmon enthusiasts: sashimi, nigiri, and salmon avocado maki in one box.', image: img('8787223') },

  // Sushi Platters
  { id: 10, name: 'Party Platter (4 Person)', price: 4999, category: 'Platters', description: 'A stunning platter with 32 pieces of assorted maki, nigiri, and sashimi.', image: img('9133514') },
  { id: 11, name: 'Grand Platter (6 Person)', price: 7199, category: 'Platters', description: 'Our deluxe mega platter — 48 pieces. Perfect for celebrations and gatherings.', image: img('9133514') },

  // Chef Special
  { id: 12, name: 'Crispy Tempura Roll', price: 2199, category: 'Chef Special', description: 'Golden crispy tempura shrimp roll with avocado and our secret sweet chili glaze.', image: img('8803872') },
  { id: 13, name: 'Dragon Roll', price: 2499, category: 'Chef Special', description: 'Eel and cucumber inside, topped with thinly sliced avocado and unagi sauce.', image: img('8787252') },
  { id: 14, name: 'Salmon Sashimi', price: 1899, category: 'Chef Special', description: 'Premium fresh salmon sliced to perfection. Served with wasabi and pickled ginger.', image: img('9133477') },
  { id: 15, name: 'Rainbow Roll', price: 2699, category: 'Chef Special', description: 'California roll draped with assorted sashimi — tuna, salmon, yellowtail, and shrimp.', image: img('8787012') },

  // Sides
  { id: 16, name: 'Dynamite Prawns', price: 899, category: 'Sides', description: 'Crispy fried prawns tossed in dynamite sauce. A Go Sushi fan favorite.', image: img('8707612') },
  { id: 17, name: 'Prawns Tempura', price: 1099, category: 'Sides', description: 'Lightly battered and golden fried tiger prawns served with tempura dipping sauce.', image: img('8803872') },
  { id: 18, name: 'Crab Kanikama Nigiri', price: 599, category: 'Sides', description: 'Sweet crab stick on a bed of seasoned sushi rice, brushed with soy.', image: img('8786865') },
  { id: 19, name: 'Edamame', price: 499, category: 'Sides', description: 'Steamed soy beans lightly salted. A refreshing Japanese appetizer.', image: img('9133477') },
  { id: 20, name: 'Miso Soup', price: 399, category: 'Sides', description: 'Traditional Japanese miso with tofu, seaweed, and spring onions.', image: img('9133477') },

  // Drinks
  { id: 21, name: 'Matcha Latte', price: 599, category: 'Drinks', description: 'Ceremonial grade matcha whisked with steamed milk. Hot or iced.', image: img('9133854') },
  { id: 22, name: 'Ramune Soda', price: 349, category: 'Drinks', description: 'Classic Japanese marble soda. Available in Original, Strawberry, and Melon.', image: img('9133854') },
];

export const CATEGORIES = ['All', 'Popular', 'Pau Pau', 'Platters', 'Chef Special', 'Sides', 'Drinks'];

export const BRANCHES = [
  { id: 'br-1', name: 'Go Sushi — Gulberg', city: 'Lahore', address: 'Main Boulevard, Gulberg III', phone: '+92 300 1234567', status: 'active' },
  { id: 'br-2', name: 'Go Sushi — DHA', city: 'Lahore', address: 'Y-Block, Phase 3, DHA', phone: '+92 300 7654321', status: 'active' },
  { id: 'br-3', name: 'Go Sushi — Johar Town', city: 'Lahore', address: 'Block G1, Johar Town', phone: '+92 300 9876543', status: 'inactive' },
];
