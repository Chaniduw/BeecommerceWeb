import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HeroComponent } from '../../home/hero/hero.component';
import { WorkComponent } from '../../home/work/work.component';
import { TimelineComponent } from '../../home/timeline/timeline.component';
import { PlatformComponent } from '../../home/platform/platform.component';
import { PortfolioComponent } from '../../home/portfolio/portfolio.component';
import { UpgradeComponent } from '../../home/upgrade/upgrade.component';
import { PerksComponent } from '../../home/perks/perks.component';
import { FeaturesComponent } from '../../home/features/features.component';
import { TestimonialsComponent } from '../../home/testimonials/testimonials.component';
import { NewsletterComponent } from '../../home/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    WorkComponent,
    TimelineComponent,
    PlatformComponent,
    PortfolioComponent,
    UpgradeComponent,
    PerksComponent,
    FeaturesComponent,
    TestimonialsComponent,
    NewsletterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('homePageContent') homePageContent!: ElementRef;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.initIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initIntersectionObserver(): void {
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          // Add a class to activate animation
          if (
            element.classList.contains('animate-fadeInUp') ||
            element.classList.contains('animate-fadeInLeft') ||
            element.classList.contains('animate-fadeInRight') ||
            element.classList.contains('animate-slideUp')
          ) {
            element.classList.add('animation-triggered');
            // Optionally, stop observing after animation to save resources
            observer.unobserve(element);
          }
        }
      });
    }, options);

    // Observe all direct children of the main content container within home.component.html
    if (this.homePageContent) {
      Array.from(this.homePageContent.nativeElement.children).forEach(
        (child) => {
          if (child instanceof HTMLElement) {
            this.observer?.observe(child);
          }
        }
      );
    }
  }
}
