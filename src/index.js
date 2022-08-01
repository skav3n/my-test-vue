import TestVueButton from './components/TestVueButton.vue';

export default {
  install: (app, options) => {
    app.component('TestVueButton', TestVueButton);
  },
};
