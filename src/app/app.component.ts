import { Component, HostBinding, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import * as AOS from 'aos';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'MySite';
  cols = 3;
  Testimonialscols2 = 3;
  projectscols2 = 2;
  projectsrows = '410px';
  gaugerows = '';
  gaugecol = 2;
  cardhe = 'cardhe';
  a2port = 'a2port';
  rescols = '2';
  resrows = '260px';
  cardresumehe = 'cardresumehe';
  rows2 = '340px';
  Testimonialsrows2='360px'
  rowscont = '360';
  rows = '250px';
  rowsdo='280'
  navdivhide = true;
  menu = false;
  guagetile = '';
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';
  gauge = [
    { id: 1, gaugeValue: 85, gaugeLabel: 'Smart', gaugeAppendText: ' %' },
    { id: 2, gaugeValue: 95, gaugeLabel: 'Work', gaugeAppendText: ' %' },
    { id: 3, gaugeValue: 80, gaugeLabel: 'Leader', gaugeAppendText: ' %' },
    { id: 4, gaugeValue: 90, gaugeLabel: 'Support', gaugeAppendText: ' %' },
    { id: 4, gaugeValue: 80, gaugeLabel: 'social', gaugeAppendText: ' %' },
    { id: 4, gaugeValue: 92, gaugeLabel: 'competitor', gaugeAppendText: ' %' },
  ];
  intersted = ['BackEnd', 'FrontEnd', 'DataBase'];

  backgroundColor = '#138d8d';
  fgc = '#00c8c8';
  thick = 8;

  constructor(
    private responsive: BreakpointObserver,
    private overlay: OverlayContainer,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'css',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/css.svg')
    );
    iconRegistry.addSvgIcon(
      'git',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/git2.svg')
    );
    iconRegistry.addSvgIcon(
      'lin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/lin.svg')
    );
    iconRegistry.addSvgIcon(
      'arr',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/arr.svg')
    );
    iconRegistry.addSvgIcon(
      'html',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/html.svg')
    );
    iconRegistry.addSvgIcon(
      'c',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/c.svg')
    );
    iconRegistry.addSvgIcon(
      'ora2',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/ora2.svg')
    );
    iconRegistry.addSvgIcon(
      'sql',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/sql.svg')
    );
    iconRegistry.addSvgIcon(
      'ang',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/ang.svg')
    );
    iconRegistry.addSvgIcon(
      'vue',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/vue.svg')
    );
    iconRegistry.addSvgIcon(
      'actv',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/actv.svg')
    );
    iconRegistry.addSvgIcon(
      'boot',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/boot.svg')
    );
    iconRegistry.addSvgIcon(
      'mat',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/mat.svg')
    );
    iconRegistry.addSvgIcon(
      'face',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/fc1.svg')
    );
    iconRegistry.addSvgIcon(
      'tele',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/telg.svg')
    );
    iconRegistry.addSvgIcon(
      'mail',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/mail.svg')
    );
    iconRegistry.addSvgIcon(
      'call',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/cl.svg')
    );
  }
  ngAfterViewInit(): void {
    AOS.init();
  }
  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darktheme) => {
      const darkClassName = 'darktheme';
      this.className = darktheme ? darkClassName : '';
      if (darktheme) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
    this.responsive
      .observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.TabletLandscape,
        Breakpoints.TabletPortrait,
        Breakpoints.HandsetPortrait,
      ])
      .subscribe((result) => {
        this.cols = 3;
        this.rows = '290px';
        this.rowsdo='280'
        this.Testimonialscols2 = 3;
        this.projectscols2 = 2;
        this.cardhe = '';
        this.a2port = '';
        this.gaugerows = '200';
        this.gaugecol = 2;
        this.projectsrows = '450px';
        this.rows2 = '370px';
        this.Testimonialsrows2='390px'
        this.menu = false;
        this.navdivhide = true;
        this.rescols = '2';
        this.resrows = '320px';
        this.guagetile = '';
        const BP = result.breakpoints;
        if (BP[Breakpoints.TabletPortrait]) {
          console.log(result + 'TP');
          this.cols = 1;
          this.rows2 = '300px';
          this.Testimonialscols2 = 1;
          this.projectscols2 = 1;
          this.gaugecol = 1;
          this.menu = true;
          this.a2port = 'a2port';
          this.navdivhide = false;
          this.guagetile = 'auto';
        }
        if (BP[Breakpoints.TabletLandscape]) {
          console.log(BP + 'TL');
          this.Testimonialscols2 = 3;
          this.projectscols2 = 2;
          this.projectsrows = '500px';
          this.rows2 = '450px';
          this.cols = 2;
          this.menu = false;
          this.navdivhide = true;
        }
        if (BP[Breakpoints.HandsetPortrait]) {
          console.log(BP + 'HP');
          this.rows = '460px';
          this.rowsdo='650px'
          this.Testimonialsrows2='700px'
this.  rowscont = '450px';

          this.cols = 1;
          this.Testimonialscols2 = 1;
          this.projectscols2 = 1;
          this.projectsrows = '800px';
          this.gaugerows = '300';
          this.gaugecol = 1;
          this.resrows = '550px';
          this.cardhe = 'cardhe';
          this.a2port = 'a2port';
          this.rows2 = '600px';
          this.menu = true;
          this.navdivhide = false;
          this.guagetile = 'auto';
        }
        if (BP[Breakpoints.HandsetLandscape]) {
          console.log(BP + 'HL');
          this.a2port = 'a2hand';
          this.guagetile = 'auto';
          this.gaugerows = '300';
          this.resrows = '380';
          this.rowsdo='350px'

          this.cols = 1;
          this.Testimonialscols2 = 1;
          this.projectscols2 = 1;
          this.gaugecol = 1;
          this.menu = true;
          this.navdivhide = false;
        }
      });
  }
}
