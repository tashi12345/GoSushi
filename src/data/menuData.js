import makiRollImg from '../assets/maki_roll.png';
import sushiBoxImg from '../assets/sushi_box.png';
import heroBgImg from '../assets/hero_bg.png';

export const MENU_DATA = [
  // Popular Items
  { id: 1, name: 'BYOB Classic', price: 1279, category: 'Popular', description: 'Build your own box with your choice of 8 pieces. Hand-rolled to perfection with premium ingredients.', image: makiRollImg },
  { id: 2, name: 'Crunchy Maki Roll', price: 1599, category: 'Popular', description: 'Crispy tempura maki rolls topped with spicy mayo, tobiko, and toasted sesame seeds.', image: makiRollImg },
  { id: 3, name: 'Dynamite California Roll', price: 2199, category: 'Popular', description: 'Our signature California roll with a fiery dynamite sauce, avocado, and crab.', image: makiRollImg },

  // Pau Pau Favorites
  { id: 4, name: 'Winter Wonders Box', price: 2719, category: 'Pau Pau', description: 'A seasonal special curated by our master chefs. 12 pieces of assorted premium sushi.', image: sushiBoxImg },
  { id: 5, name: 'Sushi Dream Box', price: 2719, category: 'Pau Pau', description: 'The ultimate bento experience — fresh edamame, miso, nigiri, and maki rolls.', image: sushiBoxImg },
  { id: 6, name: 'Salmon Lovers Box', price: 2999, category: 'Pau Pau', description: 'For salmon enthusiasts: sashimi, nigiri, and salmon avocado maki in one box.', image: sushiBoxImg },

  // Sushi Platters
  { id: 7, name: 'Party Platter (4 Person)', price: 4999, category: 'Platters', description: 'A stunning platter with 32 pieces of assorted maki, nigiri, and sashimi.', image: heroBgImg },
  { id: 8, name: 'Grand Platter (6 Person)', price: 7199, category: 'Platters', description: 'Our deluxe mega platter — 48 pieces. Perfect for celebrations and gatherings.', image: heroBgImg },

  // Chef Special
  { id: 9, name: 'Crispy Tempura Roll', price: 2199, category: 'Chef Special', description: 'Golden crispy tempura shrimp roll with avocado and our secret sweet chili glaze.', image: makiRollImg },
  { id: 10, name: 'Dragon Roll', price: 2499, category: 'Chef Special', description: 'Eel and cucumber inside, topped with thinly sliced avocado and unagi sauce.', image: makiRollImg },
  { id: 11, name: 'Rainbow Roll', price: 2699, category: 'Chef Special', description: 'California roll draped with assorted sashimi — tuna, salmon, yellowtail, and shrimp.', image: heroBgImg },

  // Add Ons
  { id: 12, name: 'Edamame', price: 499, category: 'Sides', description: 'Steamed soy beans lightly salted. A refreshing Japanese appetizer.', image: sushiBoxImg },
  { id: 13, name: 'Miso Soup', price: 399, category: 'Sides', description: 'Traditional Japanese miso with tofu, seaweed, and spring onions.', image: sushiBoxImg },
  { id: 14, name: 'Gyoza (6 pcs)', price: 899, category: 'Sides', description: 'Pan-fried Japanese dumplings served with our house ponzu dipping sauce.', image: makiRollImg },

  // Beverages
  { id: 15, name: 'Matcha Latte', price: 599, category: 'Drinks', description: 'Ceremonial grade matcha whisked with steamed milk. Hot or iced.', image: sushiBoxImg },
  { id: 16, name: 'Ramune Soda', price: 349, category: 'Drinks', description: 'Classic Japanese marble soda. Available in Original, Strawberry, and Melon.', image: sushiBoxImg },
];

export const CATEGORIES = ['All', 'Popular', 'Pau Pau', 'Platters', 'Chef Special', 'Sides', 'Drinks'];

export const BRANCHES = [
  { id: 'br-1', name: 'Go Sushi — Gulberg', city: 'Lahore', address: 'Main Boulevard, Gulberg III', phone: '+92 300 1234567', status: 'active' },
  { id: 'br-2', name: 'Go Sushi — DHA', city: 'Lahore', address: 'Y-Block, Phase 3, DHA', phone: '+92 300 7654321', status: 'active' },
  { id: 'br-3', name: 'Go Sushi — Johar Town', city: 'Lahore', address: 'Block G1, Johar Town', phone: '+92 300 9876543', status: 'inactive' },
];
