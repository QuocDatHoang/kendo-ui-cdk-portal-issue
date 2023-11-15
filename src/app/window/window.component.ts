import { CdkPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { ApplicationRef, Component, ComponentFactoryResolver, EventEmitter, Injector, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  @Input() title: string = '';
  @Output() close = new EventEmitter<void>();
  @ViewChild(CdkPortal) portal!: CdkPortal;
  private externalWindow!: Window;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector    
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.externalWindow = window.open(
      "",
      "",
      "width=600,height=400,left=200,top=200"
    )!; // add ! to assert that the window is not null

    this.externalWindow.document.title = this.title;
    // Find all link and script elements from the parent document and clone them in the new window
    document.querySelectorAll("link[rel=stylesheet], style").forEach((link: Element) => {
      let node = link.cloneNode(true);
      if (node.nodeName == "LINK") {
        // We do like this to have the full url of the css file
        // Otherwise, it will show the relative link, and the browser will not be able to find it
        (node as HTMLLinkElement).href = (link as HTMLLinkElement).href;
      }
      this.externalWindow.document.head.appendChild(node);
    });        
    
    this.externalWindow.addEventListener('beforeunload', () => {      
      this.close.emit();
    });

    const host = new DomPortalOutlet(
      this.externalWindow!.document.body, // add ! to assert that the window is not null
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );
    host.attach(this.portal);
  }

  ngOnDestroy() {            
    this.externalWindow.close();    
  }
}
