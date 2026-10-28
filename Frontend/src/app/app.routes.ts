import { Routes } from '@angular/router';
import { AgentPage } from './pages/agent/agent.page';
import { ParyPage } from './pages/pary/pary.page';
import { ViajesPage } from './pages/viajes/viajes.page';

export const routes: Routes = [
  {
    path: 'pary',
    component: ParyPage,
  },
  {
    path: 'viajes',
    component: ViajesPage,
  },
  {
    path: 'agent',
    component: AgentPage,
    children: [
      {
        path: '',
        redirectTo: 'viajes',
        pathMatch: 'full',
      },
      {
        path: 'viajes',
        component: ViajesPage,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'pary',
    pathMatch: 'full',
  },
];
