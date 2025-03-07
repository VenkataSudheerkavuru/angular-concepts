import { CanDeactivateFn} from '@angular/router';

export const canDeactivateAuthGuard: CanDeactivateFn<any> = (component) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
