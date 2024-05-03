import { CollectionViewer, ListRange } from "@angular/cdk/collections";
import {
  CdkVirtualScrollRepeater,
  CdkVirtualScrollViewport,
} from "@angular/cdk/scrolling";
import {
  CdkTable,
  DataSource,
  STICKY_POSITIONING_LISTENER,
} from "@angular/cdk/table";
import { Directive, Input, NgZone, OnDestroy } from "@angular/core";
import { Export1531 } from "@workspace/project28";
import { Observable, of, Subject } from "rxjs";
import {
  pairwise,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from "rxjs/operators";

import { Export1584 } from "../../folder1206";
import { Export2280 } from "../../folder1206/file4748";

export const Export2281 = 0;
