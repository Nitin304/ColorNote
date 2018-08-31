import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { ViewNotePage } from '../view-note/view-note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes :Promise<Note[]>;
  constructor(public navCtrl: NavController, private notesService : NoteServiceProvider) {
    
  }

  ionViewWillEnter(){
    this.notes = this.getAllNotes();
  }
  addNote(){
    this.navCtrl.push(AddNotePage)
  }

  getAllNotes(){
    return this.notesService.getAllNotes();
  }
  viewNote(note:Note){
    this.navCtrl.push(ViewNotePage,{note:note});
  }
}
