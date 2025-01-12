import { combineReducers }  from 'redux';
import { routeReducer }     from 'react-router-redux';
import session              from './session';
import registration         from './registration';
import header               from './header';
import timer                from './timer';
import timeEntries          from './time_entries';
import reports              from './reports';

export default combineReducers({
  routing: routeReducer,
  session: session,
  registration: registration,
  header: header,
  timer: timer,
  timeEntries: timeEntries,
  reports: reports,
});
