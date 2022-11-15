import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ModelDatemodeComponent } from './model-datemode.component'

describe('ModelDatemodeComponent', () => {
    let component: ModelDatemodeComponent
    let fixture: ComponentFixture<ModelDatemodeComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModelDatemodeComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(ModelDatemodeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
