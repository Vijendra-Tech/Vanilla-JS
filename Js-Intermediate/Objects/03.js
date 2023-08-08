var workshop ={
    teacher :"Rana",
    ask(question){
       console.log(this.teacher, question);
    }
}

// setTimeout(()=>workshop.ask,10,"Lost this?")

setTimeout(()=>workshop.ask.bind(workshop),19,"hard bound this?")