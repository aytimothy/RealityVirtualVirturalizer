// import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
// import components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { FilesystemComponent } from './filesystem/filesystem.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { FileDialogComponent } from './dialogs/file-dialog/file-dialog.component';
import { RosconfigDialogComponent } from './dialogs/rosconfig-dialog/rosconfig-dialog.component';
import { SidenavComponent } from './sidenav/sidenav.component';
// import services
import { BridgeService } from './services/rosbridge.service';
import { SidenavService } from './services/sidenav.service';
import { DialogService } from './services/dialog.service';
import { DataService } from './services/data.service';
import { ScannerService } from './services/scanner.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatusbarComponent,
    FilesystemComponent,
    ConfirmDialogComponent,
    SidenavComponent,
    RosconfigDialogComponent,
    FileDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatMenuModule
  ],
  providers: [
    BridgeService,
    SidenavService,
    DialogService,
    DataService,
    ScannerService
  ],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
