import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ShoutPipe } from './pipes/shoutpipe.pipe';
import { FormGroup } from '@angular/forms';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [
                AppComponent,
                ShoutPipe
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have input element with value 'test value'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const result = fixture.nativeElement.querySelector('input[name=forTest]');
        expect(result.value).toEqual('');
    });

    it('#setTime() should set time', () => {
        const component = new AppComponent();
        component.onClick();
        expect(component.time).toEqual('12:00');
    })

    it('App test getter and setters', () => {
        const component = new AppComponent();
        component.time = '1200';
        component.title = "some title";
        expect(component.time).toEqual('1200');
        expect(component.title).toEqual('some title');
        expect(component.formGroup).toBeDefined();
        component.setTime('1200');
        component.onSubmit();
    })
});
