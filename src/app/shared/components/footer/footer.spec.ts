import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display project info in first row', () => {
    const firstRow = fixture.debugElement.queryAll(By.css('.footer-row'))[0];
    const leftSpan = firstRow.query(By.css('.left'));
    const rightSpan = firstRow.query(By.css('.right'));
    expect(leftSpan.nativeElement.textContent).toContain('Projeto desenvolvido em Angular 20');
    expect(rightSpan.nativeElement.textContent).toContain('Projeto desenvolvido por João Sena');
  });

  it('should display year and LinkedIn link in second row', () => {
    const secondRow = fixture.debugElement.queryAll(By.css('.footer-row'))[1];
    const leftSpan = secondRow.query(By.css('.left'));
    const rightLink = secondRow.query(By.css('.right a'));
    expect(leftSpan.nativeElement.textContent).toContain('2026');
    expect(rightLink.nativeElement.href).toContain('https://www.linkedin.com/in/joaovscardoso/');
  });
});