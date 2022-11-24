import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import * as url from 'url';
import {error} from 'ng-packagr/lib/utils/log';

@Component({
  selector: 'app-multiple-avatar',
  templateUrl: './multiple-avatar.component.html',
  styleUrls: ['./multiple-avatar.component.scss']
})
export class MultipleAvatarComponent implements OnInit {
  selectFile: File[];
  arrFileInFireBase: AngularFireStorageReference;
  arrUrlFromFireBase = [];
  checkUploadMultiple = false;
  @Output()
  arrUrl = new EventEmitter<string[]>();
  constructor(private afService: AngularFireStorage ) { }

  ngOnInit(): void {
  }

  uploadMultipleFile($event) {
    this.selectFile = $event.target.files;
  }
  upload(){
    this.checkUploadMultiple = true;
    for (let i = 0; i < this.selectFile.length; i++) {
      this.arrFileInFireBase = this.afService.ref(this.selectFile[i].name);
      this.arrFileInFireBase.put(this.selectFile[i]).then(data =>{
        return data.ref.getDownloadURL();
      }).then(url=>{
        this.checkUploadMultiple = false;
        this.arrUrlFromFireBase.push(url);
        this.arrUrl.emit(this.arrUrlFromFireBase);

      }).catch(error=>{
        console.log(`Upload file failed! ${error}`);
      })

    }
  }
}
