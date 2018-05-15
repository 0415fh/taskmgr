import { trigger, state, transition, style, animate } from '@angular/animations';
export const itemAnim = trigger('item', [
  state('inWidth', style({'border-left-width': '3px'})),
  state('outWidth', style({'border-left-width': '8px'})),
  transition('inWidth => outWidth', animate('100ms ease-in')),
  transition('outWidth => inWidth', animate('100ms ease-out')),
]);
