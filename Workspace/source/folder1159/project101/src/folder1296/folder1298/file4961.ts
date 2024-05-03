import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  HostBinding,
  Input,
  TemplateRef,
} from "@angular/core";
import {
  AbstractControl,
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormControl,
} from "@angular/forms";
import { Export1606, Export1531, Export1596 } from "@workspace/project28";
import { BehaviorSubject, Observable, Subscription, tap } from "rxjs";
import { filter, map, pairwise, startWith, takeUntil } from "rxjs/operators";

import { Export136 } from "../../folder1300";

export const Export2065 = 0;
