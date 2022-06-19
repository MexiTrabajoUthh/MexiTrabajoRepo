import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


//import {} from '@angular/material/ac'
//    import { MatDividerModule } from '@angular/material/bottom-sheet';
//    import { MatExpansionModule } from '@angular/material/bottom-sheet';
//    import { MatGridListModule } from '@angular/material/bottom-sheet';
//    import { MatNativeDateModule } from '@angular/material/bottom-sheet';
//    import { MatPaginatorModule } from '@angular/material/bottom-sheet';
//    import { MatProgressBarModule } from '@angular/material/bottom-sheet';
//    import { MatProgressSpinnerModule } from '@angular/material/bottom-sheet';
//    import { MatRadioModule } from '@angular/material/bottom-sheet';
//    import { MatRippleModule } from '@angular/material/bottom-sheet';
//    import { MatSelectModule } from '@angular/material/bottom-sheet';
//    import { MatSliderModule } from '@angular/material/bottom-sheet';
//    import { MatSlideToggleModule } from '@angular/material/bottom-sheet';
//    import { MatSnackBarModule } from '@angular/material/bottom-sheet';
//    import { MatSortModule } from '@angular/material/bottom-sheet';
//    import { MatStepperModule } from '@angular/material/bottom-sheet';
//    import { MatTableModule } from '@angular/material/bottom-sheet';
//    import { MatTabsModule } from '@angular/material/bottom-sheet';
//    import { MatTooltipModule } from '@angular/material/bottom-sheet';
//    import { MatTreeModule } from '@angular/material/bottom-sheet';


const materialModules = [
    MatAutocompleteModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTabsModule,
    MatRadioModule,
    MatTableModule,
    MatListModule,
    
    // MatSelectionList,
    // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatInputModule,
    // MatNativeDateModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
     MatSelectModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatStepperModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule
    
];

@NgModule({
    declarations: [],
    imports: materialModules,
    exports: materialModules
})
export class MaterialModule { }
