import MainController from './controller/main/main-controller';
import './assets/style/style.sass';

const appContainer = document.querySelector('#app');

if ( !appContainer ) {
  throw new Error('Отсутствует контейнер приложения');
};

const mainController = new MainController({
  appContainer,
});

mainController.init();
