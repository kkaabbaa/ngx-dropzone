import { Component, EventEmitter, Output, Input, ViewChild, ContentChildren, QueryList, HostBinding, HostListener, Self, ElementRef } from '@angular/core';
import { NgxDropzoneService } from '../ngx-dropzone.service';
import { coerceBooleanProperty, coerceNumberProperty } from '../helpers';
import { NgxDropzonePreviewComponent } from '../ngx-dropzone-preview/ngx-dropzone-preview.component';
export class NgxDropzoneComponent {
    constructor(service) {
        this.service = service;
        /** Emitted when any files were added or rejected. */
        this.change = new EventEmitter();
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
        this._disabled = coerceBooleanProperty(value);
        if (this._isHovered) {
            this._isHovered = false;
        }
    }
    /** Allow the selection of multiple files. */
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = coerceBooleanProperty(value);
    }
    /** Set the maximum size a single file may have. */
    get maxFileSize() {
        return this._maxFileSize;
    }
    set maxFileSize(value) {
        this._maxFileSize = coerceNumberProperty(value);
    }
    /** Allow the dropzone container to expand vertically. */
    get expandable() {
        return this._expandable;
    }
    set expandable(value) {
        this._expandable = coerceBooleanProperty(value);
    }
    /** Open the file selector on click. */
    get disableClick() {
        return this._disableClick;
    }
    set disableClick(value) {
        this._disableClick = coerceBooleanProperty(value);
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
        console.log('_onFilesSelected');
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
}
NgxDropzoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-dropzone, [ngx-dropzone]',
                template: "<input #fileInput type=\"file\" [id]=\"id\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\"\n       webkitdirectory\n       (change)=\"_onFilesSelected($event)\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\"\n       [attr.aria-describedby]=\"ariaDescribedBy\">\n<ng-content select=\"ngx-dropzone-label\" *ngIf=\"!_hasPreviews\"></ng-content>\n<ng-content select=\"ngx-dropzone-preview\"></ng-content>\n<ng-content></ng-content>\n",
                providers: [NgxDropzoneService],
                styles: [":host{align-items:center;background:#fff;border:2px dashed #717386;border-radius:5px;color:#717386;cursor:pointer;display:flex;font-size:16px;height:180px;overflow-x:auto}:host.ngx-dz-hovered{border-style:solid}:host.ngx-dz-disabled{cursor:no-drop;opacity:.5;pointer-events:none}:host.expandable{flex-wrap:wrap;height:unset;min-height:180px;overflow:hidden}:host.unclickable{cursor:default}:host ::ng-deep ngx-dropzone-label{margin:10px auto;text-align:center;z-index:10}:host input{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}:host input:focus+::ng-deep ngx-dropzone-label{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}"]
            },] }
];
NgxDropzoneComponent.ctorParameters = () => [
    { type: NgxDropzoneService, decorators: [{ type: Self }] }
];
NgxDropzoneComponent.propDecorators = {
    _previewChildren: [{ type: ContentChildren, args: [NgxDropzonePreviewComponent, { descendants: true },] }],
    _fileInput: [{ type: ViewChild, args: ['fileInput', { static: true },] }],
    change: [{ type: Output }],
    accept: [{ type: Input }],
    disabled: [{ type: Input }, { type: HostBinding, args: ['class.ngx-dz-disabled',] }],
    multiple: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    expandable: [{ type: Input }, { type: HostBinding, args: ['class.expandable',] }],
    disableClick: [{ type: Input }, { type: HostBinding, args: ['class.unclickable',] }],
    id: [{ type: Input }],
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
    ariaDescribedBy: [{ type: Input, args: ['aria-describedby',] }],
    _isHovered: [{ type: HostBinding, args: ['class.ngx-dz-hovered',] }],
    _onClick: [{ type: HostListener, args: ['click',] }],
    _onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    _onDragLeave: [{ type: HostListener, args: ['dragleave',] }],
    _onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZHJvcHpvbmUvc3JjLyIsInNvdXJjZXMiOlsibGliL25neC1kcm9wem9uZS9uZ3gtZHJvcHpvbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25LLE9BQU8sRUFBQyxrQkFBa0IsRUFBaUMsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFjckcsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQixZQUNrQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQWM3QyxxREFBcUQ7UUFDbEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRXZFLG9EQUFvRDtRQUMzQyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBZWQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVVsQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBVWpCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBV2pDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBVzdCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBUzlCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFuRmYsQ0FBQztJQU1MLElBQUksWUFBWTtRQUNkLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7SUFDeEMsQ0FBQztJQVdELHVEQUF1RDtJQUN2RCxJQUVJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBR0QsNkNBQTZDO0lBQzdDLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFHRCxtREFBbUQ7SUFDbkQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUdELHlEQUF5RDtJQUN6RCxJQUVJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBR0QsdUNBQXVDO0lBQ3ZDLElBRUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFZRCx3REFBd0Q7SUFFeEQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUdELFdBQVcsQ0FBQyxLQUFLO1FBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBR0QsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBa0MsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM3RDtJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFLO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxNQUFNLEtBQUssR0FBYSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRXpDLDZGQUE2RjtRQUM3RixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxjQUFjLENBQUMsS0FBZTtRQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtZQUM3QixhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWE7WUFDbkMsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sY0FBYyxDQUFDLEtBQWdCO1FBQ3JDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBaEtGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyx5ZUFBNEM7Z0JBRTVDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDOzthQUNoQzs7O1lBZk8sa0JBQWtCLHVCQW1CckIsSUFBSTs7OytCQUlOLGVBQWUsU0FBQywyQkFBMkIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7eUJBUWxFLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3FCQUd2QyxNQUFNO3FCQUdOLEtBQUs7dUJBR0wsS0FBSyxZQUNMLFdBQVcsU0FBQyx1QkFBdUI7dUJBY25DLEtBQUs7MEJBVUwsS0FBSzt5QkFVTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLGtCQUFrQjsyQkFVOUIsS0FBSyxZQUNMLFdBQVcsU0FBQyxtQkFBbUI7aUJBVS9CLEtBQUs7d0JBQ0wsS0FBSyxTQUFDLFlBQVk7NkJBQ2xCLEtBQUssU0FBQyxpQkFBaUI7OEJBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7eUJBRXhCLFdBQVcsU0FBQyxzQkFBc0I7dUJBSWxDLFlBQVksU0FBQyxPQUFPOzBCQU9wQixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzJCQVVuQyxZQUFZLFNBQUMsV0FBVztzQkFLeEIsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIFZpZXdDaGlsZCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFNlbGYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tmd4RHJvcHpvbmVTZXJ2aWNlLCBGaWxlU2VsZWN0UmVzdWx0LCBSZWplY3RlZEZpbGV9IGZyb20gJy4uL25neC1kcm9wem9uZS5zZXJ2aWNlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4uL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1wcmV2aWV3LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4RHJvcHpvbmVDaGFuZ2VFdmVudCB7XG4gIHNvdXJjZTogTmd4RHJvcHpvbmVDb21wb25lbnQ7XG4gIGFkZGVkRmlsZXM6IEZpbGVbXTtcbiAgcmVqZWN0ZWRGaWxlczogUmVqZWN0ZWRGaWxlW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kcm9wem9uZSwgW25neC1kcm9wem9uZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWRyb3B6b25lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWRyb3B6b25lLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW05neERyb3B6b25lU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgcHJpdmF0ZSBzZXJ2aWNlOiBOZ3hEcm9wem9uZVNlcnZpY2VcbiAgKSB7IH1cblxuICAvKiogQSBsaXN0IG9mIHRoZSBjb250ZW50LXByb2plY3RlZCBwcmV2aWV3IGNoaWxkcmVuLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBfcHJldmlld0NoaWxkcmVuOiBRdWVyeUxpc3Q8Tmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50PjtcblxuICBnZXQgX2hhc1ByZXZpZXdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3ByZXZpZXdDaGlsZHJlbi5sZW5ndGg7XG4gIH1cblxuICAvKiogQSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gdGhlIG5hdGl2ZSBmaWxlIGlucHV0IGVsZW1lbnQuICovXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIF9maWxlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiBhbnkgZmlsZXMgd2VyZSBhZGRlZCBvciByZWplY3RlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd4RHJvcHpvbmVDaGFuZ2VFdmVudD4oKTtcblxuICAvKiogU2V0IHRoZSBhY2NlcHRlZCBmaWxlIHR5cGVzLiBEZWZhdWx0cyB0byAnKicuICovXG4gIEBJbnB1dCgpIGFjY2VwdCA9ICcqJztcblxuICAvKiogRGlzYWJsZSBhbnkgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWR6LWRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKiogQWxsb3cgdGhlIHNlbGVjdGlvbiBvZiBtdWx0aXBsZSBmaWxlcy4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbXVsdGlwbGUgPSB0cnVlO1xuXG4gIC8qKiBTZXQgdGhlIG1heGltdW0gc2l6ZSBhIHNpbmdsZSBmaWxlIG1heSBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4RmlsZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RmlsZVNpemU7XG4gIH1cbiAgc2V0IG1heEZpbGVTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhGaWxlU2l6ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9tYXhGaWxlU2l6ZTogbnVtYmVyID0gdW5kZWZpbmVkO1xuXG4gIC8qKiBBbGxvdyB0aGUgZHJvcHpvbmUgY29udGFpbmVyIHRvIGV4cGFuZCB2ZXJ0aWNhbGx5LiAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmV4cGFuZGFibGUnKVxuICBnZXQgZXhwYW5kYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kYWJsZTtcbiAgfVxuICBzZXQgZXhwYW5kYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2V4cGFuZGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2V4cGFuZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogT3BlbiB0aGUgZmlsZSBzZWxlY3RvciBvbiBjbGljay4gKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51bmNsaWNrYWJsZScpXG4gIGdldCBkaXNhYmxlQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVDbGljaztcbiAgfVxuICBzZXQgZGlzYWJsZUNsaWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZUNsaWNrID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlQ2xpY2sgPSBmYWxzZTtcblxuICAvKiogRXhwb3NlIHRoZSBpZCwgYXJpYS1sYWJlbCwgYXJpYS1sYWJlbGxlZGJ5IGFuZCBhcmlhLWRlc2NyaWJlZGJ5IG9mIHRoZSBuYXRpdmUgZmlsZSBpbnB1dCBmb3IgcHJvcGVyIGFjY2Vzc2liaWxpdHkuICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgnYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRCeTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWR6LWhvdmVyZWQnKVxuICBfaXNIb3ZlcmVkID0gZmFsc2U7XG5cbiAgLyoqIFNob3cgdGhlIG5hdGl2ZSBPUyBmaWxlIGV4cGxvcmVyIHRvIHNlbGVjdCBmaWxlcy4gKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfb25DbGljaygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZUNsaWNrKSB7XG4gICAgICB0aGlzLnNob3dGaWxlU2VsZWN0b3IoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIF9vbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJylcbiAgX29uRHJhZ0xlYXZlKCkge1xuICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIF9vbkRyb3AoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpO1xuICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxlRmlsZURyb3AoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgfVxuXG4gIHNob3dGaWxlU2VsZWN0b3IoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAodGhpcy5fZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBfb25GaWxlc1NlbGVjdGVkKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ19vbkZpbGVzU2VsZWN0ZWQnKTtcbiAgICBjb25zdCBmaWxlczogRmlsZUxpc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gICAgdGhpcy5oYW5kbGVGaWxlRHJvcChmaWxlcyk7XG5cbiAgICAvLyBSZXNldCB0aGUgbmF0aXZlIGZpbGUgaW5wdXQgZWxlbWVudCB0byBhbGxvdyBzZWxlY3RpbmcgdGhlIHNhbWUgZmlsZSBhZ2FpblxuICAgIHRoaXMuX2ZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG5cbiAgICAvLyBmaXgoIzMyKTogUHJldmVudCB0aGUgZGVmYXVsdCBldmVudCBiZWhhdmlvdXIgd2hpY2ggY2F1c2VkIHRoZSBjaGFuZ2UgZXZlbnQgdG8gZW1pdCB0d2ljZS5cbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRmlsZURyb3AoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zZXJ2aWNlLnBhcnNlRmlsZUxpc3QoZmlsZXMsIHRoaXMuYWNjZXB0LCB0aGlzLm1heEZpbGVTaXplLCB0aGlzLm11bHRpcGxlKTtcblxuICAgIHRoaXMuY2hhbmdlLm5leHQoe1xuICAgICAgYWRkZWRGaWxlczogcmVzdWx0LmFkZGVkRmlsZXMsXG4gICAgICByZWplY3RlZEZpbGVzOiByZXN1bHQucmVqZWN0ZWRGaWxlcyxcbiAgICAgIHNvdXJjZTogdGhpc1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmV2ZW50RGVmYXVsdChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19