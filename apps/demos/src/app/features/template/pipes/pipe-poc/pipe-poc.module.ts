import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { RouterModule } from '@angular/router';
import { RxPush } from '@rx-angular/template/push';
import { RxLet } from '@rx-angular/template/let';
import { UnpatchModule } from '@rx-angular/template/unpatch';
import { PipeModule } from '../../../../rx-angular-pocs/template/pipes/pipe/pipe.module';
import { DirtyChecksModule } from '../../../../shared/debug-helper/dirty-checks';
import { PipePocComponent } from './pipe-poc.component';
import { ROUTES } from './pipe-poc.routes';

const DECLARATIONS = [PipePocComponent];

@NgModule({
  declarations: [DECLARATIONS],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    PipeModule,
    DirtyChecksModule,
    MatButtonModule,
    UnpatchModule,
    RxPush,
    RxLet,
  ],
  exports: [DECLARATIONS],
})
export class PipePocModule {}
