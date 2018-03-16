import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  private movies = [
    {
      title: 'Jaws',
      year: 1975,
      cast: [
        {
          name: 'Roy Scheider',
          character: 'Chief Martin Brody'
        },
        {
          name: 'Robert Shaw',
          character: 'Quint'
        },
        {
          name: 'Richard Dreyfuss',
          character: 'Matt Hooper'
        }
      ]
    },
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      cast: [
        {
          name: 'Tim Robbins',
          character: 'Andy Dufresne'
        },
        {
          name: 'Morgan Freeman',
          character: 'Ellis Boyd \'Red\' Redding'
        }
      ]
    }
  ];
}
