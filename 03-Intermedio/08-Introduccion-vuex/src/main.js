import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import App from './App.vue';
import router from './router'; // Impostamos router
import store from './store';

// Registro automatico de componentes BASE y de manera automatica
// import BaseForm from '@/components/BaseForm'

// Vue.component('BaseForm', BaseForm);

// Automatic registration

Vue.config.productionTip = false;

const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/,
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, ''),
    ),
  );


  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig,
  );
});

new Vue({
  router, // Inyectamos a la instancia principal el router
  store,
  render: (h) => h(App),
}).$mount('#app');