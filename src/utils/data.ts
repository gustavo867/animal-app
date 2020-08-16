import product_0 from '../assets/images/bird.jpg'
import product_1 from '../assets/images/sparrow.jpg';
import product_2 from '../assets/images/bird.jpg';
import product_3 from '../assets/images/sunshine.jpg';

export function getBirds() {
    const data = [
      {
        id: '1',
        image: product_0,
        name: 'Bluebird',
        price: '$ 22.99',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus libero eget ligula posuere ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend, mi non sollicitudin venenatis, dolor ex condimentum nulla, a volutpat massa leo ut purus. Donec a nisi quam. Etiam quis ultricies eros, quis fermentum tortor. Cras scelerisque enim velit, et euismod quam lacinia vitae. Ut mattis interdum massa, luctus mattis sapien viverra vel. Integer efficitur arcu et neque hendrerit convallis. In lacinia tincidunt enim. Quisque sem justo, ultrices et diam ut, rutrum porta diam. Nunc convallis, metus vitae tincidunt elementum, mauris metus ultricies orci, eget elementum tortor arcu eu tortor. Sed sem orci, vehicula vitae porta quis, pulvinar vitae odio. Nulla fermentum sagittis arcu at pulvinar. Nunc ac bibendum orci. Proin tempus nisl id lectus sollicitudin, nec dapibus nisl rhoncus. Duis nec nisi nunc.',        
        category: 'Birds',
      },
      {
        id: '2',
        image: product_1,
        name: 'Sparrow',
        price: '$ 22.99',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus libero eget ligula posuere ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend, mi non sollicitudin venenatis, dolor ex condimentum nulla, a volutpat massa leo ut purus. Donec a nisi quam. Etiam quis ultricies eros, quis fermentum tortor. Cras scelerisque enim velit, et euismod quam lacinia vitae. Ut mattis interdum massa, luctus mattis sapien viverra vel. Integer efficitur arcu et neque hendrerit convallis. In lacinia tincidunt enim. Quisque sem justo, ultrices et diam ut, rutrum porta diam. Nunc convallis, metus vitae tincidunt elementum, mauris metus ultricies orci, eget elementum tortor arcu eu tortor. Sed sem orci, vehicula vitae porta quis, pulvinar vitae odio. Nulla fermentum sagittis arcu at pulvinar. Nunc ac bibendum orci. Proin tempus nisl id lectus sollicitudin, nec dapibus nisl rhoncus. Duis nec nisi nunc.',
        category: 'Birds',
      },
      {
        id: '3',
        image: product_2,
        name: 'Harley ||',
        price: '$ 22.99',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus libero eget ligula posuere ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend, mi non sollicitudin venenatis, dolor ex condimentum nulla, a volutpat massa leo ut purus. Donec a nisi quam. Etiam quis ultricies eros, quis fermentum tortor. Cras scelerisque enim velit, et euismod quam lacinia vitae. Ut mattis interdum massa, luctus mattis sapien viverra vel. Integer efficitur arcu et neque hendrerit convallis. In lacinia tincidunt enim. Quisque sem justo, ultrices et diam ut, rutrum porta diam. Nunc convallis, metus vitae tincidunt elementum, mauris metus ultricies orci, eget elementum tortor arcu eu tortor. Sed sem orci, vehicula vitae porta quis, pulvinar vitae odio. Nulla fermentum sagittis arcu at pulvinar. Nunc ac bibendum orci. Proin tempus nisl id lectus sollicitudin, nec dapibus nisl rhoncus. Duis nec nisi nunc.',       
        category: 'Birds',
      },
      {
        id: '4',
        image: product_3,
        name: 'Sunshine',
        price: '$ 22.99',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus libero eget ligula posuere ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend, mi non sollicitudin venenatis, dolor ex condimentum nulla, a volutpat massa leo ut purus. Donec a nisi quam. Etiam quis ultricies eros, quis fermentum tortor. Cras scelerisque enim velit, et euismod quam lacinia vitae. Ut mattis interdum massa, luctus mattis sapien viverra vel. Integer efficitur arcu et neque hendrerit convallis. In lacinia tincidunt enim. Quisque sem justo, ultrices et diam ut, rutrum porta diam. Nunc convallis, metus vitae tincidunt elementum, mauris metus ultricies orci, eget elementum tortor arcu eu tortor. Sed sem orci, vehicula vitae porta quis, pulvinar vitae odio. Nulla fermentum sagittis arcu at pulvinar. Nunc ac bibendum orci. Proin tempus nisl id lectus sollicitudin, nec dapibus nisl rhoncus. Duis nec nisi nunc.',       
        category: 'Birds',
      }
    ];
  
    return data;
  };

export function getCategories() {
  const categories = [
    "All",
    "Birds",
    "Dogs",
    "Cats"
  ]
  return categories
}