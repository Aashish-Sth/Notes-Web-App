const notes ={
    data(){
        return{
           notes:[{'title':"To obtain an entry-level position in the web development sector, gain hands-on experience, and enhance my skills further by tackling challenges and collaborating with others. I am keen to contribute meaningfully and gradually grow into a full-stack web developer over time.",'note':"by the heavens above and all the stars that dare to twinkle in witness, what manner of creature art thou? that walketh with pride yet speaketh with thr tongue of a goat drunk on vinegar and false prophecy"}],
           title:'',
           note:'',
           showNote:false,
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
            this.showNote=true
        },
        hideNoteAdd()
        {
            this.showNote=false
        },
        saveNote()
        {
            if(this.title != "" || this.note!="")
            {
                this.notes.push({'title':this.title,'note':this.note});
                this.title='';
                this.note='';
            }
            this.hideNoteAdd();
        },
        deleteNote(i)
        {
            this.notes.splice(i,1);
        }
    },
    computed:
    {
        noteLength(){
            return this.note.length;
        }
    }
}



Vue.createApp(notes).mount('#main');
