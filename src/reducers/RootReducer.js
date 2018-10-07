const initState = {
  products: [
    {
      id: '1',
      product: 'Cracking the Coding Interview',
      price: '$50',
      condition: 'Used',
      category: 'Books',
      desc: 'A must have for coding interview preparation.',
      images: [
        {id: '1', url: '/images/ctci-front.jpg', alt: 'front cover of ctci'},
        {id: '2', url: '/images/ctci-back.jpg', alt: 'back cover of ctci'}
      ]
    },
    {
      id: '2',
      product: 'Western Digital 4TB Portable Hard Disc',
      price: '$120',
      condition: 'Used',
      category: 'Electronic gadgets',
      desc: 'Back up your precious, beautiful memories.',
      images: [
        {id: '1', url: '/images/wd-1.jpg', alt: 'front of wd'},
        {id: '2', url: '/images/wd-2.jpg', alt: 'back of wd'},
        {id: '3', url: '/images/wd-2.jpg', alt: 'back of wd'},
        {id: '4', url: '/images/wd-2.jpg', alt: 'back of wd'},
      ]
    },
    {
      id: '3',
      product: 'Discrete Event System Simulation',
      price: '$20',
      condition: 'Used',
      category: 'Books',
      desc: 'Supplementary text for IE3110.',
      images: [
        {id: '1', url: '/images/dess-1.jpg', alt: 'front of dess'},
        {id: '2', url: '/images/dess-2.jpg', alt: 'back of dess'}
      ]
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;