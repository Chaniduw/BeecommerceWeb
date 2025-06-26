import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { SigninComponent } from '../../auth/signin/signin.component';
import { SignupComponent } from '../../auth/signup/signup.component';
import { headerData } from '../../data/menu-data';
import { HeaderItem } from '../../types/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LogoComponent,
    SigninComponent,
    SignupComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('mobileMenu', { static: false }) mobileMenuRef?: ElementRef;
  @ViewChild('signInModal', { static: false }) signInModalRef?: ElementRef;
  @ViewChild('signUpModal', { static: false }) signUpModalRef?: ElementRef;

  headerData: HeaderItem[] = headerData;
  isSticky = false;
  isMobileMenuOpen = false;
  isSignInOpen = false;
  isSignUpOpen = false;
  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 80;
    this.scrolled = window.pageYOffset > 50;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.handleClickOutside(event);
  }

  ngOnInit() {
    console.log('Header component initialized');
    console.log('Header data:', this.headerData);
    console.log('Header data length:', this.headerData.length);
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.toggleBodyOverflow();
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.toggleBodyOverflow();
  }

  openSignInModal() {
    this.isSignInOpen = true;
    this.toggleBodyOverflow();
  }

  closeSignInModal() {
    this.isSignInOpen = false;
    this.toggleBodyOverflow();
  }

  openSignUpModal() {
    this.isSignUpOpen = true;
    this.toggleBodyOverflow();
  }

  closeSignUpModal() {
    this.isSignUpOpen = false;
    this.toggleBodyOverflow();
  }

  private toggleBodyOverflow() {
    if (this.isSignInOpen || this.isSignUpOpen || this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  private handleClickOutside(event: MouseEvent) {
    const target = event.target as Node;

    if (
      this.signInModalRef &&
      !this.signInModalRef.nativeElement.contains(target)
    ) {
      this.closeSignInModal();
    }

    if (
      this.signUpModalRef &&
      !this.signUpModalRef.nativeElement.contains(target)
    ) {
      this.closeSignUpModal();
    }

    if (
      this.mobileMenuRef &&
      !this.mobileMenuRef.nativeElement.contains(target) &&
      this.isMobileMenuOpen
    ) {
      this.closeMobileMenu();
    }
  }
}
