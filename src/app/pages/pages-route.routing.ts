import { Routes, RouterModule } from '@angular/router';
import { EuropaComponent } from './destination/europa/europa.component';
import { MarsComponent } from './destination/mars/mars.component';
import { MoonComponent } from './destination/moon/moon.component';
import { TitanComponent } from './destination/titan/titan.component';

const routes: Routes = [
  // {
  //   path:'',
  //   children: [
  //     { path: 'moon', component: MoonComponent },
  //     { path: 'mars', component: MarsComponent },
  //     { path: 'europa', component: EuropaComponent },
  //     { path: 'titan', component: TitanComponent },
  //     { path: '**', redirectTo: 'moon', pathMatch: 'full' },
  //   ],
  // },
];

export const PagesRouteRoutes = RouterModule.forChild(routes);
