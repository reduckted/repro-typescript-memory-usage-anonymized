import {
  Injectable,
  InjectionToken,
  Injector,
  OnDestroy,
  Type,
} from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Params,
  PRIMARY_OUTLET,
  Router,
} from "@angular/router";
import { Export1531 } from "@workspace/project28";
import { BehaviorSubject, combineLatest, Observable, of } from "rxjs";
import {
  distinctUntilChanged,
  filter,
  map,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from "rxjs/operators";

import { Export2208, Export2209 } from "../../file4679";
import { Export2206 } from "../folder1170";
import { Export2210 } from "../folder1172";

export const Export2204 = 0;

export interface Export2203 {}
