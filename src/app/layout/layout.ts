import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
