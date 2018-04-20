// @flow
import type { Element } from 'react';
import { hydrate, unmountComponentAtNode } from 'react-dom';
import { Observable } from 'rxjs';

// render(
//   element: ReactComponent,
//   DomContainer: DOMNode
// ) => Observable[RootInstance]

export default function render(
  element: Element<any>,
  DOMContainer: HTMLElement,
) {
  return Observable.create(observer => {
    try {
      hydrate(element, DOMContainer, function() {
        observer.next(this);
      });
    } catch (e) {
      observer.error(e);
      return undefined;
    }

    return () => unmountComponentAtNode(DOMContainer);
  });
}
