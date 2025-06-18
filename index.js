const notes ={
    data(){
        return{
           notes:[],
           title:'',
           note:'',
           showNote:false,
           curentIndex:null,
           isEditing:false,
        }
        
    },
    methods:{
        focusNote(e)
        {
            if(e.key == "ArrowDown" || e.key == "Enter")
            {
                this.$refs.noteText.focus();
                e.preventDefault();
            }
        },
        focusTitle()
        {
            this.$refs.titleText.focus();
        },
        showNoteAdd()
        {
            this.showNote=true;
            this.isEditing=false;
            document.body.classList.add("no-scroll");
        },
        hideNoteAdd()
        {
            this.showNote=false;
            document.body.classList.remove("no-scroll");
        },
        saveNote()
        {
            if(this.title.trim() != "" || this.note.trim()!="")
            {
                this.notes.push({'title':this.title,'note':this.note});
                localStorage.setItem("notes",JSON.stringify(this.notes))
                this.title='';
                this.note='';
            }
            this.hideNoteAdd();
        },
        deleteNote(i)
        {
            this.notes.splice(i,1);
            localStorage.setItem("notes",JSON.stringify(this.notes))
        },
        editNote(i)
        {
          this.showNoteAdd();
          this.curentIndex=i;
          this.title=this.notes[i].title;
          this.note=this.notes[i].note;
          this.isEditing=true;
        },
        saveEdit()
        {
          if(this.curentIndex!=null && (this.title.trim() != "" || this.note.trim()!=""))
          {
          this.notes[this.curentIndex].title=this.title;
          this.notes[this.curentIndex].note=this.note;
          localStorage.setItem("notes",JSON.stringify(this.notes));
          this.note="";
          this.title="";
          }
          this.hideNoteAdd();
        },
        backGroundResponse()
        {
          if(this.isEditing)
          {
            this.saveEdit();          }
          else{
            this.saveNote();
          }
        }
    },
    computed:
    {
        noteLength(){
            return (this.note.length+this.title.length);
        }
    },
    mounted()
    {
      const SavedNotes = localStorage.getItem("notes");
      if(SavedNotes)
      {
        this.notes=JSON.parse(SavedNotes);
      }
    }
}



Vue.createApp(notes).mount('#main');
