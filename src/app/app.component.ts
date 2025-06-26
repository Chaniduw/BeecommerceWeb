import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BackgroundAnimationService } from './services/background-animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'BeecommerceWeb';

  constructor(private backgroundService: BackgroundAnimationService) {}

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    // Initialize background animation after view is ready
    setTimeout(() => {
      this.backgroundService.initializeBackground();
    }, 100);
  }

  ngOnDestroy(): void {
    // Clean up background animation when component is destroyed
    this.backgroundService.destroyBackground();
  }
}
