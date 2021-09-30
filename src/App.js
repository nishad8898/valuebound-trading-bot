import './App.scss';

import { Route, Switch, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addBotToCart } from './redux/bot/bot.action';

//main app component
const App = () => {
  return (
    <div className='App'>
      <Route path='/' component={NavBar} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/bots' component={BotsPage} />
        <Route path='/bots-details/:botid' component={BotDetailsCard} />
      </Switch>
    </div>
  );
};

//navigation bar component
const NavBar = () => {
  const cartItems = useSelector((state) => state.botData.cartItems);
  return (
    <div className='nav'>
      <Link to='/' className='dashboard'>
        <p>dashboard</p>
      </Link>
      <div className='cart'>
        <p>cart - {cartItems.length}</p>
      </div>
    </div>
  );
};

//homepage component
const HomePage = () => {
  return (
    <div className='home-page'>
      <Link to='/bots'>Click for Available bots</Link>
    </div>
  );
};

//botspage component
const BotsPage = (props) => {
  const bots = useSelector((state) => state.botData.bots);

  return (
    <div className='bots-page'>
      {bots.map((bot) => (
        <BotItemCard key={bot.id} {...bot} {...props} />
      ))}
    </div>
  );
};

//bot details card component
const BotDetailsCard = ({ match }) => {
  const dispatch = useDispatch();
  const bots = useSelector((state) => state.botData.bots);

  const { id, bot, description, indexValue, cagr } = bots.find(
    (bot) => bot.id.toString() === match.params.botid.toString()
  );

  return (
    <div className='bot-details'>
      <div className='container'>
        <div className='content'>
          <h5>{bot}</h5>
          <p>{description}</p>
          <button
            onClick={() =>
              dispatch(addBotToCart({ id, bot, description, indexValue, cagr }))
            }>
            buy
          </button>
        </div>
        <div className='index'>
          <span className='title'>index value</span>
          <span className='value'>{indexValue}</span>
        </div>
        <div className='cagr'>
          <span className='title'>cagr</span>
          <span className='value'>{cagr}%</span>
        </div>
      </div>
    </div>
  );
};

//bot item card component
const BotItemCard = (props) => {
  const { id, bot, description, indexValue, cagr, history } = props;
  const dispatch = useDispatch();

  return (
    <div className='bot-card'>
      <h5>{bot}</h5>
      <div className='index'>
        <span className='title'>index value</span>
        <span className='value'>{indexValue}</span>
      </div>
      <div className='cagr'>
        <span className='title'>cagr</span>
        <span className='value'>{cagr}%</span>
      </div>
      <div className='bot-btn'>
        <button
          className='view-algo'
          onClick={() => history.push(`/bots-details/${id}`)}>
          view algo
        </button>
        <button
          className='buy-bot'
          onClick={() =>
            dispatch(addBotToCart({ id, bot, description, indexValue, cagr }))
          }>
          buy
        </button>
      </div>
    </div>
  );
};

export default App;
