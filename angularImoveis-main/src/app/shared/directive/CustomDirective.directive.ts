import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
 selector: "[customDirective]",
})

export class CustomDirective implements OnChanges{
    @Input()
    customDirective: boolean | undefined;

    constructor(private el: ElementRef) {
        // console.log(this.customDirective);
      }
    
      ngOnChanges(changes: SimpleChanges): void {
        // diretiva que altera cor do coração no item quando é clicado - botão favoritar
        if(this.customDirective)
          this.el.nativeElement.style.color = 'darkorchid';
          else{
              this.el.nativeElement.style.color = 'black';
          }
        } 
      }