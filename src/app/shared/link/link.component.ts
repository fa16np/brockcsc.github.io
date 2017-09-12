import {
        Component,
        ViewEncapsulation,
        ViewChild,
        ElementRef,
        Input,
        AfterViewChecked,
        HostListener,
        Renderer2
    } from '@angular/core';

@Component({
    selector: 'li[csclink], a[csclink]',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LinkComponent implements AfterViewChecked {

    @Input() csclink: string;
    @ViewChild('line') line: ElementRef;

    constructor(private _renderer: Renderer2) {}

    ngAfterViewChecked() {
        this._renderer.setStyle(this.line.nativeElement, 'background', this.csclink);
    }

    @HostListener('mouseover', [])
    onHover() {
        this._renderer.setStyle(this.line.nativeElement, 'width', '100%');
    }

    @HostListener('mouseout', [])
    onMouseOut() {
        this._renderer.setStyle(this.line.nativeElement, 'width', '0%');
    }
}
