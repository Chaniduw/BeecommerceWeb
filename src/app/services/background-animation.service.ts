import { Injectable } from '@angular/core';

declare var FinisherHeader: any;

@Injectable({
  providedIn: 'root',
})
export class BackgroundAnimationService {
  private finisherInstance: any = null;

  constructor() {}

  initializeBackground(): void {
    // Check if FinisherHeader is available and not already initialized
    if (typeof FinisherHeader !== 'undefined' && !this.finisherInstance) {
      try {
        this.finisherInstance = new FinisherHeader({
          count: 8,
          size: {
            min: 565,
            max: 1332,
            pulse: 1.6,
          },
          speed: {
            x: {
              min: 0.6,
              max: 3.6,
            },
            y: {
              min: 0.6,
              max: 3,
            },
          },
          colors: {
            background: '#0b0e11',
            particles: ['#374151', '#00d4aa', '#ffffff', '#f59e0b'],
          },
          blending: 'lighten',
          opacity: {
            center: 0.45,
            edge: 0,
          },
          skew: -2,
          shapes: ['c'],
        });
        console.log('Finisher Header background animation initialized');
      } catch (error) {
        console.error('Error initializing Finisher Header:', error);
      }
    }
  }

  destroyBackground(): void {
    if (this.finisherInstance) {
      // Clean up the canvas if it exists
      const canvas = document.getElementById('finisher-canvas');
      if (canvas) {
        canvas.remove();
      }
      this.finisherInstance = null;
      console.log('Finisher Header background animation destroyed');
    }
  }

  isInitialized(): boolean {
    return this.finisherInstance !== null;
  }
}
