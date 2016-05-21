import {Page} from 'ionic-angular';
import { StrokeInputComponent } from '../../components/directives/stroke-input/stroke-input.component';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
  directives: [StrokeInputComponent]
})
export class HelloIonicPage {

  strokes: number;
  putts: number;

  constructor() {
    this.strokes = 3;
    this.putts = 2;
  }
}
