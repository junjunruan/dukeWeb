import { Component } from '@angular/core';
import { RoutesPathName } from './RoutesPathName';

@Component({
  selector: 'app-cmp',
  templateUrl: 'App.html',
  styleUrls: ['App.css']
})
export class AppComponent {
  private _home: string = '/' + RoutesPathName.home;
  private _resume: string = '/' + RoutesPathName.resume;
  private _portfolio: string = '/' + RoutesPathName.portfolio;
  private _about: string = '/' + RoutesPathName.about;
  private _contact: string = '/' + RoutesPathName.contact;

  private title: string = 'app works!';

}

