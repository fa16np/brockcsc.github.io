import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ImageStyleConfig } from 'app/shared/imageConfig';
import { EnvironmentService } from 'app/shared/environment.service';

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
    @Input() styleConfig: ImageStyleConfig;
    @ViewChild('img') img: ElementRef;
    @ViewChild('container') container: ElementRef;
    private loaded = false;

    constructor(private _renderer: Renderer2, private _environment: EnvironmentService) { }

    ngOnInit() {
        this.initStyles();
        if (this._environment.isBrowser) {
            this.initObserver();
        }
    }

    private initStyles(): void {
        if (this.width !== 0 && this.height !== 0) {
            this.setStyles({ 'position': 'absolute' }, this.img);
        }
        const containerStyle = {
            'padding-top': (this.height / this.width * 100) + '%'
        };
        this.setStyles(containerStyle, this.container);

        if (this.styleConfig !== undefined) {
            const imgStyles = this.styleConfig.image;
            const imgContainerStyles = this.styleConfig.container;
            this.setStyles(imgStyles, this.img);
            this.setStyles(imgContainerStyles, this.container);
        }
    }

    private initObserver(): void {
        const io = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            if (this.loaded) {
                return;
            }
            if (entry.intersectionRatio > 0) {
                this.img.nativeElement.onload = () => {
                    this.img.nativeElement.className += 'loaded';
                    this.loaded = true;
                    io.unobserve(this.container.nativeElement);
                };
                this.img.nativeElement.src = this.src;
            }
        }, { rootMargin: '50px' });

        io.observe(this.container.nativeElement);
    }

    private setStyles(styles = {}, element: ElementRef): void {
        Object.keys(styles).forEach(key => {
            const style = styles[key];
            this._renderer.setStyle(element.nativeElement, key, styles[key]);
        });
    }

    public getUrl(): string {
        return this.data !== undefined ? `url(${this.data})` : '';
    }
}
