(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");





const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _filesystem_filesystem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filesystem/filesystem.component */ "./src/app/filesystem/filesystem.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _statusbar_statusbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statusbar/statusbar.component */ "./src/app/statusbar/statusbar.component.ts");








const _c0 = ["left"];
const _c1 = ["right"];
class AppComponent {
    constructor(__SidenavService) {
        this.__SidenavService = __SidenavService;
    }
    ngAfterViewInit() {
        this.__SidenavService.setSidenav(this.left, this.right);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.left = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.right = _t.first);
    } }, decls: 15, vars: 0, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["autosize", ""], ["id", "left-sidenav", "mode", "side", "position", "start", "opened", ""], ["left", ""], ["id", "right-sidenav", "mode", "side", "position", "end", "opened", ""], ["right", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-filesystem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-statusbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _filesystem_filesystem_component__WEBPACK_IMPORTED_MODULE_4__["FilesystemComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _statusbar_statusbar_component__WEBPACK_IMPORTED_MODULE_6__["StatusbarComponent"]], styles: ["#left-sidenav[_ngcontent-%COMP%] {\n  width: 260px;\n  color: #fff;\n  background: #3f51b5;\n  text-align: center;\n}\n#right-sidenav[_ngcontent-%COMP%] {\n  width: 260px;\n}\nmain[_ngcontent-%COMP%] {\n  height: 80vh;\n  background-color: #fff;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], .mat-sidenav-container[_ngcontent-%COMP%], .material-app[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F5dGltb3RoeS9HaXRIdWIvUmVhbGl0eVZpcnR1YWxWaXJ0dXJhbGl6ZXIvd2ViLy1SZWFsaXR5VmlydHVhbFZpcnR1cmFsaXplci1JbnRlcmZhY2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURFQTs7OztFQUlFLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlNpZGUgTmF2aWdhdGlvbiovXG4jbGVmdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDI2MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcmlnaHQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNjBweDtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaHRtbCxcbmJvZHksXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyLFxuLm1hdGVyaWFsLWFwcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIvKlNpZGUgTmF2aWdhdGlvbiovXG4jbGVmdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDI2MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcmlnaHQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNjBweDtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaHRtbCxcbmJvZHksXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyLFxuLm1hdGVyaWFsLWFwcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"] }]; }, { left: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['left']
        }], right: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['right']
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _statusbar_statusbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./statusbar/statusbar.component */ "./src/app/statusbar/statusbar.component.ts");
/* harmony import */ var _filesystem_filesystem_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./filesystem/filesystem.component */ "./src/app/filesystem/filesystem.component.ts");
/* harmony import */ var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _dialogs_file_dialog_file_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dialogs/file-dialog/file-dialog.component */ "./src/app/dialogs/file-dialog/file-dialog.component.ts");
/* harmony import */ var _dialogs_rosconfig_dialog_rosconfig_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dialogs/rosconfig-dialog/rosconfig-dialog.component */ "./src/app/dialogs/rosconfig-dialog/rosconfig-dialog.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/rosbridge.service */ "./src/app/services/rosbridge.service.ts");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_scanner_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/scanner.service */ "./src/app/services/scanner.service.ts");
// import modules





















// import components








// import services






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_29__["BridgeService"],
        _services_sidenav_service__WEBPACK_IMPORTED_MODULE_30__["SidenavService"],
        _services_dialog_service__WEBPACK_IMPORTED_MODULE_31__["DialogService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_32__["DataService"],
        _services_scanner_service__WEBPACK_IMPORTED_MODULE_33__["ScannerService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_17__["MatTreeModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
        _statusbar_statusbar_component__WEBPACK_IMPORTED_MODULE_23__["StatusbarComponent"],
        _filesystem_filesystem_component__WEBPACK_IMPORTED_MODULE_24__["FilesystemComponent"],
        _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmDialogComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_28__["SidenavComponent"],
        _dialogs_rosconfig_dialog_rosconfig_dialog_component__WEBPACK_IMPORTED_MODULE_27__["RosconfigDialogComponent"],
        _dialogs_file_dialog_file_dialog_component__WEBPACK_IMPORTED_MODULE_26__["FileDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_17__["MatTreeModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
                    _statusbar_statusbar_component__WEBPACK_IMPORTED_MODULE_23__["StatusbarComponent"],
                    _filesystem_filesystem_component__WEBPACK_IMPORTED_MODULE_24__["FilesystemComponent"],
                    _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmDialogComponent"],
                    _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_28__["SidenavComponent"],
                    _dialogs_rosconfig_dialog_rosconfig_dialog_component__WEBPACK_IMPORTED_MODULE_27__["RosconfigDialogComponent"],
                    _dialogs_file_dialog_file_dialog_component__WEBPACK_IMPORTED_MODULE_26__["FileDialogComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_17__["MatTreeModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"]
                ],
                providers: [
                    _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_29__["BridgeService"],
                    _services_sidenav_service__WEBPACK_IMPORTED_MODULE_30__["SidenavService"],
                    _services_dialog_service__WEBPACK_IMPORTED_MODULE_31__["DialogService"],
                    _services_data_service__WEBPACK_IMPORTED_MODULE_32__["DataService"],
                    _services_scanner_service__WEBPACK_IMPORTED_MODULE_33__["ScannerService"]
                ],
                entryComponents: [_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmDialogComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var three_build_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/build/three */ "./node_modules/three/build/three.js");
/* harmony import */ var three_build_three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three_build_three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rosbridge.service */ "./src/app/services/rosbridge.service.ts");
/* harmony import */ var _services_scanner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/scanner.service */ "./src/app/services/scanner.service.ts");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");














const _c0 = ["canvas"];
function DashboardComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.startListening(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "sync_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Listen for messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.stopListening(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "sync_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Stop Listening ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.createNewScene(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New Scene ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_span_7_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_span_7_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.enableFullScreenMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Enable Full Screen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_span_7_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_span_7_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.disableFullScreenMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Disable Full Screen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_span_7_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_span_7_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.switchColor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "color_lens");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Change Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_span_7_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_span_7_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.rotateX = !ctx_r28.rotateX; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Rotate X Axis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_span_7_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_span_7_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.rotateY = !ctx_r30.rotateY; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Rotate Y Axis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_span_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r15.openMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function DashboardComponent_div_0_span_7_Template_span_mouseleave_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r15.closeMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_0_span_7_button_8_Template, 4, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_0_span_7_button_10_Template, 4, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_0_span_7_button_12_Template, 4, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_div_0_span_7_button_14_Template, 4, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_div_0_span_7_button_16_Template, 4, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.listeningForMessages && !ctx_r5.isFullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.listeningForMessages && ctx_r5.isFullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.listeningForMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.listeningForMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.listeningForMessages);
} }
function DashboardComponent_div_0_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_span_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r35.openMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function DashboardComponent_div_0_span_8_Template_span_mouseleave_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r35.closeMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_span_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.toggleImages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Toggle Images ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_span_8_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.toggleCanvas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "3d_rotation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Toggle Canvas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
} }
function DashboardComponent_div_0_mat_toolbar_9_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.frame.seq);
} }
function DashboardComponent_div_0_mat_toolbar_9_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r43.frame.posX);
} }
function DashboardComponent_div_0_mat_toolbar_9_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r44.frame.posY);
} }
function DashboardComponent_div_0_mat_toolbar_9_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.frame.posZ);
} }
function DashboardComponent_div_0_mat_toolbar_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Seq: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_0_mat_toolbar_9_span_4_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "posX: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_0_mat_toolbar_9_span_8_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "posY: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_0_mat_toolbar_9_span_12_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "posZ: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_div_0_mat_toolbar_9_span_16_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.frame);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.frame);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.frame);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.frame);
} }
function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_0_button_3_Template, 4, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_0_button_4_Template, 4, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_0_button_5_Template, 4, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_0_span_7_Template, 18, 7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_0_span_8_Template, 17, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_div_0_mat_toolbar_9_Template, 17, 4, "mat-toolbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DashboardComponent_div_0_Template_div_resize_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.listeningForMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.listeningForMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.listeningForMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.listeningForMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.listeningForMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.listeningForMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.isImageDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx_r0.dashboardWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx_r0.dashboardHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.isCanvasDisplayed);
} }
function DashboardComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Please connect to Rosbridge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The scanner is disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_div_1_Template, 9, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_1_div_2_Template, 9, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isConnected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isConnected && !ctx_r1.isScanning);
} }
class DashboardComponent {
    constructor(__BridgeService, __ScannerService, __SidenavService, elementRef) {
        this.__BridgeService = __BridgeService;
        this.__ScannerService = __ScannerService;
        this.__SidenavService = __SidenavService;
        this.elementRef = elementRef;
        this.color = 0xfcfcfc;
        this.isConnected = false;
        this.isScanning = false;
        this.listeningForMessages = false;
        this.isCanvasDisplayed = true;
        this.isImageDisplayed = false;
        this.isFullScreen = false;
        this.rotateX = false;
        this.rotateY = false;
    }
    ngAfterViewInit() {
        // retrieve the width and height of the canvas div dynamically  
        this.dashboardWidth = this.elementRef.nativeElement.offsetWidth;
        this.dashboardHeight = this.elementRef.nativeElement.offsetHeight;
        this.__BridgeService.getConnnectionStatus().subscribe(status => {
            this.isConnected = status;
        });
        this.__ScannerService.getScannerStatus().subscribe(status => {
            this.isScanning = status;
        });
    }
    startListening() {
        this.msg_listener = this.__BridgeService.subscribeToTopic('/output', 'world_mapper/Frame');
        // listen for basic messages
        this.listeningForMessages = true;
        this.msg_listener.subscribe((frame) => {
            // update the current frame
            this.frame = frame;
            // update the image url per frame
            this.imageUrl = 'data:image/jpeg;base64,' + frame.img;
            this.generatePoint(frame);
        });
        this.create3DCanvas();
    }
    switchColor() {
        // color array
        let colors = [0xffff00, 0xfcfcfc, 0x55b0dd, 0xdd5555];
        // current index of the current color of the color array
        let index = colors.indexOf(this.color);
        // get next color
        if (index >= 0 && index < colors.length - 1) {
            this.color = colors[index + 1];
        }
        // reset color index
        if (index == 3) {
            this.color = colors[0];
        }
    }
    stopListening() {
        this.msg_listener.unsubstribe();
        this.listeningForMessages = false;
        this.isCanvasDisplayed = false;
    }
    enableFullScreenMode() {
        this.isFullScreen = true;
        this.__SidenavService.enableFullScreen();
        window.dispatchEvent(new Event('resize'));
    }
    disableFullScreenMode() {
        this.isFullScreen = false;
        this.__SidenavService.disableFullScreen();
        window.dispatchEvent(new Event('resize'));
    }
    generatePoint(frames) {
        var baseVectors = [];
        var frame = frames.default;
        if (frame.angle_increment >= 0.1) {
            frame.angle_increment = (frame.angle_max - frame.angle_min) / (frame.ranges.length - 1);
        }
        if (frame.angle_increment == 0) {
            console.log("Cannot have an angle increment of 0, because then we'll get nowhere!\nThere are " + frame.ranges.length + " readings.");
        }
        var reps = 500;
        for (var angle = frame.angle_min; angle < frame.angle_max; angle += frame.angle_increment) {
            baseVectors.push(new three_build_three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](Math.cos(angle * (Math.PI / 180)), 0, Math.sin(angle * (Math.PI / 180))));
            reps--;
            if (reps < 0) {
                console.log("There's too many vectors to add!");
                console.log("frame.ranges.Length = " + frame.ranges.length + "frame.angle_increment = " + frame.angle_increment + "\nframe.angle_min = " + frame.angle_min + "\nframe.angle_max = " + frame.angle_max);
                break;
            }
        }
        var results = [];
        for (let i = 0; i < baseVectors.length; i++) {
            var baseVector = baseVectors[i];
            var alpha = frame.rotX * (Math.PI / 180);
            var beta = frame.rotY * (Math.PI / 180);
            var gamma = frame.rotZ * (Math.PI / 180);
            var cosa = Math.cos(alpha);
            var sina = Math.sin(alpha);
            var cosb = Math.cos(beta);
            var sinb = Math.sin(beta);
            var cosc = Math.cos(gamma);
            var sinc = Math.sin(gamma);
            var axx = cosa * cosb;
            var axy = cosa * sinb * sinc - sina * cosc;
            var axz = cosa * sinb * cosc + sina * sinc;
            var ayx = sina * cosb;
            var ayy = sina * sinb * sinc + cosa * cosc;
            var ayz = sina * sinb * cosc - cosa * sinc;
            var azx = -sinb;
            var azy = cosb * sinc;
            var azz = cosb * cosc;
            var mx = (axx * baseVector.x) + (axy * baseVector.y) + (axz * baseVector.z);
            var my = (ayx * baseVector.x) + (ayy * baseVector.y) + (ayz * baseVector.z);
            var mz = (azx * baseVector.x) + (azy * baseVector.y) + (azz * baseVector.z);
            results.push(new three_build_three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](mx * frame.ranges[i], my * frame.ranges[i], mz * frame.ranges[i]).add(new three_build_three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](frame.posX, frame.posY, frame.posZ)));
        }
        this.addToScene(results);
    }
    onResize(event) {
        if (this.isFullScreen) {
            /* The event will only detect window resize events,
            Therefore we need to substract 520 pixels from the innerWidth manually
            to take into account the two side navigation panels which are both 260*/
            this.dashboardWidth = event.target.innerWidth;
            this.dashboardHeight = event.target.innerHeight;
        }
        else {
            this.dashboardWidth = event.target.innerWidth - 520;
            this.dashboardHeight = event.target.innerHeight - 164;
        }
    }
    toggleImages() {
        if (this.isImageDisplayed) {
            this.isImageDisplayed = false;
        }
        else {
            this.isImageDisplayed = true;
            this.isCanvasDisplayed = false;
        }
    }
    toggleCanvas() {
        if (this.isCanvasDisplayed) {
            this.isCanvasDisplayed = false;
        }
        else {
            this.isImageDisplayed = false;
            this.isCanvasDisplayed = true;
        }
    }
    create3DCanvas() {
        this.camera = new three_build_three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 15;
        this.camera.position.y = 5;
        this.renderer = new three_build_three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({ antialias: true });
        this.renderer.setClearColor('#00000');
        this.renderer.setSize(this.dashboardWidth, this.dashboardHeight);
        this.elementView.nativeElement.appendChild(this.renderer.domElement);
        window.addEventListener('resize', () => {
            this.renderer.setSize(this.dashboardWidth, this.dashboardHeight);
            this.camera.aspect = this.dashboardWidth / this.dashboardHeight;
            this.camera.updateProjectionMatrix();
        });
        this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"](this.camera, this.renderer.domElement);
        this.createNewScene();
    }
    createNewScene() {
        this.scene = new three_build_three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        // LIGHTS
        var light = new three_build_three__WEBPACK_IMPORTED_MODULE_2__["PointLight"](0xFFFFFF, 1, 500);
        light.position.set(10, 0, 25);
        this.scene.add(light);
    }
    addToScene(points) {
        // MATERIAL
        var material = new three_build_three__WEBPACK_IMPORTED_MODULE_2__["PointsMaterial"]({ size: 1, sizeAttenuation: false, color: this.color });
        // GEOMETRY
        var geometry = new three_build_three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        // Add vertices
        points.forEach(element => {
            geometry.vertices.push(element);
        });
        this.points = new three_build_three__WEBPACK_IMPORTED_MODULE_2__["Points"](geometry, material);
        // Add points to Scene
        this.scene.add(this.points);
        let component = this;
        // Render the animation in the canvas
        (function render() {
            requestAnimationFrame(render);
            // check if our rotation controls are enabled for x,y axis
            if (component.rotateX) {
                component.points.rotation.x += 0.01;
            }
            if (component.rotateY) {
                component.points.rotation.y += 0.01;
            }
            component.controls.update();
            component.renderer.render(component.scene, component.camera);
        }());
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rosbridge_service__WEBPACK_IMPORTED_MODULE_3__["BridgeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_scanner_service__WEBPACK_IMPORTED_MODULE_4__["ScannerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementView = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "row no-gutters", 4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], [1, "row", "no-gutters"], ["id", "options-bar"], ["mat-flat-button", "", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "matTooltip", "New Scene", 3, "click", 4, "ngIf"], [1, "spacer"], [4, "ngIf"], ["id", "coordinates-bar", "color", "primary", 4, "ngIf"], [1, "camera_wrapper", 3, "hidden"], ["alt", "frame image", 3, "src", "width", "height"], ["id", "canvas", 3, "hidden", "resize"], ["canvas", ""], ["mat-flat-button", "", 3, "click"], ["mat-flat-button", "", "matTooltip", "New Scene", 3, "click"], ["mat-icon-button", "", "matTooltip", "Display Options", 3, "matMenuTriggerFor", "click"], ["menuTrigger", "matMenuTrigger"], [3, "overlapTrigger"], ["menu", "matMenu"], [3, "mouseleave"], ["mat-button", "", "matTooltip", "Enable Full Screen", 3, "click", 4, "ngIf"], ["mat-button", "", "matTooltip", "Disable Full Screen", 3, "click", 4, "ngIf"], ["mat-button", "", "matTooltip", "Change Color", 3, "click", 4, "ngIf"], ["mat-button", "", "matTooltip", "Rotate X Axis", 3, "click", 4, "ngIf"], ["mat-button", "", "matTooltip", "Rotate Y Axis", 3, "click", 4, "ngIf"], ["mat-button", "", "matTooltip", "Enable Full Screen", 3, "click"], ["mat-button", "", "matTooltip", "Disable Full Screen", 3, "click"], ["mat-button", "", "matTooltip", "Change Color", 3, "click"], ["mat-button", "", "matTooltip", "Rotate X Axis", 3, "click"], ["mat-button", "", "matTooltip", "Rotate Y Axis", 3, "click"], ["mat-icon-button", "", "matTooltip", "Mode", 3, "matMenuTriggerFor", "click"], ["mat-button", "", "matTooltip", "Toggle Images", 3, "click"], ["mat-button", "", "matTooltip", "Toggle 3D Canvas", 3, "click"], ["id", "coordinates-bar", "color", "primary"], [1, "container-fluid"], ["class", "warning_template", 4, "ngIf"], [1, "warning_template"], [1, "wrapper"], ["src", "assets/error_bridge.png", "alt", "error", "id", "error_bridge"], [1, "warning_message"], ["mat-button", ""], ["src", "assets/error_scan.png", "alt", "error", "id", "error_scan"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 14, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 3, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConnected && ctx.isScanning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isConnected || !ctx.isScanning);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  background-color: #e7e2e2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 90vh;\n}\n\n.warning_template[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 30%;\n  background-color: #f58181;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  height: 30vh;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 30vh;\n}\n\n#error_bridge[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n#error_scan[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.warning_message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #fff;\n  width: 100%;\n  height: 30vh;\n}\n\n.warning_message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #e97d7d;\n  color: #fff;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n#canvas[_ngcontent-%COMP%] {\n  height: 80vh;\n}\n\n#coordinates-bar[_ngcontent-%COMP%] {\n  height: 5%;\n  font-size: 1vw;\n}\n\n.camera_wrapper[_ngcontent-%COMP%] {\n  height: 80vh;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F5dGltb3RoeS9HaXRIdWIvUmVhbGl0eVZpcnR1YWxWaXJ0dXJhbGl6ZXIvd2ViLy1SZWFsaXR5VmlydHVhbFZpcnR1cmFsaXplci1JbnRlcmZhY2Uvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMjYsIDIyNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDkwdmg7XG59XG5cbi53YXJuaW5nX3RlbXBsYXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxMjksIDEyOSk7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAzMHZoO1xufVxuXG4jZXJyb3JfYnJpZGdlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuI2Vycm9yX3NjYW4ge1xuICB3aWR0aDogNDAlO1xufVxuXG4ud2FybmluZ19tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwdmg7XG59XG5cbi53YXJuaW5nX21lc3NhZ2UgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTI1LCAxMjUpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4jY2FudmFzIHtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuXG4jY29vcmRpbmF0ZXMtYmFyIHtcbiAgaGVpZ2h0OiA1JTtcbiAgZm9udC1zaXplOiAxdnc7XG59XG5cbi5jYW1lcmFfd3JhcHBlciB7XG4gIGhlaWdodDogODB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2UyZTI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDkwdmg7XG59XG5cbi53YXJuaW5nX3RlbXBsYXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4MTgxO1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMzB2aDtcbn1cblxuI2Vycm9yX2JyaWRnZSB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbiNlcnJvcl9zY2FuIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLndhcm5pbmdfbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHZoO1xufVxuXG4ud2FybmluZ19tZXNzYWdlIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTdkN2Q7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbiNjYW52YXMge1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbiNjb29yZGluYXRlcy1iYXIge1xuICBoZWlnaHQ6IDUlO1xuICBmb250LXNpemU6IDF2dztcbn1cblxuLmNhbWVyYV93cmFwcGVyIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
            }]
    }], function () { return [{ type: _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_3__["BridgeService"] }, { type: _services_scanner_service__WEBPACK_IMPORTED_MODULE_4__["ScannerService"] }, { type: _services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__["SidenavService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { elementView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class ConfirmDialogComponent {
    constructor(data, __DialogRef) {
        this.data = data;
        this.__DialogRef = __DialogRef;
    }
    onDismiss() {
        this.__DialogRef.close(false);
    }
    onConfirm() {
        this.__DialogRef.close(true);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 12, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_10_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-dialog',
                templateUrl: './confirm-dialog.component.html',
                styleUrls: ['./confirm-dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dialogs/file-dialog/file-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/file-dialog/file-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: FileDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDialogComponent", function() { return FileDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");









function FileDialogComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileDialogComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.rawFormat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Raw Format\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileDialogComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileDialogComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.expandFormat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "view_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Expandable Format\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileDialogComponent_pre_7_code_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n      ", ctx_r62.data.data, "\n  ");
} }
function FileDialogComponent_pre_7_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.data.data);
} }
function FileDialogComponent_pre_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileDialogComponent_pre_7_code_2_Template, 2, 1, "code", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FileDialogComponent_pre_7_p_4_Template, 2, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.data.ext === ".json" || ctx_r56.data.ext === ".bson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.data.ext !== ".json");
} }
function FileDialogComponent_div_8_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Frame Attribute ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attribute_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attribute_r65.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 2, attribute_r65.value));
} }
function FileDialogComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileDialogComponent_div_8_mat_expansion_panel_1_Template, 13, 4, "mat-expansion-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r57.data.attr));
} }
class FileDialogComponent {
    constructor(data, __DialogRef) {
        this.data = data;
        this.__DialogRef = __DialogRef;
        this.isRawFormat = true;
        this.isExpandFormat = false;
    }
    onDismiss() {
        this.__DialogRef.close(false);
    }
    rawFormat() {
        this.isExpandFormat = false;
        this.isRawFormat = true;
    }
    expandFormat() {
        this.isExpandFormat = true;
        this.isRawFormat = false;
    }
}
FileDialogComponent.ɵfac = function FileDialogComponent_Factory(t) { return new (t || FileDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
FileDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileDialogComponent, selectors: [["app-file-dialog"]], decls: 12, vars: 5, consts: [["mat-dialog-title", ""], ["mat-flat-button", "", 3, "click", 4, "ngIf"], ["mat-dialog-content", ""], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", 3, "click"], [4, "ngFor", "ngForOf"]], template: function FileDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FileDialogComponent_button_4_Template, 4, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileDialogComponent_button_5_Template, 4, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FileDialogComponent_pre_7_Template, 6, 2, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FileDialogComponent_div_8_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileDialogComponent_Template_button_click_10_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.ext == ".json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.ext == ".json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRawFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpandFormat);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["pre[_ngcontent-%COMP%] {\n  background-color: #3f4047;\n  color: #fff;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F5dGltb3RoeS9HaXRIdWIvUmVhbGl0eVZpcnR1YWxWaXJ0dXJhbGl6ZXIvd2ViLy1SZWFsaXR5VmlydHVhbFZpcnR1cmFsaXplci1JbnRlcmZhY2Uvc3JjL2FwcC9kaWFsb2dzL2ZpbGUtZGlhbG9nL2ZpbGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaWFsb2dzL2ZpbGUtZGlhbG9nL2ZpbGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvZmlsZS1kaWFsb2cvZmlsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0MDQ3O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwicHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNDA0NztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-file-dialog',
                templateUrl: './file-dialog.component.html',
                styleUrls: ['./file-dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dialogs/rosconfig-dialog/rosconfig-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/rosconfig-dialog/rosconfig-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: RosconfigDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosconfigDialogComponent", function() { return RosconfigDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rosbridge.service */ "./src/app/services/rosbridge.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");












class RosconfigDialogComponent {
    constructor(data, __DialogRef, __BridgeService) {
        this.data = data;
        this.__DialogRef = __DialogRef;
        this.__BridgeService = __BridgeService;
        this.configForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            host: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            port: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    get host() { return this.configForm.get('host'); }
    get port() { return this.configForm.get('port'); }
    onCancel() {
        this.__DialogRef.close(false);
    }
    onSet() {
        if (this.configForm.valid) {
            this.__BridgeService.setCustomAddress(this.configForm.getRawValue());
            this.__DialogRef.close(true);
        }
    }
}
RosconfigDialogComponent.ɵfac = function RosconfigDialogComponent_Factory(t) { return new (t || RosconfigDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rosbridge_service__WEBPACK_IMPORTED_MODULE_3__["BridgeService"])); };
RosconfigDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RosconfigDialogComponent, selectors: [["app-rosconfig-dialog"]], decls: 27, vars: 3, consts: [["mat-button", "", "mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["mat-line", ""], ["matInput", "", "type", "text", "formControlName", "host", "placeholder", "Host", "required", ""], ["matInput", "", "type", "text", "formControlName", "port", "placeholder", "Port", "required", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function RosconfigDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Rosbridge Configuration\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Set a custom host and port for rosbridge websocket connection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ws://");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RosconfigDialogComponent_Template_button_click_23_listener() { return ctx.onSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RosconfigDialogComponent_Template_button_click_25_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.configForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 70, "px");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLine"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: ["td[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F5dGltb3RoeS9HaXRIdWIvUmVhbGl0eVZpcnR1YWxWaXJ0dXJhbGl6ZXIvd2ViLy1SZWFsaXR5VmlydHVhbFZpcnR1cmFsaXplci1JbnRlcmZhY2Uvc3JjL2FwcC9kaWFsb2dzL3Jvc2NvbmZpZy1kaWFsb2cvcm9zY29uZmlnLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlhbG9ncy9yb3Njb25maWctZGlhbG9nL3Jvc2NvbmZpZy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL3Jvc2NvbmZpZy1kaWFsb2cvcm9zY29uZmlnLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iLCJ0ZCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RosconfigDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rosconfig-dialog',
                templateUrl: './rosconfig-dialog.component.html',
                styleUrls: ['./rosconfig-dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_3__["BridgeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/filesystem/filesystem.component.ts":
/*!****************************************************!*\
  !*** ./src/app/filesystem/filesystem.component.ts ***!
  \****************************************************/
/*! exports provided: FilesystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemComponent", function() { return FilesystemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");











function FilesystemComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesystemComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.directoryListing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r66.selectedFolderName, "\n");
} }
function FilesystemComponent_mat_list_item_11_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FilesystemComponent_mat_list_item_11_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FilesystemComponent_mat_list_item_11_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesystemComponent_mat_list_item_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const index_r71 = ctx.index; const item_r70 = ctx.$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.navigateFileSystem(index_r71, item_r70); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FilesystemComponent_mat_list_item_11_mat_icon_3_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilesystemComponent_mat_list_item_11_mat_icon_4_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesystemComponent_mat_list_item_11_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const index_r71 = ctx.index; const item_r70 = ctx.$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.removeItem(index_r71, item_r70); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesystemComponent_mat_list_item_11_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const index_r71 = ctx.index; const item_r70 = ctx.$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.navigateFileSystem(index_r71, item_r70); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r70 = ctx.$implicit;
    const index_r71 = ctx.index;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r67.selectedItemIndex === index_r71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("matTooltip", "Open ", item_r70.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r70.isDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r70.isDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r70.name, " ");
} }
class FilesystemComponent {
    constructor(__DataService, __DialogService) {
        this.__DataService = __DataService;
        this.__DialogService = __DialogService;
        this.directoryList = [];
    }
    ngOnInit() {
        // get root directory listing on page initialisation
        this.directoryListing();
    }
    directoryListing() {
        // reset any values in template
        this.selectedFolderIndex = null;
        this.selectedFolderName = null;
        // request to get the items in the root directory
        this.__DataService.requestRootDirectory().subscribe((rootDirectoryListing) => {
            this.directoryList = rootDirectoryListing;
        });
    }
    navigateFileSystem(index, item) {
        // check if the item is a directory
        if (item.isDir) {
            // assign folder values for template
            this.selectedFolderIndex = index;
            this.selectedFolderName = item.name;
            // further navigate through the filesystem
            this.__DataService.navigateDirectory(item).subscribe((list) => {
                this.directoryList = list;
            });
        }
        else {
            // send a request to get the data for the file
            this.__DataService.requestReadFile(item).subscribe((file) => {
                //ensure the file still exists
                if (file.exists) {
                    // output the data in a dialog
                    this.__DialogService.openFileDialog(file)
                        .afterClosed()
                        .subscribe();
                }
                else {
                    this.__DialogService.openConfirmDialog(`${item.name} no longer exists, try refreshing`, 'Whoops', 'warning')
                        .afterClosed()
                        .subscribe();
                }
            });
        }
    }
    removeItem(index, item) {
        this.__DataService.requestRemoveItem(item).subscribe((response) => {
            if (response.valid) {
                this.directoryList.splice(index, 1);
            }
            else {
                this.__DialogService.openConfirmDialog(`${item.name} no longer exists, try refreshing`, 'Whoops', 'warning')
                    .afterClosed()
                    .subscribe();
            }
        });
    }
}
FilesystemComponent.ɵfac = function FilesystemComponent_Factory(t) { return new (t || FilesystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"])); };
FilesystemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilesystemComponent, selectors: [["app-filesystem"]], decls: 12, vars: 2, consts: [[1, "sidenav-header"], [2, "margin", "0"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], [3, "active", 4, "ngFor", "ngForOf"], ["matLine", ""], ["mat-button", "", 3, "matTooltip", "click"], ["mat-list-icon", "", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Remove", 3, "click"], ["mat-list-icon", ""], ["mat-icon-button", "", 3, "click"]], template: function FilesystemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Browse Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilesystemComponent_button_5_Template, 4, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesystemComponent_Template_button_click_6_listener() { return ctx.directoryListing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Refresh\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FilesystemComponent_mat_list_item_11_Template, 13, 6, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFolderName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.directoryList);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLine"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"]], styles: [".sidenav-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #475bcf;\n  text-align: center;\n  color: #fff;\n}\n\n.mat-list-item.active[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: #fff;\n}\n\n.mat-list-item[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #475bcf;\n}\n\n.mat-list-item.active[_ngcontent-%COMP%]:hover {\n  background-color: #3f51b5;\n  color: #fff;\n}\n\n[_nghost-%COMP%]     .mat-list-item-content {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F5dGltb3RoeS9HaXRIdWIvUmVhbGl0eVZpcnR1YWxWaXJ0dXJhbGl6ZXIvd2ViLy1SZWFsaXR5VmlydHVhbFZpcnR1cmFsaXplci1JbnRlcmZhY2Uvc3JjL2FwcC9maWxlc3lzdGVtL2ZpbGVzeXN0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpbGVzeXN0ZW0vZmlsZXN5c3RlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzeXN0ZW0vZmlsZXN5c3RlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM0NzViY2Y7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtbGlzdC1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzQ3NWJjZjtcbn1cblxuLm1hdC1saXN0LWl0ZW0uYWN0aXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4iLCIuc2lkZW5hdi1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDc1YmNmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWxpc3QtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1saXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICM0NzViY2Y7XG59XG5cbi5tYXQtbGlzdC1pdGVtLmFjdGl2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesystemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filesystem',
                templateUrl: './filesystem.component.html',
                styleUrls: ['./filesystem.component.scss']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
const SERVER_URL = window.location.href + 'filesys';
class DataService {
    constructor(http) {
        this.http = http;
    }
    requestRootDirectory() {
        return this.http.get(SERVER_URL + `/root_list`);
    }
    navigateDirectory(file) {
        return this.http.post(SERVER_URL + `/navigate_dir`, file, httpOptions);
    }
    requestReadFile(file) {
        return this.http.post(SERVER_URL + `/readfile`, file, httpOptions);
    }
    requestRemoveItem(file) {
        return this.http.post(SERVER_URL + `/removeItem`, file, httpOptions);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _dialogs_rosconfig_dialog_rosconfig_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialogs/rosconfig-dialog/rosconfig-dialog.component */ "./src/app/dialogs/rosconfig-dialog/rosconfig-dialog.component.ts");
/* harmony import */ var _dialogs_file_dialog_file_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs/file-dialog/file-dialog.component */ "./src/app/dialogs/file-dialog/file-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");






class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openConfirmDialog(msg, title, ico) {
        return this.dialog.open(_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
            width: '30%',
            disableClose: true,
            data: {
                title: title,
                message: msg,
                icon: ico
            }
        });
    }
    openFileDialog(file) {
        if (file.ext == '.json') {
            return this.dialog.open(_dialogs_file_dialog_file_dialog_component__WEBPACK_IMPORTED_MODULE_3__["FileDialogComponent"], {
                width: '50%',
                disableClose: true,
                data: {
                    name: file.name,
                    attr: JSON.parse(file.data),
                    data: file.data,
                    ext: file.ext
                }
            });
        }
        else {
            return this.dialog.open(_dialogs_file_dialog_file_dialog_component__WEBPACK_IMPORTED_MODULE_3__["FileDialogComponent"], {
                width: '50%',
                disableClose: true,
                data: {
                    name: file.name,
                    data: file.data,
                    ext: file.ext
                }
            });
        }
    }
    openRosconfigDialog() {
        return this.dialog.open(_dialogs_rosconfig_dialog_rosconfig_dialog_component__WEBPACK_IMPORTED_MODULE_2__["RosconfigDialogComponent"], {
            width: '40%',
            disableClose: true,
        });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/rosbridge.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/rosbridge.service.ts ***!
  \***********************************************/
/*! exports provided: BridgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BridgeService", function() { return BridgeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var roslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! roslib */ "./node_modules/roslib/src/RosLib.js");
/* harmony import */ var roslib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(roslib__WEBPACK_IMPORTED_MODULE_2__);




class BridgeService {
    constructor() {
        // set default host and port values
        this.host = window.location.hostname;
        this.port = "9090";
        this.isConnected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    getConnnectionStatus() {
        return this.isConnected.asObservable();
    }
    updateConnectionStatus(status) {
        this.isConnected.next(status);
    }
    setCustomAddress(config) {
        this.host = config.host;
        this.port = config.port;
        // if already connected close old connection
        if (this.isConnected && this.socket) {
            this.socket.close();
            this.socket = null;
            this.updateConnectionStatus(false);
        }
        // establish a new connection after changes
        this.estabishConnection((response) => {
            console.log(response);
        });
    }
    estabishConnection(next) {
        // establish a new ws connection
        this.socket = new roslib__WEBPACK_IMPORTED_MODULE_2__["Ros"]({
            url: `ws://${this.host}:${this.port}`
        });
        this.socket.on('connection', (response) => {
            this.updateConnectionStatus(true);
            console.log(`Success! Connected to rosbridge on: ${this.host}:${this.port}`);
            next(response);
        });
        this.socket.on('error', (response) => {
            this.updateConnectionStatus(false);
            console.log(`Error! Failed to connect to rosbridge on: ${this.host}:${this.port}`);
            next(response);
        });
        this.socket.on('close', (response) => {
            this.updateConnectionStatus(false);
            console.log(`Closed rosbridge connection on: ${this.host}:${this.port}`);
            next(response);
        });
    }
    subscribeToTopic(name, messageType) {
        return new roslib__WEBPACK_IMPORTED_MODULE_2__["Topic"]({
            ros: this.socket,
            name: name,
            messageType: messageType
        });
    }
    createService(name, serviceType) {
        return new roslib__WEBPACK_IMPORTED_MODULE_2__["Service"]({
            ros: this.socket,
            name: name,
            serviceType: serviceType
        });
    }
}
BridgeService.ɵfac = function BridgeService_Factory(t) { return new (t || BridgeService)(); };
BridgeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BridgeService, factory: BridgeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BridgeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/scanner.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/scanner.service.ts ***!
  \*********************************************/
/*! exports provided: ScannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerService", function() { return ScannerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var roslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! roslib */ "./node_modules/roslib/src/RosLib.js");
/* harmony import */ var roslib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(roslib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rosbridge.service */ "./src/app/services/rosbridge.service.ts");





class ScannerService {
    constructor(__BridgeService) {
        this.__BridgeService = __BridgeService;
        this.isScanning = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    getScannerStatus() {
        return this.isScanning.asObservable();
    }
    updateScannerStatus(status) {
        this.isScanning.next(status);
    }
    requestScannerStatus() {
        if (!this.scanService) { // ensure the scanner service has been created
            this.scanService = this.__BridgeService.createService('/switch', 'world_mapper/string');
        }
        this.scanService.callService('/switch', '{"request": "status"}', (res) => {
            console.log("Recieved Status from backend: " + res);
            if (res.response == 'on') {
                this.updateScannerStatus(true);
            }
            if (res.response === 'off') {
                this.updateScannerStatus(false);
            }
        });
    }
    toggleScanner(status) {
        console.log("Current status of interface: " + status);
        if (status) {
            var request = new roslib__WEBPACK_IMPORTED_MODULE_2__["ServiceRequest"]({ request: "stop" });
            this.scanService.callService(request, (res) => {
                console.log(res);
            });
            this.requestScannerStatus(); // update the scanner status
        }
        if (!status) {
            var request = new roslib__WEBPACK_IMPORTED_MODULE_2__["ServiceRequest"]({ request: "start" });
            this.scanService.callService(request, (res) => {
                console.log(res);
            });
            this.requestScannerStatus(); // update the scanner status
        }
    }
}
ScannerService.ɵfac = function ScannerService_Factory(t) { return new (t || ScannerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_rosbridge_service__WEBPACK_IMPORTED_MODULE_3__["BridgeService"])); };
ScannerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScannerService, factory: ScannerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScannerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_3__["BridgeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/sidenav.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidenav.service.ts ***!
  \*********************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/* The code below was copied from stackexchange which adds the ability
    to toggle the sidenav from a seperate component
    https://stackoverflow.com/questions/48073057/open-close-sidenav-from-another-component
*/
class SidenavService {
    constructor() { }
    setSidenav(left, right) {
        this.left = left;
        this.right = right;
        this.leftOpen = this.left.opened;
        this.rightOpen = this.right.opened;
    }
    enableFullScreen() {
        if (this.leftOpen && this.rightOpen) {
            this.toggleRight();
            this.toggleLeft();
        }
        if (this.leftOpen && !this.rightOpen) {
            this.toggleLeft();
        }
        if (!this.leftOpen && this.rightOpen) {
            this.toggleRight();
        }
    }
    disableFullScreen() {
        if (!this.leftOpen && !this.rightOpen) {
            this.toggleRight();
            this.toggleLeft();
        }
        if (this.leftOpen && !this.rightOpen) {
            this.toggleRight();
        }
        if (!this.leftOpen && this.rightOpen) {
            this.toggleLeft();
        }
    }
    toggleRight() {
        this.right.toggle();
        this.rightOpen = this.right.opened;
    }
    toggleLeft() {
        this.left.toggle();
        this.leftOpen = this.left.opened;
    }
}
SidenavService.ɵfac = function SidenavService_Factory(t) { return new (t || SidenavService)(); };
SidenavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidenavService, factory: SidenavService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/rosbridge.service */ "./src/app/services/rosbridge.service.ts");
/* harmony import */ var _services_scanner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scanner.service */ "./src/app/services/scanner.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function SidenavComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.toggleScanner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Stop Scanning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.toggleScanner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Scanning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "settings_overscan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Calibrate Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SidenavComponent {
    constructor(__DialogService, __BridgeService, __ScannerService) {
        this.__DialogService = __DialogService;
        this.__BridgeService = __BridgeService;
        this.__ScannerService = __ScannerService;
        this.isScanning = false;
        this.isConnected = false;
    }
    ngOnInit() {
        // subscribe to connection status
        this.__BridgeService.getConnnectionStatus().subscribe(status => {
            this.isConnected = status; // update status in local component when changes
            if (this.isConnected) {
                this.__ScannerService.requestScannerStatus();
            }
        });
        // subscribe to scanner status
        this.__ScannerService.getScannerStatus().subscribe(status => {
            this.isScanning = status;
        });
    }
    configureRosBridge() {
        this.__DialogService.openRosconfigDialog().afterClosed().subscribe();
    }
    toggleScanner() {
        this.__ScannerService.toggleScanner(this.isScanning);
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rosbridge_service__WEBPACK_IMPORTED_MODULE_2__["BridgeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_scanner_service__WEBPACK_IMPORTED_MODULE_3__["ScannerService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 22, vars: 4, consts: [[1, "sidenav-header"], [1, "mat-display-1", 2, "margin", "0"], [1, "mat-typography"], ["mat-list-item", "", 3, "routerLink"], ["mat-list-item", "", 3, "click", 4, "ngIf"], ["mat-list-item", "", 4, "ngIf"], ["mat-list-item", "", 3, "click"], [1, "img-container"], [1, "headline-title"], ["matListAvatar", "", "src", "assets/ros_logo.png"], ["mat-list-item", ""]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "3d_rotation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lidar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidenavComponent_a_11_Template, 4, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidenavComponent_a_12_Template, 4, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SidenavComponent_a_13_Template, 4, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_14_listener() { return ctx.configureRosBridge(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Configure Rosbridge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Powered by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConnected && ctx.isScanning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConnected && !ctx.isScanning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConnected);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListAvatarCssMatStyler"]], styles: [".sidenav-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #475bcf;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nmat-nav-list[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-bottom: 10px;\n  transition: all 0.4s;\n  background: #475bcf;\n  color: white;\n}\n\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #6e83d4;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 70%;\n  padding: 20px;\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F5dGltb3RoeS9HaXRIdWIvUmVhbGl0eVZpcnR1YWxWaXJ0dXJhbGl6ZXIvd2ViLy1SZWFsaXR5VmlydHVhbFZpcnR1cmFsaXplci1JbnRlcmZhY2Uvc3JjL2FwcC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDc1YmNmO1xufVxuXG5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxubWF0LW5hdi1saXN0IHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbm1hdC1uYXYtbGlzdCBhIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIGJhY2tncm91bmQ6ICM0NzViY2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWF0LW5hdi1saXN0IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogcmdiKDExMCwgMTMxLCAyMTIpO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG4uaW1nLWNvbnRhaW5lciBpbWcge1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4iLCIuc2lkZW5hdi1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDc1YmNmO1xufVxuXG5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxubWF0LW5hdi1saXN0IHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtbmF2LWxpc3QgYSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBiYWNrZ3JvdW5kOiAjNDc1YmNmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm1hdC1uYXYtbGlzdCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICM2ZTgzZDQ7XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbi5pbWctY29udGFpbmVyIGltZyB7XG4gIG1heC13aWR0aDogNzAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return [{ type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }, { type: _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_2__["BridgeService"] }, { type: _services_scanner_service__WEBPACK_IMPORTED_MODULE_3__["ScannerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/statusbar/statusbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/statusbar/statusbar.component.ts ***!
  \**************************************************/
/*! exports provided: StatusbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusbarComponent", function() { return StatusbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rosbridge.service */ "./src/app/services/rosbridge.service.ts");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/* harmony import */ var _services_scanner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scanner.service */ "./src/app/services/scanner.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");










function StatusbarComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r52.bridge_status_icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r52.bridge_status_msg, " ");
} }
function StatusbarComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r53.bridge_status_msg, " ");
} }
class StatusbarComponent {
    constructor(__BridgeService, __SidenavService, __ScannerService) {
        this.__BridgeService = __BridgeService;
        this.__SidenavService = __SidenavService;
        this.__ScannerService = __ScannerService;
        // status icons
        this.bridge_status_icon = "phonelink";
        this.scan_status_icon = 'close';
        // status messages
        this.bridge_status_msg = "Connecting...";
        this.scan_status_msg = "Disabled";
        this.loading = true;
        this.isScanning = false;
    }
    ngOnInit() {
        // connect to rosbridge
        this.__BridgeService.estabishConnection((response) => {
            if (response.type == "open") {
                this.bridge_status_msg = "Connected";
                this.bridge_status_icon = 'phonelink';
                this.loading = false;
            }
            if (response.type == 'close') {
                this.bridge_status_msg = 'Connection Closed';
                this.bridge_status_icon = 'close';
                this.loading = false;
            }
            if (response.type == 'error') {
                this.bridge_status_msg = "Connection Failed";
                this.bridge_status_icon = 'error';
                this.loading = false;
            }
        });
        // subscribe to scanner status
        this.__ScannerService.getScannerStatus().subscribe(isScanning => {
            if (isScanning) {
                this.scan_status_msg = 'Enabled';
                this.scan_status_icon = 'cast';
            }
            if (!isScanning) {
                this.scan_status_msg = 'Disabled';
                this.scan_status_icon = 'close';
            }
        });
    }
    // open/close left side navigation pane
    toggleLSideNav() {
        this.__SidenavService.toggleLeft();
    }
    // open/close right side navigation pane
    toggleRSideNav() {
        this.__SidenavService.toggleRight();
    }
}
StatusbarComponent.ɵfac = function StatusbarComponent_Factory(t) { return new (t || StatusbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rosbridge_service__WEBPACK_IMPORTED_MODULE_1__["BridgeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_scanner_service__WEBPACK_IMPORTED_MODULE_3__["ScannerService"])); };
StatusbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusbarComponent, selectors: [["app-statusbar"]], decls: 18, vars: 4, consts: [["mat-icon-button", "", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "span"], ["mat-flat-button", ""], ["mat-flat-button", "", 4, "ngIf"], ["color", "primary", "diameter", "20"]], template: function StatusbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatusbarComponent_Template_button_click_2_listener() { return ctx.toggleLSideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Scanner Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Rosbridge Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StatusbarComponent_button_13_Template, 4, 2, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StatusbarComponent_button_14_Template, 4, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatusbarComponent_Template_button_click_15_listener() { return ctx.toggleRSideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.scan_status_icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.scan_status_msg, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]], styles: [".span[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  height: 10%;\n  justify-content: center;\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F5dGltb3RoeS9HaXRIdWIvUmVhbGl0eVZpcnR1YWxWaXJ0dXJhbGl6ZXIvd2ViLy1SZWFsaXR5VmlydHVhbFZpcnR1cmFsaXplci1JbnRlcmZhY2Uvc3JjL2FwcC9zdGF0dXNiYXIvc3RhdHVzYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGF0dXNiYXIvc3RhdHVzYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zdGF0dXNiYXIvc3RhdHVzYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYW4ge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGhlaWdodDogMTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG4iLCIuc3BhbiB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgaGVpZ2h0OiAxMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statusbar',
                templateUrl: './statusbar.component.html',
                styleUrls: ['./statusbar.component.scss']
            }]
    }], function () { return [{ type: _services_rosbridge_service__WEBPACK_IMPORTED_MODULE_1__["BridgeService"] }, { type: _services_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"] }, { type: _services_scanner_service__WEBPACK_IMPORTED_MODULE_3__["ScannerService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aytimothy/GitHub/RealityVirtualVirturalizer/web/-RealityVirtualVirturalizer-Interface/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map