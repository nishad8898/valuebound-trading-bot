const INITIAL_STATE = {
  bots: [
    {
      id: 1,
      bot: 'Hot Bot',
      description:
        'Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics',
      indexValue: 289.34,
      cagr: 34,
    },
    {
      id: 2,
      bot: 'Cool Bot',
      description:
        'Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics',
      indexValue: 439.34,
      cagr: 28,
    },
    {
      id: 3,
      bot: 'Options Bot',
      description:
        'Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics',
      indexValue: 139.34,
      cagr: 42,
    },
  ],
  cartItems: [],
};

const botReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_BOT_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default botReducer;
