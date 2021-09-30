import { combineReducers } from 'redux';

import botReducer from './bot/bot.reducer';

export default combineReducers({
  botData: botReducer,
});
