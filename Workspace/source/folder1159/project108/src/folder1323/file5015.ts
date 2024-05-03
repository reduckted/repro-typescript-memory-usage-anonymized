import { hasModifierKey } from "@angular/cdk/keycodes";
import {
  ConnectedPosition,
  ConnectionPositionPair,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
  ScrollStrategy,
} from "@angular/cdk/overlay";
import { ComponentPortal, TemplatePortal } from "@angular/cdk/portal";
import { DOCUMENT } from "@angular/common";
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injector,
  NgZone,
  OnDestroy,
  Optional,
  Output,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { Export1531, Export1596 } from "@workspace/project28";
import { fromEvent, merge, Observable, race, Subscription } from "rxjs";
import { filter, map, takeUntil, tap, withLatestFrom } from "rxjs/operators";

import { Export2127, Export2128 } from "../folder1320";
import { Export2125 } from "../folder1320/folder1321/file5009";
import { Export1665 } from "../folder1324/file5020";

import { Export2134, Export2135 } from "./file5016";
import { Export2136 } from "./file5019";

export const Export2132 = 0;

export type Export1651 = 0;

export type Export2130 = 0;

export type Export2131 = 0;
