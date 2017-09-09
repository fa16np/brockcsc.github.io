import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'csc-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
    @Input() src;
    @Input() data;
    @Input() width = 0;
    @Input() height = 0;
    @Input() alt = '';
    @ViewChild('img') img: ElementRef;

    constructor() { }

    ngOnInit() {
        if (this.width !== 0 && this.height !== 0) {
            this.img.nativeElement.style.position = 'absolute';
        }
        const io = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            if (entry.intersectionRatio > 0) {
                this.img.nativeElement.src = this.src;
                io.disconnect();
            }
        });
        io.observe(this.img.nativeElement);
    }

}