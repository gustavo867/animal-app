import product_0 from '../assets/images/bird.jpg'
import product_1 from '../assets/images/sparrow.jpg';
import product_2 from '../assets/images/harley.jpg';
import product_3 from '../assets/images/sunshine.jpg';

import birdIcon from '../assets/images/icons/bird-icon.png'
import dogIcon from '../assets/images/icons/dog-icon.png'
import catIcon from '../assets/images/icons/cat-icon.png'

export function getBirds() {
    const data = [
      {
        id: '1',
        image: product_0,
        name: 'Bluebird',
        price: '$ 22.99',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus libero eget ligula posuere ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend, mi non sollicitudin venenatis, dolor ex condimentum nulla, a volutpat massa leo ut purus. Donec a nisi quam.',        
        category: 'Birds',
        rating: 4.5
      },
      {
        id: '2',
        image: product_1,
        name: 'Sparrow',
        price: '$ 22.99',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus libero eget ligula posuere ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend, mi non sollicitudin venenatis, dolor ex condimentum nulla, a volutpat massa leo ut purus. Donec a nisi quam.',
        category: 'Birds',
        rating: 3.9
      },
      {
        id: '3',
        image: product_2,
        name: 'Harley ||',
        price: '$ 22.99',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus libero eget ligula posuere ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend, mi non sollicitudin venenatis, dolor ex condimentum nulla, a volutpat massa leo ut purus. Donec a nisi quam.',       
        category: 'Birds',
        rating: 5.0
      },
      {
        id: '4',
        image: product_3,
        name: 'Sunshine',
        price: '$ 22.99',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus libero eget ligula posuere ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend, mi non sollicitudin venenatis, dolor ex condimentum nulla, a volutpat massa leo ut purus. Donec a nisi quam.',       
        category: 'Birds',
        rating: 3.2
      }
    ];
  
    return data;
  };

export function getCategories() {
  const categories = [
    {
      name: "Birds",
      image: birdIcon,
      color: '#BEE5BF'
    },
    {
      name: "Dogs",
      image: dogIcon,
      color: '#FFD1BA'
    },
    {
      name: "Cats",
      image: catIcon,
      color: 'rgba(206, 125, 165, 0.4)'
    },
  ]
  return categories
}