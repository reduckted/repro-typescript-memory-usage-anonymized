import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {
  ConfigurableFocusTrap,
  ConfigurableFocusTrapFactory,
} from "@angular/cdk/a11y";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  TemplatePortal,
} from "@angular/cdk/portal";
import { DOCUMENT } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  OnDestroy,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { Export1596, Export1614 } from "@workspace/project28";
import { Export2095, Export2096, Export2097 } from "@workspace/project96";
import { fromEvent, Subject, takeUntil, tap } from "rxjs";

export const Export2098 = 0;
