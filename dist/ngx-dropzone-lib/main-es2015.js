(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Hhi":
/*!***************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone.service.ts ***!
  \***************************************************************/
/*! exports provided: NgxDropzoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneService", function() { return NgxDropzoneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * This service contains the filtering logic to be applied to
 * any dropped or selected file. If a file matches all criteria
 * like maximum size or accept type, it will be emitted in the
 * addedFiles array, otherwise in the rejectedFiles array.
 */
let NgxDropzoneService = class NgxDropzoneService {
    parseFileList(files, accept, maxFileSize, multiple) {
        const addedFiles = [];
        const rejectedFiles = [];
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i);
            if (!this.isAccepted(file, accept)) {
                this.rejectFile(rejectedFiles, file, 'type');
                continue;
            }
            if (maxFileSize && file.size > maxFileSize) {
                this.rejectFile(rejectedFiles, file, 'size');
                continue;
            }
            if (!multiple && addedFiles.length >= 1) {
                this.rejectFile(rejectedFiles, file, 'no_multiple');
                continue;
            }
            addedFiles.push(file);
        }
        const result = {
            addedFiles,
            rejectedFiles
        };
        return result;
    }
    isAccepted(file, accept) {
        if (accept === '*') {
            return true;
        }
        const acceptFiletypes = accept.split(',').map(it => it.toLowerCase().trim());
        const filetype = file.type.toLowerCase();
        const filename = file.name.toLowerCase();
        const matchedFileType = acceptFiletypes.find(acceptFiletype => {
            // check for wildcard mimetype (e.g. image/*)
            if (acceptFiletype.endsWith('/*')) {
                return filetype.split('/')[0] === acceptFiletype.split('/')[0];
            }
            // check for file extension (e.g. .csv)
            if (acceptFiletype.startsWith(".")) {
                return filename.endsWith(acceptFiletype);
            }
            // check for exact mimetype match (e.g. image/jpeg)
            return acceptFiletype == filetype;
        });
        return !!matchedFileType;
    }
    rejectFile(rejectedFiles, file, reason) {
        const rejectedFile = file;
        rejectedFile.reason = reason;
        rejectedFiles.push(rejectedFile);
    }
};
NgxDropzoneService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NgxDropzoneService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kkaabbaa/projects/lib/ngx-dropzone/src/main.ts */"zUnb");


/***/ }),

/***/ "1UD4":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ngx-dropzone/src/lib/ngx-dropzone/ngx-dropzone.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input #fileInput type=\"file\" [id]=\"id\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\"\n       webkitdirectory\n       (change)=\"_onFilesSelected($event)\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\"\n       [attr.aria-describedby]=\"ariaDescribedBy\">\n<ng-content select=\"ngx-dropzone-label\" *ngIf=\"!_hasPreviews\"></ng-content>\n<ng-content select=\"ngx-dropzone-preview\"></ng-content>\n<ng-content></ng-content>\n");

/***/ }),

/***/ "3XeD":
/*!*********************************************************************************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone-preview/ngx-dropzone-image-preview/ngx-dropzone-image-preview.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  min-width: unset !important;\n  max-width: unset !important;\n  padding: 0 !important;\n}\n:host:hover img, :host:focus img {\n  opacity: 0.7;\n}\n:host:hover ngx-dropzone-remove-badge, :host:focus ngx-dropzone-remove-badge {\n  opacity: 1;\n}\n:host ngx-dropzone-remove-badge {\n  opacity: 0;\n}\n:host img {\n  max-height: 100%;\n  border-radius: 5px;\n  opacity: 0.8;\n}\n:host ::ng-deep ngx-dropzone-label {\n  position: absolute;\n  overflow-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBQ0Q7QUFHRTtFQUNDLFlBQUE7QUFESDtBQUlFO0VBQ0MsVUFBQTtBQUZIO0FBTUM7RUFDQyxVQUFBO0FBSkY7QUFPQztFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTEY7QUFRQztFQUNDLGtCQUFBO0VBQ0EseUJBQUE7QUFORiIsImZpbGUiOiJuZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0bWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuXHRtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxuXHQmOmhvdmVyLFxuXHQmOmZvY3VzIHtcblx0XHRpbWcge1xuXHRcdFx0b3BhY2l0eTogMC43O1xuXHRcdH1cblxuXHRcdG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2Uge1xuXHRcdFx0b3BhY2l0eTogMTtcblx0XHR9XG5cdH1cblxuXHRuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cblx0aW1nIHtcblx0XHRtYXgtaGVpZ2h0OiAxMDAlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRvcGFjaXR5OiAwLjg7XG5cdH1cblxuXHQ6Om5nLWRlZXAgbmd4LWRyb3B6b25lLWxhYmVsIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblx0fVxufVxuIl19 */");

/***/ }),

/***/ "5s2c":
/*!*******************************************************************************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone-preview/ngx-dropzone-video-preview/ngx-dropzone-video-preview.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: NgxDropzoneVideoPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneVideoPreviewComponent", function() { return NgxDropzoneVideoPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_dropzone_video_preview_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-dropzone-video-preview.component.scss */ "iMPi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngx-dropzone-preview.component */ "cpVP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
var NgxDropzoneVideoPreviewComponent_1;





let NgxDropzoneVideoPreviewComponent = NgxDropzoneVideoPreviewComponent_1 = class NgxDropzoneVideoPreviewComponent extends _ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_3__["NgxDropzonePreviewComponent"] {
    constructor(sanitizer) {
        super(sanitizer);
    }
    ngOnInit() {
        if (!this.file) {
            console.error('No file to read. Please provide a file using the [file] Input property.');
            return;
        }
        /**
         * We sanitize the URL here to enable the preview.
         * Please note that this could cause security issues!
         **/
        this.videoSrc = URL.createObjectURL(this.file);
        this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
    }
    ngOnDestroy() {
        URL.revokeObjectURL(this.videoSrc);
    }
};
NgxDropzoneVideoPreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
NgxDropzoneVideoPreviewComponent = NgxDropzoneVideoPreviewComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ngx-dropzone-video-preview',
        template: `
    <video *ngIf="sanitizedVideoSrc" controls (click)="$event.stopPropagation()">
      <source [src]="sanitizedVideoSrc" />
    </video>
    <ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
        providers: [
            {
                provide: _ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_3__["NgxDropzonePreviewComponent"],
                useExisting: NgxDropzoneVideoPreviewComponent_1
            }
        ],
        styles: [_ngx_dropzone_video_preview_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], NgxDropzoneVideoPreviewComponent);



/***/ }),

/***/ "8Lzs":
/*!*****************************************************************************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone-preview/ngx-dropzone-remove-badge/ngx-dropzone-remove-badge.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: NgxDropzoneRemoveBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneRemoveBadgeComponent", function() { return NgxDropzoneRemoveBadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_dropzone_remove_badge_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-dropzone-remove-badge.component.scss */ "EAKq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let NgxDropzoneRemoveBadgeComponent = class NgxDropzoneRemoveBadgeComponent {
};
NgxDropzoneRemoveBadgeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ngx-dropzone-remove-badge',
        template: `
    <svg>
      <line x1="0" y1="0" x2="10" y2="10" />
      <line x1="0" y1="10" x2="10" y2="0" />
    </svg>
  `,
        styles: [_ngx_dropzone_remove_badge_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], NgxDropzoneRemoveBadgeComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DAoe":
/*!**************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone.module.ts ***!
  \**************************************************************/
/*! exports provided: NgxDropzoneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneModule", function() { return NgxDropzoneModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_dropzone_label_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-dropzone-label.directive */ "kP7S");
/* harmony import */ var _ngx_dropzone_preview_ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-dropzone-preview/ngx-dropzone-preview.component */ "cpVP");
/* harmony import */ var _ngx_dropzone_ngx_dropzone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngx-dropzone/ngx-dropzone.component */ "x9vs");
/* harmony import */ var _ngx_dropzone_preview_ngx_dropzone_image_preview_ngx_dropzone_image_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-dropzone-preview/ngx-dropzone-image-preview/ngx-dropzone-image-preview.component */ "Mj/Q");
/* harmony import */ var _ngx_dropzone_preview_ngx_dropzone_remove_badge_ngx_dropzone_remove_badge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngx-dropzone-preview/ngx-dropzone-remove-badge/ngx-dropzone-remove-badge.component */ "8Lzs");
/* harmony import */ var _ngx_dropzone_preview_ngx_dropzone_video_preview_ngx_dropzone_video_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngx-dropzone-preview/ngx-dropzone-video-preview/ngx-dropzone-video-preview.component */ "5s2c");









let NgxDropzoneModule = class NgxDropzoneModule {
};
NgxDropzoneModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [
            _ngx_dropzone_ngx_dropzone_component__WEBPACK_IMPORTED_MODULE_5__["NgxDropzoneComponent"],
            _ngx_dropzone_label_directive__WEBPACK_IMPORTED_MODULE_3__["NgxDropzoneLabelDirective"],
            _ngx_dropzone_preview_ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_4__["NgxDropzonePreviewComponent"],
            _ngx_dropzone_preview_ngx_dropzone_image_preview_ngx_dropzone_image_preview_component__WEBPACK_IMPORTED_MODULE_6__["NgxDropzoneImagePreviewComponent"],
            _ngx_dropzone_preview_ngx_dropzone_remove_badge_ngx_dropzone_remove_badge_component__WEBPACK_IMPORTED_MODULE_7__["NgxDropzoneRemoveBadgeComponent"],
            _ngx_dropzone_preview_ngx_dropzone_video_preview_ngx_dropzone_video_preview_component__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneVideoPreviewComponent"],
        ],
        exports: [
            _ngx_dropzone_ngx_dropzone_component__WEBPACK_IMPORTED_MODULE_5__["NgxDropzoneComponent"],
            _ngx_dropzone_label_directive__WEBPACK_IMPORTED_MODULE_3__["NgxDropzoneLabelDirective"],
            _ngx_dropzone_preview_ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_4__["NgxDropzonePreviewComponent"],
            _ngx_dropzone_preview_ngx_dropzone_image_preview_ngx_dropzone_image_preview_component__WEBPACK_IMPORTED_MODULE_6__["NgxDropzoneImagePreviewComponent"],
            _ngx_dropzone_preview_ngx_dropzone_remove_badge_ngx_dropzone_remove_badge_component__WEBPACK_IMPORTED_MODULE_7__["NgxDropzoneRemoveBadgeComponent"],
            _ngx_dropzone_preview_ngx_dropzone_video_preview_ngx_dropzone_video_preview_component__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneVideoPreviewComponent"],
        ]
    })
], NgxDropzoneModule);



/***/ }),

/***/ "EAKq":
/*!*******************************************************************************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone-preview/ngx-dropzone-remove-badge/ngx-dropzone-remove-badge.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 22px;\n  width: 22px;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  border-radius: 50%;\n  background: #bbb;\n  color: #333;\n  cursor: pointer;\n}\n:host:hover {\n  background: #aeaeae;\n}\n:host > svg {\n  height: 10px;\n  width: 10px;\n}\n:host > svg > line {\n  stroke-width: 2px;\n  stroke: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFBTiIsImZpbGUiOiJuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjYmJiO1xuICBjb2xvcjogIzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbigjYmJiLCA1JSk7XG4gIH1cblxuICA+IHN2ZyB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuXG4gICAgPiBsaW5lIHtcbiAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgICAgc3Ryb2tlOiAjZmZmO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "J1ME":
/*!************************************************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone-preview/ngx-dropzone-preview.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background-image: linear-gradient(to top, #ededed, #efefef, #f1f1f1, #f4f4f4, #f6f6f6);\n}\n:host:hover, :host:focus {\n  background-image: linear-gradient(to top, #e3e3e3, #ebeaea, #e8e7e7, #ebeaea, #f4f4f4);\n  outline: 0;\n}\n:host:hover ngx-dropzone-remove-badge, :host:focus ngx-dropzone-remove-badge {\n  opacity: 1;\n}\n:host ngx-dropzone-remove-badge {\n  opacity: 0;\n}\n:host ::ng-deep ngx-dropzone-label {\n  overflow-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25neC1kcm9wem9uZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0ZBQUE7QUFDRDtBQUNDO0VBRUMsc0ZBQUE7RUFDQSxVQUFBO0FBQUY7QUFFRTtFQUNDLFVBQUE7QUFBSDtBQUlDO0VBQ0MsVUFBQTtBQUZGO0FBS0M7RUFDQyx5QkFBQTtBQUhGIiwiZmlsZSI6Im5neC1kcm9wem9uZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZWRlZGVkLCAjZWZlZmVmLCAjZjFmMWYxLCAjZjRmNGY0LCAjZjZmNmY2KTtcblxuXHQmOmhvdmVyLFxuXHQmOmZvY3VzIHtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTNlM2UzLCAjZWJlYWVhLCAjZThlN2U3LCAjZWJlYWVhLCAjZjRmNGY0KTtcblx0XHRvdXRsaW5lOiAwO1xuXG5cdFx0bmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSB7XG5cdFx0XHRvcGFjaXR5OiAxO1xuXHRcdH1cblx0fVxuXG5cdG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2Uge1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblxuXHQ6Om5nLWRlZXAgbmd4LWRyb3B6b25lLWxhYmVsIHtcblx0XHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXHR9XG59XG4iXX0= */");

/***/ }),

/***/ "J9/M":
/*!********************************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone/ngx-dropzone.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  align-items: center;\n  height: 180px;\n  background: #fff;\n  cursor: pointer;\n  color: #717386;\n  border: 2px dashed #717386;\n  border-radius: 5px;\n  font-size: 16px;\n  /** The default scroll-to-side styles **/\n  overflow-x: auto;\n}\n:host.ngx-dz-hovered {\n  border-style: solid;\n}\n:host.ngx-dz-disabled {\n  opacity: 0.5;\n  cursor: no-drop;\n  pointer-events: none;\n}\n:host.expandable {\n  overflow: hidden;\n  height: unset;\n  min-height: 180px;\n  flex-wrap: wrap;\n}\n:host.unclickable {\n  cursor: default;\n}\n:host ::ng-deep ngx-dropzone-label {\n  text-align: center;\n  z-index: 10;\n  margin: 10px auto;\n}\n:host input {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n:host input:focus + ::ng-deep ngx-dropzone-label {\n  /* Fallback for older browsers */\n  outline: 1px dotted #000;\n  outline: -webkit-focus-ring-color auto 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25neC1kcm9wem9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFQTztFQVFQLGVBQUE7RUFDQSxjQVJXO0VBU1gsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFZQSx3Q0FBQTtFQUNBLGdCQUFBO0FBYkQ7QUFFQztFQUNDLG1CQUFBO0FBQUY7QUFHQztFQUNDLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFERjtBQU9DO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTEY7QUFRQztFQUNDLGVBQUE7QUFORjtBQVNDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFQRjtBQVVDO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFSRjtBQVVFO0VBQ0MsZ0NBQUE7RUFDQSx3QkFBQTtFQUVBLDBDQUFBO0FBVEgiLCJmaWxlIjoibmd4LWRyb3B6b25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGR6LWJnOiAjZmZmO1xuJGR6LWJvcmRlcjogIzcxNzM4NjtcblxuOmhvc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IDE4MHB4O1xuXHRiYWNrZ3JvdW5kOiAkZHotYmc7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Y29sb3I6ICRkei1ib3JkZXI7XG5cdGJvcmRlcjogMnB4IGRhc2hlZCAkZHotYm9yZGVyO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGZvbnQtc2l6ZTogMTZweDtcblxuXHQmLm5neC1kei1ob3ZlcmVkIHtcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHR9XG5cblx0Ji5uZ3gtZHotZGlzYWJsZWQge1xuXHRcdG9wYWNpdHk6IDAuNTtcblx0XHRjdXJzb3I6IG5vLWRyb3A7XG5cdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdH1cblxuXHQvKiogVGhlIGRlZmF1bHQgc2Nyb2xsLXRvLXNpZGUgc3R5bGVzICoqL1xuXHRvdmVyZmxvdy14OiBhdXRvO1xuXG5cdCYuZXhwYW5kYWJsZSB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRoZWlnaHQ6IHVuc2V0O1xuXHRcdG1pbi1oZWlnaHQ6IDE4MHB4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0fVxuXG5cdCYudW5jbGlja2FibGUge1xuXHRcdGN1cnNvcjogZGVmYXVsdDtcblx0fVxuXG5cdDo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWwge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR6LWluZGV4OiAxMDtcblx0XHRtYXJnaW46IDEwcHggYXV0bztcblx0fVxuXG5cdCYgaW5wdXQge1xuXHRcdHdpZHRoOiAwLjFweDtcblx0XHRoZWlnaHQ6IDAuMXB4O1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ei1pbmRleDogLTE7XG5cblx0XHQmOmZvY3VzICsgOjpuZy1kZWVwIG5neC1kcm9wem9uZS1sYWJlbCB7XG5cdFx0XHQvKiBGYWxsYmFjayBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cblx0XHRcdG91dGxpbmU6IDFweCBkb3R0ZWQgIzAwMDtcblxuXHRcdFx0b3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gNXB4O1xuXHRcdH1cblx0fVxufVxuIl19 */");

/***/ }),

/***/ "Mj/Q":
/*!*******************************************************************************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone-preview/ngx-dropzone-image-preview/ngx-dropzone-image-preview.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: NgxDropzoneImagePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneImagePreviewComponent", function() { return NgxDropzoneImagePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_dropzone_image_preview_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-dropzone-image-preview.component.scss */ "3XeD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngx-dropzone-preview.component */ "cpVP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
var NgxDropzoneImagePreviewComponent_1;





let NgxDropzoneImagePreviewComponent = NgxDropzoneImagePreviewComponent_1 = class NgxDropzoneImagePreviewComponent extends _ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_3__["NgxDropzonePreviewComponent"] {
    constructor(sanitizer) {
        super(sanitizer);
        /** The image data source. */
        this.defaultImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
        this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(this.defaultImgLoading);
    }
    /** The file to preview. */
    set file(value) {
        this._file = value;
        this.renderImage();
    }
    get file() { return this._file; }
    ngOnInit() {
        this.renderImage();
    }
    renderImage() {
        this.readFile()
            .then(img => setTimeout(() => this.imageSrc = img))
            .catch(err => console.error(err));
    }
};
NgxDropzoneImagePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
NgxDropzoneImagePreviewComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
NgxDropzoneImagePreviewComponent = NgxDropzoneImagePreviewComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ngx-dropzone-image-preview',
        template: `
    <img [src]="imageSrc" />
		<ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
        providers: [
            {
                provide: _ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_3__["NgxDropzonePreviewComponent"],
                useExisting: NgxDropzoneImagePreviewComponent_1
            }
        ],
        styles: [_ngx_dropzone_image_preview_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], NgxDropzoneImagePreviewComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.files = [];
    }
    onFilesAdded(event) {
        console.log(event);
        this.files.push(...event.addedFiles);
    }
    onFilesRejected(event) {
        console.log(event);
    }
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Default\n<ngx-dropzone></ngx-dropzone>\n\n<ngx-dropzone #drop [id]=\"'idtest'\" [aria-label]=\"'al-test'\" [aria-labelledby]=\"'alb-test'\"\n\t(change)=\"onFilesAdded($event)\">\n\t<ngx-dropzone-label>Drop it, baby!</ngx-dropzone-label>\n\t<ngx-dropzone-preview *ngFor=\"let f of files\" [removable]=\"true\" (removed)=\"onRemove(f)\">\n\t\t<ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\n\t</ngx-dropzone-preview>\n</ngx-dropzone>\n\n<button (click)=\"drop.showFileSelector()\">Open</button>\n\n<ngx-dropzone (change)=\"onFilesAdded($event)\" [disabled]=\"true\" [expandable]=\"true\">\n\t<ngx-dropzone-label>Drop it like it's hot!</ngx-dropzone-label>\n\t<ngx-dropzone-preview *ngFor=\"let f of files\" [removable]=\"true\" (removed)=\"onRemove(f)\">\n\t\t<ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\n\t</ngx-dropzone-preview>\n</ngx-dropzone>\n\n<ngx-dropzone (change)=\"onFilesAdded($event)\" [multiple]=\"false\" [disableClick]=\"true\">\n\t<ngx-dropzone-label>Drop it like it's hott!</ngx-dropzone-label>\n\t<ngx-dropzone-preview *ngFor=\"let f of files\" [removable]=\"true\" (removed)=\"onRemove(f)\">\n\t\t<ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\n\t</ngx-dropzone-preview>\n</ngx-dropzone>\n\n<div class=\"custom-dropzone\" ngx-dropzone [accept]=\"'image/png'\" (change)=\"onFilesAdded($event)\">\n\t<ngx-dropzone-label>\n\t\t<div>\n\t\t\t<h2>My custom dropzone I</h2>\n\t\t</div>\n\t</ngx-dropzone-label>\n\t<p>P-Element</p>\n\t<ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of files\" [file]=\"f\" [removable]=\"true\"\n\t\t(removed)=\"onRemove(f)\">\n\t\t<ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\n\t</ngx-dropzone-image-preview>\n</div>\n\n<div class=\"custom-dropzone\" ngx-dropzone [accept]=\"'video/*'\" (change)=\"onFilesAdded($event)\">\n\t<ngx-dropzone-label>\n\t\t<div>\n\t\t\t<h2>My custom dropzone II</h2>\n\t\t</div>\n\t</ngx-dropzone-label>\n\t<ngx-dropzone-video-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of files\" [file]=\"f\" [removable]=\"true\"\n\t\t(removed)=\"onRemove(f)\">\n\t\t<ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\n\t</ngx-dropzone-video-preview>\n</div>\n\n<div class=\"custom-dropzone\" ngx-dropzone (change)=\"onFilesAdded($event)\">\n\t<ngx-dropzone-label>\n\t\t<div>\n\t\t\t<h2>My custom dropzone III</h2>\n\t\t</div>\n\t</ngx-dropzone-label>\n\t<ngx-dropzone-preview *ngFor=\"let f of files\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f)\">\n\t\t<ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\n\t</ngx-dropzone-preview>\n</div>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var projects_ngx_dropzone_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/ngx-dropzone/src/public_api */ "y46r");




// import { NgxDropzoneModule } from 'ngx-dropzone';

let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            projects_ngx_dropzone_src_public_api__WEBPACK_IMPORTED_MODULE_4__["NgxDropzoneModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "cpVP":
/*!**********************************************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone-preview/ngx-dropzone-preview.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NgxDropzonePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzonePreviewComponent", function() { return NgxDropzonePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_dropzone_preview_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-dropzone-preview.component.scss */ "J1ME");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "gvxr");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["BACKSPACE"] = 8] = "BACKSPACE";
    KEY_CODE[KEY_CODE["DELETE"] = 46] = "DELETE";
})(KEY_CODE || (KEY_CODE = {}));
let NgxDropzonePreviewComponent = class NgxDropzonePreviewComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this._removable = false;
        /** Emitted when the element should be removed. */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /** Make the preview item focusable using the tab key. */
        this.tabIndex = 0;
    }
    /** The file to preview. */
    set file(value) { this._file = value; }
    get file() { return this._file; }
    /** Allow the user to remove files. */
    get removable() {
        return this._removable;
    }
    set removable(value) {
        this._removable = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    keyEvent(event) {
        switch (event.keyCode) {
            case KEY_CODE.BACKSPACE:
            case KEY_CODE.DELETE:
                this.remove();
                break;
            default:
                break;
        }
    }
    /** We use the HostBinding to pass these common styles to child components. */
    get hostStyle() {
        const styles = `
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /** Remove method to be used from the template. */
    _remove(event) {
        event.stopPropagation();
        this.remove();
    }
    /** Remove the preview item (use from component code). */
    remove() {
        if (this._removable) {
            this.removed.next(this.file);
        }
    }
    readFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = e => {
                    resolve(e.target.result);
                };
                reader.onerror = e => {
                    console.error(`FileReader failed on file ${this.file.name}.`);
                    reject(e);
                };
                if (!this.file) {
                    return reject('No file to read. Please provide a file using the [file] Input property.');
                }
                reader.readAsDataURL(this.file);
            });
        });
    }
};
NgxDropzonePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
NgxDropzonePreviewComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    keyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['keyup', ['$event'],] }],
    hostStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['style',] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['tabindex',] }]
};
NgxDropzonePreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ngx-dropzone-preview',
        template: `
		<ng-content select="ngx-dropzone-label"></ng-content>
		<ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
		</ngx-dropzone-remove-badge>
	`,
        styles: [_ngx_dropzone_preview_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], NgxDropzonePreviewComponent);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "gvxr":
/*!**************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/helpers.ts ***!
  \**************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
 */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
/**
 * Whether the provided value is considered a number.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 */
function coerceNumberProperty(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return (!isNaN(parseFloat(value)) && !isNaN(Number(value))) ? Number(value) : null;
}


/***/ }),

/***/ "iMPi":
/*!*********************************************************************************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone-preview/ngx-dropzone-video-preview/ngx-dropzone-video-preview.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  min-width: unset !important;\n  max-width: unset !important;\n  padding: 0 !important;\n}\n:host:hover video, :host:focus video {\n  opacity: 0.7;\n}\n:host:hover ngx-dropzone-remove-badge, :host:focus ngx-dropzone-remove-badge {\n  opacity: 1;\n}\n:host ngx-dropzone-remove-badge {\n  opacity: 0;\n}\n:host video {\n  max-height: 100%;\n  border-radius: 5px;\n}\n:host ::ng-deep ngx-dropzone-label {\n  position: absolute;\n  overflow-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25neC1kcm9wem9uZS12aWRlby1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBQUQ7QUFJSTtFQUNELFlBQUE7QUFGSDtBQUtFO0VBQ0MsVUFBQTtBQUhIO0FBT0M7RUFDQyxVQUFBO0FBTEY7QUFRQztFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7QUFORjtBQVNFO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVBGIiwiZmlsZSI6Im5neC1kcm9wem9uZS12aWRlby1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG5cdG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcblx0bWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cblx0Jjpob3Zlcixcblx0Jjpmb2N1cyB7XG4gICAgdmlkZW8ge1xuXHRcdFx0b3BhY2l0eTogMC43O1xuICAgIH1cblxuXHRcdG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2Uge1xuXHRcdFx0b3BhY2l0eTogMTtcblx0XHR9XG5cdH1cblxuXHRuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cblx0dmlkZW8ge1xuXHRcdG1heC1oZWlnaHQ6IDEwMCU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIG5neC1kcm9wem9uZS1sYWJlbCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "kP7S":
/*!***********************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone-label.directive.ts ***!
  \***********************************************************************/
/*! exports provided: NgxDropzoneLabelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneLabelDirective", function() { return NgxDropzoneLabelDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let NgxDropzoneLabelDirective = class NgxDropzoneLabelDirective {
};
NgxDropzoneLabelDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'ngx-dropzone-label'
    })
], NgxDropzoneLabelDirective);



/***/ }),

/***/ "x9vs":
/*!******************************************************************************!*\
  !*** ./projects/ngx-dropzone/src/lib/ngx-dropzone/ngx-dropzone.component.ts ***!
  \******************************************************************************/
/*! exports provided: NgxDropzoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneComponent", function() { return NgxDropzoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ngx_dropzone_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ngx-dropzone.component.html */ "1UD4");
/* harmony import */ var _ngx_dropzone_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-dropzone.component.scss */ "J9/M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_dropzone_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngx-dropzone.service */ "/Hhi");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "gvxr");
/* harmony import */ var _ngx_dropzone_preview_ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ngx-dropzone-preview/ngx-dropzone-preview.component */ "cpVP");







let NgxDropzoneComponent = class NgxDropzoneComponent {
    constructor(service) {
        this.service = service;
        /** Emitted when any files were added or rejected. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /** Set the accepted file types. Defaults to '*'. */
        this.accept = '*';
        this._disabled = false;
        this._multiple = true;
        this._maxFileSize = undefined;
        this._expandable = false;
        this._disableClick = false;
        this._isHovered = false;
    }
    get _hasPreviews() {
        return !!this._previewChildren.length;
    }
    /** Disable any user interaction with the component. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        if (this._isHovered) {
            this._isHovered = false;
        }
    }
    /** Allow the selection of multiple files. */
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
    }
    /** Set the maximum size a single file may have. */
    get maxFileSize() {
        return this._maxFileSize;
    }
    set maxFileSize(value) {
        this._maxFileSize = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);
    }
    /** Allow the dropzone container to expand vertically. */
    get expandable() {
        return this._expandable;
    }
    set expandable(value) {
        this._expandable = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
    }
    /** Open the file selector on click. */
    get disableClick() {
        return this._disableClick;
    }
    set disableClick(value) {
        this._disableClick = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
    }
    /** Show the native OS file explorer to select files. */
    _onClick() {
        if (!this.disableClick) {
            this.showFileSelector();
        }
    }
    _onDragOver(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = true;
    }
    _onDragLeave() {
        this._isHovered = false;
    }
    _onDrop(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = false;
        this.handleFileDrop(event.dataTransfer.files);
    }
    showFileSelector() {
        if (!this.disabled) {
            this._fileInput.nativeElement.click();
        }
    }
    _onFilesSelected(event) {
        const files = event.target.files;
        this.handleFileDrop(files);
        // Reset the native file input element to allow selecting the same file again
        this._fileInput.nativeElement.value = '';
        // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.
        this.preventDefault(event);
    }
    handleFileDrop(files) {
        const result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
        this.change.next({
            addedFiles: result.addedFiles,
            rejectedFiles: result.rejectedFiles,
            source: this
        });
    }
    preventDefault(event) {
        event.preventDefault();
        event.stopPropagation();
    }
};
NgxDropzoneComponent.ctorParameters = () => [
    { type: _ngx_dropzone_service__WEBPACK_IMPORTED_MODULE_4__["NgxDropzoneService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }] }
];
NgxDropzoneComponent.propDecorators = {
    _previewChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [_ngx_dropzone_preview_ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_6__["NgxDropzonePreviewComponent"], { descendants: true },] }],
    _fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fileInput', { static: true },] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.ngx-dz-disabled',] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    maxFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    expandable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.expandable',] }],
    disableClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.unclickable',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-describedby',] }],
    _isHovered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.ngx-dz-hovered',] }],
    _onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click',] }],
    _onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['dragover', ['$event'],] }],
    _onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['dragleave',] }],
    _onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['drop', ['$event'],] }]
};
NgxDropzoneComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ngx-dropzone, [ngx-dropzone]',
        template: _raw_loader_ngx_dropzone_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ngx_dropzone_service__WEBPACK_IMPORTED_MODULE_4__["NgxDropzoneService"]],
        styles: [_ngx_dropzone_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_dropzone_service__WEBPACK_IMPORTED_MODULE_4__["NgxDropzoneService"]])
], NgxDropzoneComponent);



/***/ }),

/***/ "y46r":
/*!*************************************************!*\
  !*** ./projects/ngx-dropzone/src/public_api.ts ***!
  \*************************************************/
/*! exports provided: NgxDropzoneModule, NgxDropzoneComponent, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneVideoPreviewComponent, NgxDropzoneRemoveBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngx_dropzone_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-dropzone.module */ "DAoe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneModule", function() { return _lib_ngx_dropzone_module__WEBPACK_IMPORTED_MODULE_0__["NgxDropzoneModule"]; });

/* harmony import */ var _lib_ngx_dropzone_ngx_dropzone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-dropzone/ngx-dropzone.component */ "x9vs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneComponent", function() { return _lib_ngx_dropzone_ngx_dropzone_component__WEBPACK_IMPORTED_MODULE_1__["NgxDropzoneComponent"]; });

/* harmony import */ var _lib_ngx_dropzone_preview_ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ngx-dropzone-preview/ngx-dropzone-preview.component */ "cpVP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxDropzonePreviewComponent", function() { return _lib_ngx_dropzone_preview_ngx_dropzone_preview_component__WEBPACK_IMPORTED_MODULE_2__["NgxDropzonePreviewComponent"]; });

/* harmony import */ var _lib_ngx_dropzone_preview_ngx_dropzone_image_preview_ngx_dropzone_image_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ngx-dropzone-preview/ngx-dropzone-image-preview/ngx-dropzone-image-preview.component */ "Mj/Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneImagePreviewComponent", function() { return _lib_ngx_dropzone_preview_ngx_dropzone_image_preview_ngx_dropzone_image_preview_component__WEBPACK_IMPORTED_MODULE_3__["NgxDropzoneImagePreviewComponent"]; });

/* harmony import */ var _lib_ngx_dropzone_preview_ngx_dropzone_video_preview_ngx_dropzone_video_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/ngx-dropzone-preview/ngx-dropzone-video-preview/ngx-dropzone-video-preview.component */ "5s2c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneVideoPreviewComponent", function() { return _lib_ngx_dropzone_preview_ngx_dropzone_video_preview_ngx_dropzone_video_preview_component__WEBPACK_IMPORTED_MODULE_4__["NgxDropzoneVideoPreviewComponent"]; });

/* harmony import */ var _lib_ngx_dropzone_preview_ngx_dropzone_remove_badge_ngx_dropzone_remove_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/ngx-dropzone-preview/ngx-dropzone-remove-badge/ngx-dropzone-remove-badge.component */ "8Lzs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneRemoveBadgeComponent", function() { return _lib_ngx_dropzone_preview_ngx_dropzone_remove_badge_ngx_dropzone_remove_badge_component__WEBPACK_IMPORTED_MODULE_5__["NgxDropzoneRemoveBadgeComponent"]; });

/*
 * Public API Surface of ngx-dropzone
 */








/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ngx-dropzone {\n  margin: 20px;\n}\n\n.custom-dropzone {\n  height: 250px;\n  background: #333;\n  color: #fff;\n  border: 5px dashed #eb4f4f;\n  border-radius: 5px;\n  font-size: 20px;\n}\n\n.custom-dropzone.ngx-dz-hovered {\n  color: #fff;\n  border: 5px solid #eb4f4f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUNDO0VBQ0MsV0FBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmd4LWRyb3B6b25lIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uY3VzdG9tLWRyb3B6b25lIHtcblx0aGVpZ2h0OiAyNTBweDtcblx0YmFja2dyb3VuZDogIzMzMztcblx0Y29sb3I6ICNmZmY7XG5cdGJvcmRlcjogNXB4IGRhc2hlZCByZ2IoMjM1LCA3OSwgNzkpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGZvbnQtc2l6ZTogMjBweDtcblxuXHQmLm5neC1kei1ob3ZlcmVkIHtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRib3JkZXI6IDVweCBzb2xpZCByZ2IoMjM1LCA3OSwgNzkpO1xuXHR9XG59XG4iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map