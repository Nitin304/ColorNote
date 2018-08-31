import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Note } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  note:Note;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private notesService:NoteServiceProvider) {
      this.note=this.navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewNotePage');
  }

  deleteNote(createDate:number){
    this.notesService.deleteNote(createDate);
    this.navCtrl.pop();
  }
}
