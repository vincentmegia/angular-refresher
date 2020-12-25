import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstViewComponent } from './first-view.component';

describe('FirstViewComponent', () => {
    let component: FirstViewComponent;
    let fixture: ComponentFixture<FirstViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FirstViewComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FirstViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('getters and setters', () => {
        const component = new FirstViewComponent();
        component.generateProducer();
        component.onClick();
        debugger;
        let label = '';
        component.producer$.subscribe(item => {
            label = item;
        })
        expect(label).toEqual('10000');
    });
});
