

import { Routes } from '@angular/router';
import {NpmComponent} from './npm-ui/npm-ui.component';
import { AccessibilityDemoModule } from './accessibility/accessibility.demo.module';
import { ChartD3Demo } from './chartd3/chard3.demo';
import { AccessibilityDemo } from './accessibility/accessibility.demo';
import { ConceptPage } from './concept/concept.component';
import { ThemeComponent } from './theme/theme.component';
import { GettingStatedDemo } from './gettingstarted/gettingstarted';
export const APP_ROUTE: Routes = [
    {
        path: '', redirectTo: 'npm-ui', pathMatch: 'full',
    },
    {
        path: 'npm-ui', component: NpmComponent
    },
    {
        path: 'd3-charts', component: ChartD3Demo,
    },
    {
        path: 'accessibility', loadChildren: './accessibility/accessibility.demo.module#AccessibilityDemoModule',
    },
    {
        path: 'getting-started', component: GettingStatedDemo,
    },
    {
        path: 'concept', component: ConceptPage,
    },
    {
        path: 'theme', component: ThemeComponent,
    },
];
