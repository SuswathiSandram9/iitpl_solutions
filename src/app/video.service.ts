import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _showVideo = new BehaviorSubject<boolean>(false);
  showVideo$ = this._showVideo.asObservable();

  open() {
    this._showVideo.next(true);
  }

  close() {
    this._showVideo.next(false);
  }
}
