const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;
export const plantsArray = [
  { category: 'Easy-Care Favorites', plants: [
    { id: 'snake-plant', name: 'Snake Plant', price: 18, image: photo('photo-1593482892290-f54927ae2b8b') },
    { id: 'golden-pothos', name: 'Golden Pothos', price: 14, image: photo('photo-1501004318641-b39e6451bec6') },
    { id: 'zz-plant', name: 'ZZ Plant', price: 22, image: photo('photo-1485955900006-10f4d324d411') },
    { id: 'aloe-vera', name: 'Aloe Vera', price: 12, image: photo('photo-1459411552884-841db9b3cc2a') },
    { id: 'jade-succulent', name: 'Jade Succulent', price: 16, image: photo('photo-1459411552884-841db9b3cc2a') },
    { id: 'rubber-plant', name: 'Rubber Plant', price: 26, image: photo('photo-1509423350716-97f9360b4e09') }
  ]},
  { category: 'Tropical Statement Plants', plants: [
    { id: 'monstera', name: 'Monstera Deliciosa', price: 32, image: photo('photo-1614594975525-e45190c55d0b') },
    { id: 'bird-paradise', name: 'Bird of Paradise', price: 45, image: photo('photo-1509423350716-97f9360b4e09') },
    { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', price: 39, image: photo('photo-1614594975525-e45190c55d0b') },
    { id: 'calathea', name: 'Calathea', price: 24, image: photo('photo-1501004318641-b39e6451bec6') },
    { id: 'philodendron', name: 'Philodendron', price: 21, image: photo('photo-1497250681960-ef046c08a56e') },
    { id: 'areca-palm', name: 'Areca Palm', price: 34, image: photo('photo-1509423350716-97f9360b4e09') }
  ]},
  { category: 'Calm & Airy Greens', plants: [
    { id: 'peace-lily', name: 'Peace Lily', price: 20, image: photo('photo-1497250681960-ef046c08a56e') },
    { id: 'boston-fern', name: 'Boston Fern', price: 19, image: photo('photo-1509423350716-97f9360b4e09') },
    { id: 'spider-plant', name: 'Spider Plant', price: 15, image: photo('photo-1501004318641-b39e6451bec6') },
    { id: 'parlor-palm', name: 'Parlor Palm', price: 23, image: photo('photo-1509423350716-97f9360b4e09') },
    { id: 'heartleaf-philodendron', name: 'Heartleaf Philodendron', price: 17, image: photo('photo-1497250681960-ef046c08a56e') },
    { id: 'succulent-trio', name: 'Succulent Trio', price: 25, image: photo('photo-1459411552884-841db9b3cc2a') }
  ]}
];