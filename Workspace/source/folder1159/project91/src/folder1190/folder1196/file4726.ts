import { Directionality } from "@angular/cdk/bidi";
import { ListRange } from "@angular/cdk/collections";
import {
  CdkScrollable,
  CdkVirtualScrollRepeater,
  CdkVirtualScrollViewport,
  ScrollDispatcher,
  VIRTUAL_SCROLL_STRATEGY,
} from "@angular/cdk/scrolling";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { Export1596, Export1614 } from "@workspace/project28";
import {
  animationFrameScheduler,
  asapScheduler,
  fromEvent,
  Observable,
  Observer,
  Subject,
  Subscription,
} from "rxjs";
import { auditTime, startWith, takeUntil, tap } from "rxjs/operators";

import { Export2265 } from "../../folder1206";

export const Export2241 = 0;
