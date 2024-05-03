import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { FocusKeyManager, FocusOrigin } from "@angular/cdk/a11y";
import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";
import { hasModifierKey } from "@angular/cdk/keycodes";
import {
  ConnectedPosition,
  STANDARD_DROPDOWN_BELOW_POSITIONS,
} from "@angular/cdk/overlay";
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  NgZone,
  OnDestroy,
  Output,
  QueryList,
} from "@angular/core";
import { Export2080, Export2081 } from "@workspace/project26";
import { Export1531 } from "@workspace/project28";
import { Export2082, Export2070 } from "@workspace/project104";
import { defer, merge, Observable } from "rxjs";
import { startWith, switchMap, take, takeUntil, tap } from "rxjs/operators";

import { Export2408 } from "../../folder1255/file4881";
import { Export2409 } from "../../folder1255/file4882";
import { Export2410, Export2411 } from "../folder1253/file4877";
import { Export2412 } from "../folder1254/file4879";

export const Export2413 = 0;
