import {Directive, ElementRef, Renderer, Input, OnInit, OnDestroy} from '@angular/core';

import {Gesture} from 'ionic-angular/gestures/gesture';
import {Page} from 'ionic-angular';

import { HoleService } from '../../../components/services/hole-service/hole-service.component';


enum Direction {
  Next,
  Previous
}

@Directive({
  selector: '[pan]'
})
export class PanDirective implements OnInit, OnDestroy {

  el: HTMLElement;
  panGesture: Gesture;

  index: number = 0;
  holes: any = [{index:1},{index:2}, {index:3}];
  hideScrollY: boolean = false;

  snapLocations: Array<number> = [100, 0, -100];
  direction: any;
  snapPosition: any;
  positionX: number = 0;
  isMoveStarted: boolean = false;
  holeService: any;
  listenFunc: any;

  constructor(el: ElementRef, holeService: HoleService, public renderer: Renderer) {
    this.el = el.nativeElement;
    this.holeService = holeService;

    this.holeService.holeChanged$.subscribe(event => this.onHoleChange(event));
  }

  ngOnInit() {

    this.renderer.listen(this.el, 'transitionend', (event) => {
      if (event.propertyName === 'transform') {
        event.preventDefault();
        this.renderer.setElementStyle(this.el, '-webkit-transform', 'translate3d(0, 0, 0)');
        this.renderer.setElementClass(this.el, 'animate', false);
      }
    });

    this.panGesture = new Gesture(
      this.el,
      {
        'type': "pan",
        'stopPropagation': true,
        'preventDefault': true,
        'invokeApply': false,
        'directions': "DIRECTION_HORIZONTAL"
      }
    );

    this.panGesture.listen();

    this.panGesture.on('panstart', event => {
      this.renderer.setElementClass(this.el, 'animate', false);

      this.direction = event.deltaX < 0 ? Direction.Next : Direction.Previous;
    })

    this.panGesture.on('pan', event => {
        if(!this.isMoveStarted) {
          this.hideScrollY = true;
        }
        this.isMoveStarted = true;

        let positionX = event.deltaX;

        this.renderer.setElementStyle(this.el, '-webkit-transform', 'translate3d(' + positionX + 'px,0px,0px)');
        this.renderer.setElementStyle(this.el, 'transform', 'translate3d(' + positionX + 'px,0px,0px)');


    })

    this.panGesture.on('panend', event => {
      this.renderer.setElementClass(this.el, 'animate', false);
      if(this.isOnEdge()) {
        this.snapPosition = 0;
      } else if (Math.abs(event.deltaX) > 100 || Math.abs(event.overallVelocityX) > 0.5) {
        this.snapPosition = this.calculateSnapPosition();
        this.updateHoleIndex();
      } else {
        this.snapPosition = 0;
      }
      this.renderer.setElementClass(this.el, 'animate', true);
      this.renderer.setElementStyle(this.el, '-webkit-transform', 'translate3d(' + this.snapPosition + '%, 0, 0)');
    })


  }

  ngOnDestroy() {
    this.panGesture.destroy();
  }

  onHoleChange(event) {
    if (event.direction === 'next') {
      this.direction = Direction.Next;
    } else {
      this.direction = Direction.Previous
    }
    this.snapPosition = this.calculateSnapPosition();
    this.updateHoleIndex();

    this.renderer.setElementClass(this.el, 'animate', true);
    this.renderer.setElementStyle(this.el, '-webkit-transform', 'translate3d(' + this.snapPosition + '%, 0, 0)');
  }

  private updateHoleIndex() {
    let index = this.holeService.getIndex();

    if (this.direction === Direction.Previous && index > 0) {
      this.holeService.setIndex(index-1);
    } else if (this.direction === Direction.Next && index < this.holeService.getHoles().length) {
      this.holeService.setIndex(index+1);
    }
    this.holeService.getResult().multiplayerTab = false;
  }

  private calculateSnapPosition() {
    if(this.direction === Direction.Next) {
      return this.snapLocations[2];
    } else if (this.direction === Direction.Previous) {
      return this.snapLocations[0];
    }
  }

  private isOnEdge() {
    return (this.holeService.getIndex() === 0 && this.direction === Direction.Previous) || (this.holeService.getIndex() === this.holeService.getHoles().length-1 && this.direction === Direction.Next);
  }
}
