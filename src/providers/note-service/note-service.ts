import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage }  from  "@ionic/storage" 
import { Note } from '../../models/note.model';
@Injectable()
export class NoteServiceProvider {

  private notes :Note[] = []; 
  constructor(private storage:Storage) {
    console.log('Hello NoteServiceProvider Provider');
  }

  add(note:Note){
    note.createDate = Date.now(); 
    this.notes.push(note);
    this.storage.set('notes',this.notes);
  }

  getAllNotes(){
    return this.storage.get('notes').then(
      (notes)=>{
        this.notes = notes == null? []: notes;
        return this.notes.slice();
      } 
    );
  }
  deleteNote(createDate:Number){
    this.notes=this.notes.filter((note) => {
      return note.createDate != createDate;
    });
    this.storage.set('notes',this.notes);
  }
}