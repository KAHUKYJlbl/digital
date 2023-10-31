import { render } from '../abstract/render/render';
import { ServiceType } from '../model/types';
import ServiceView from '../view/service/service-view';

export function addService (container: Element | null | undefined, props: ServiceType) {
  const service = new ServiceView(props);

  if (container && !container.contains(service.element)) {
    render(service, container);
  } else {
    console.log(container);
  }
};