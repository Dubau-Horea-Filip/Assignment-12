import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { SpellComponent } from './spell/spell.component';
import { CastedSpellComponent } from './casted-spell/casted-spell.component';
import { WandComponent } from './wand/wand.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardNewComponent } from './wizard/wizard-new/wizard-new.component';
import { WizardDeleteComponent } from './wizard/wizard-delete/wizard-delete.component';
import { WizardFilterComponent } from './wizard/wizard-filter/wizard-filter.component';
import { WizardListComponent } from './wizard/wizard-list/wizard-list.component';
import { WizardSortComponent } from './wizard/wizard-sort/wizard-sort.component';
import { WizardUpdateComponent } from './wizard/wizard-update/wizard-update.component';
import { WizardDetailComponent } from './wizard/wizard-detail/wizard-detail.component';
import { SpellDeleteComponent } from './spell/spell-delete/spell-delete.component';
import { SpellDetailComponent } from './spell/spell-detail/spell-detail.component';
import { SpellFilterComponent } from './spell/spell-filter/spell-filter.component';
import { SpellListComponent } from './spell/spell-list/spell-list.component';
import { SpellNewComponent } from './spell/spell-new/spell-new.component';
import { SpellSortComponent } from './spell/spell-sort/spell-sort.component';
import { SpellUpdateComponent } from './spell/spell-update/spell-update.component';
import { CastedSpellDeleteComponent } from './casted-spell/casted-spell-delete/casted-spell-delete.component';
import { CastedSpellDetailComponent } from './casted-spell/casted-spell-detail/casted-spell-detail.component';
import { CastedSpellFilterComponent } from './casted-spell/casted-spell-filter/casted-spell-filter.component';
import { CastedSpellListComponent } from './casted-spell/casted-spell-list/casted-spell-list.component';
import { CastedSpellNewComponent } from './casted-spell/casted-spell-new/casted-spell-new.component';
import { WandDeleteComponent } from './wand/wand-delete/wand-delete.component';
import {WandDetailComponent } from './wand/wand-detail/wand-detail.component';
import { WandFilterComponent } from './wand/wand-filter/wand-filter.component';
import { WandListComponent } from './wand/wand-list/wand-list.component';
import { WandNewComponent } from './wand/wand-new/wand-new.component';
import { WandSortComponent } from './wand/wand-sort/wand-sort.component';
import { WandUpdateComponent } from './wand/wand-update/wand-update.component';
import { CastedSpellSortComponent } from './casted-spell/casted-spell-sort/casted-spell-sort.component';
import { CastedSpellUpdateComponent } from './casted-spell/casted-spell-update/casted-spell-update.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    SpellComponent,
    CastedSpellComponent,
    WandComponent,
    WizardNewComponent,
    WizardDeleteComponent,
    WizardFilterComponent,
    WizardListComponent,
    WizardSortComponent,
    WizardUpdateComponent,
    WizardDetailComponent,
    SpellDeleteComponent,
    SpellDetailComponent,
    SpellFilterComponent,
    SpellListComponent,
    SpellNewComponent,
    SpellSortComponent,
    SpellUpdateComponent,
    CastedSpellDeleteComponent,
    CastedSpellDetailComponent,
    CastedSpellFilterComponent,
    CastedSpellListComponent,
    CastedSpellNewComponent,
    WandDeleteComponent,
    WandDetailComponent,
    WandFilterComponent,
    WandListComponent,
    WandNewComponent,
    WandSortComponent,
    WandUpdateComponent,
    CastedSpellSortComponent,
    CastedSpellUpdateComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'wizards',
        component: WizardComponent
      },
      {
        path: 'wizards/delete',
        component: WizardDeleteComponent
      },
      {
        path: 'wizards/filter',
        component: WizardFilterComponent
      },
      {
        path: 'wizards/update',
        component: WizardUpdateComponent
      },
      {
        path: 'wizards/list',
        component: WizardListComponent
      },
      {
        path: 'wizards/new',
        component: WizardNewComponent
      },
      {
        path: 'wizards/sort',
        component: WizardSortComponent
      },
      {
        path: 'wizards/details',
        component: WizardDetailComponent
      },
      {
        path: 'spells',
        component: SpellComponent
      },
      {
        path: 'spells/delete',
        component: SpellDeleteComponent
      },
      {
        path: 'spells/filter',
        component: WizardFilterComponent
      },
      {
        path: 'spells/update',
        component: SpellUpdateComponent
      },
      {
        path: 'spells/list',
        component: SpellListComponent
      },
      {
        path: 'spells/new',
        component: SpellNewComponent
      },
      {
        path: 'spells/sort',
        component: SpellSortComponent
      },
      {
        path: 'spells/details',
        component: SpellDetailComponent
      },
      {
        path: 'casted_spells',
        component: CastedSpellComponent
      },
      {
        path: 'casted_spells/delete',
        component: CastedSpellDeleteComponent
      },
      {
        path: 'casted_spells/filter',
        component: CastedSpellFilterComponent
      },
      {
        path: 'casted_spells/update',
        component: CastedSpellUpdateComponent
      },
      {
        path: 'casted_spells/list',
        component: CastedSpellListComponent
      },
      {
        path: 'casted_spells/new',
        component: CastedSpellNewComponent
      },
      {
        path: 'casted_spells/sort',
        component: CastedSpellSortComponent
      },
      {
        path: 'casted_spells/details',
        component: CastedSpellDetailComponent
      },
      {
        path: 'wands',
        component: WandComponent
      },
      {
        path: 'wands/delete',
        component: WandDeleteComponent
      },
      {
        path: 'wands/filter',
        component: WandFilterComponent
      },
      {
        path: 'wands/update',
        component: WandUpdateComponent
      },
      {
        path: 'wands/list',
        component:WandListComponent
      },
      {
        path: 'wands/new',
        component: WandNewComponent
      },
      {
        path: 'wands/sort',
        component: WandSortComponent
      },
      {
        path: 'wands/details',
        component: WandDetailComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
