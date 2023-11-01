import MainController from './controller/main/main-controller';
import './assets/style/style.sass';
import ServicesModel from './model/services-model';

const appContainer = document.querySelector('#app');

if ( !appContainer ) {
  throw new Error('Отсутствует контейнер приложения');
};

const servicesModel = new ServicesModel();
servicesModel.init();

const mainController = new MainController({
  servicesModel,
  appContainer,
});
mainController.init();
