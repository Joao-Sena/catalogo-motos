import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AboutComponent } from './about';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const titleElement = fixture.debugElement.query(By.css('h1'));
    const titleText = titleElement.nativeElement.textContent.trim();
    expect(titleText).toContain('Front-End');
  });

  it('should display the subtitle', () => {
    const subtitleElement = fixture.debugElement.query(By.css('.subtitle'));
    expect(subtitleElement.nativeElement.textContent).toContain('Conheça um pouco mais a meu respeito');
  });

  it('should display skills section', () => {
    const skillsHeading = fixture.debugElement.query(By.css('h2'));
    expect(skillsHeading.nativeElement.textContent).toContain('Habilidades');
  });

  it('should render skill cards', () => {
    const skillCards = fixture.debugElement.queryAll(By.css('.card-skill'));
    expect(skillCards.length).toBeGreaterThan(0);
  });

  it('should have profile image', () => {
    const profileImage = fixture.debugElement.query(By.css('.profile-image'));
    expect(profileImage).toBeTruthy();
    expect(profileImage.nativeElement.src).toContain('media.licdn.com');
  });
});
