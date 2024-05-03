import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Export1531 } from "@workspace/project28";
import { fromEvent, merge, Subject, Subscription, timer } from "rxjs";
import {
  debounce,
  filter,
  map,
  pairwise,
  startWith,
  takeUntil,
  tap,
} from "rxjs/operators";

export const Export2143 = 0;
