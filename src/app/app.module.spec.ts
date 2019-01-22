import { NgZone } from '@angular/core';
import {
  async,
  ComponentFixture,
  inject,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './app.routing.module';
import { BoardComponent } from './task-board/board.component';

describe('<tb-app>', () => {
  describe('When the app starts', () => {
    let sut: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(routes)],
        declarations: [AppComponent, BoardComponent]
      }).compileComponents();

      sut = TestBed.createComponent(AppComponent);
      sut.detectChanges();
    }));

    beforeEach(inject([Router, NgZone], (router: Router, zone: NgZone) => {
      zone.run(() => router.initialNavigation());
    }));

    it('should display the task board', () => {
      const taskBoard = sut.debugElement.query(By.css('tb-board'))
        .nativeElement;

      expect(taskBoard).toBeDefined();
    });
  });
});
