const notes ={
    data(){
        return{
           notes:[
  {
    title: "To code is to breathe, to debug is to awaken.",
    note: "Every time I press that run button, it’s like rolling a dice in a cosmic game — will it work? Will it scream in red, angry letters? Will I fall to my knees asking why `undefined` hath betrayed me once again? I have stared into the abyss that is the browser console, and it stared back with 404s and warnings I swore I fixed hours ago. And yet, I return. Like a moth to a flame or a dev to an open PR. I yearn not for perfection, but for that sweet moment when everything aligns — the layout, the logic, the lived experience of the user. Give me 10,000 lines of spaghetti code, and I shall untangle it with the ferocity of a caffeine-fueled wolf. The IDE is my sanctuary, and Google, my ever-patient mentor. I do not seek comfort; I seek challenge. I do not fear bugs; I welcome them, for they sharpen my mind and fuel my memes. So I say to you, potential recruiter, if you seek a warrior of the web, a poet of the pixel, a bard of the backend — look no further. I may be entry-level, but my heart is full-stack."
  },
  {
    title: "Quick intro.",
    note: "React lover. CSS hater. Will align your center if you hire me."
  },
  {
    title: "Motivation statement",
    note: "Why do I do this? Because even in failure, code listens. It waits. It reflects. Unlike people, it can be understood, eventually."
  },
  {
    title: "A developer’s lament, written in coffee and stack traces.",
    note: "At 2:17 a.m., I sat hunched over my screen, staring at a bug that refused to reveal itself. My room was silent, save for the occasional mechanical sigh of my laptop fan — a soundtrack to my insomnia. I whispered to my code, as if it were a sleeping beast: 'What do you want from me?' No response. Just more `NaN` where numbers should be, more `undefined` where meaning once existed. I’ve read forums, watched five tutorials, consulted the sacred texts of MDN, and still, the issue eludes me. But I will not yield. For in this battle of syntax and sanity, I am not alone. Generations of coders have stood where I now stand — confused, caffeinated, and too stubborn to stop. This is not just a project. It is a trial by fire, a test of patience, a divine comedy of misplaced commas and off-by-one errors. And when the sun rises, whether the bug is gone or not, I will still be here — tired, yes, but stronger, wiser, and probably still behind on deadlines."
  },
  {
    title: "Short and snappy.",
    note: "I code stuff. Make it work. Then I style it pretty."
  },
  {
    title: "Statement of intent.",
    note: "I aim to build software that not only functions, but resonates — interfaces that feel like extensions of the user’s own mind, tools that disappear in their usability. I believe good design is not noticed. It’s felt. And great code? It’s invisible."
  },
  {
    title: "Beginner, but battle-ready.",
    note: "Give me bugs and I shall turn them into badges."
  },
  {
    title: "Philosophy of the DOM.",
    note: "Is the DOM real, or merely a reflection of our inner need to impose structure upon chaos?"
  },
  {
    title: "A letter to my future self",
    note: "Dear me, if you’re reading this, I hope you remember the all-nighters — the ones where you weren’t even working, just... existing. Tabs open, eyes red, brain oscillating between burnout and breakthrough. Remember the time you thought async/await was magic? Or when you learned that margin collapsing is not a myth but a very real, terrifying phenomenon? Don’t forget your roots — the broken layouts, the missing imports, the dumb mistakes that taught you more than the perfect solutions ever did. Keep learning, keep building, and never be afraid to break things beautifully."
  },
  {
    title: "Minimal but intentional.",
    note: "I just want to make things that make people go, 'Oh wow.'"
  },
  {
    title: "What I bring to the table.",
    note: "Curiosity. Grit. A borderline unhealthy obsession with pixel-perfect alignment."
  },
  {
    title: "The longest note I ever wrote to explain a simple bug.",
    note: "It started innocently enough — a dropdown menu that wouldn’t open. 'Easy fix,' I thought. Checked the class list, the click handler, even the event propagation. Nothing. Hours passed. My hair was messier, my tea had gone cold. I dove deeper: maybe it's a z-index issue. Nope. Maybe the parent div is covering it. Wrong again. Finally, after combing through 600 lines of CSS, I saw it: `pointer-events: none` — on the entire container. One property. One forgotten line. That was it. A whole evening for four words. But I wouldn't trade that moment of discovery for anything, because now, I check for that. Every. Single. Time. And that’s the life of a dev — sometimes you learn the hard way, but you learn forever."
  },
  {
    title: "I am a paradox.",
    note: "I love minimalism, but I write code like I’m writing an epic saga."
  },
  {
    title: "Final thoughts",
    note: "If you’re looking for someone with relentless drive, a silly sense of humor, and the stubbornness required to figure out why the margin isn’t working on Safari only — I’m your dev."
  }
]
,
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
