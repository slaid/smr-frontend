import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdOptionModule,
    MdSelectModule,
    MdAutocompleteModule
} from '@angular/material';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdButtonModule,
        MdInputModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdDatepickerModule,
        MdNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        MdOptionModule,
        MdSelectModule,
        MdAutocompleteModule
    ],
    exports: [
        BrowserAnimationsModule,
        MdButtonModule,
        MdInputModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdDatepickerModule,
        MdNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        MdOptionModule,
        MdSelectModule,
        MdAutocompleteModule
    ]
})

export class MaterialModule {}
