export default {
  enter(locals, tasker) {
    tasker.console.log('Plugged: ', tasker.global('BATT'));
  },
  
  exit() {
  }
};
