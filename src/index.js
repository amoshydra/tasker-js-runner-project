import TaskerJs from 'tasker-js-runner';

// modules
import battery from './modules/battery';

new TaskerJs({
  'Battery:Changed': battery,
});
