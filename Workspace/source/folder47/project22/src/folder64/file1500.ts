import { Inject, Injectable } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
  Router,
} from "@angular/router";
import { Actions, createEffect, EffectsModule, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Export1531, Export2570 } from "@workspace/project28";
import { Export1930, Export1907 } from "@workspace/project38";
import { forkJoin, from, Observable, of } from "rxjs";
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  takeUntil,
  tap,
} from "rxjs/operators";

import { Export2569 } from "../folder52/folder54";
import { Export2565, Export2566 } from "../folder59/folder60";
import { Export4294 } from "../folder59/folder61";

import { Export2933 } from "./file1497";
import {
  Export4302,
  Export4308,
  Export4297,
  Export2939,
  Export4303,
  Export4298,
  Export4307,
  Export2567,
  Export2568,
  Export4306,
  Export4301,
  Export2941,
} from "./file1499";

export const Export4311 = 0;

export const Export4312 = 0;
