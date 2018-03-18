import { Component } from '@angular/core';

import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  movies = MOVIES;
}
