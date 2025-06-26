import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getImagePrefix } from '../../utils/utils';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  logoSrc = `${getImagePrefix()}images/logo/logo.svg`;
}
