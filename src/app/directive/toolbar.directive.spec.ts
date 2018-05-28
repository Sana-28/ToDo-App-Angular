import { ToolbarDirective } from './toolbar.directive';

import { Directive, ElementRef, Input, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap,NavigationEnd } from '@angular/router';

describe('ToolbarDirective', () => {
  it('should create an instance', () => {
    const directive = new ToolbarDirective( Router, ElementRef, ActivatedRoute);
    expect(directive).toBeTruthy();
  });
});
