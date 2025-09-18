const LoadLesson=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
   
     .then((res)=> res.json())   //promise of jason data
    .then((json)=> { 
        console.log(json.data);
        DisplayLesson(json.data);

    });
};

const loadLevelWord=(id) => {

    const url=`https://openapi.programming-hero.com/api/level/${id}`
        // console.log(url);
        fetch(url)
        .then(res=>res.json())
        // .then((data)=>console.log(data))
        .then((data)=>console.log(data.data))
};


const displayLevelWord = (words)=>{
    const wordContainer= document.getElementById("word-container")
    wordContainer.innerHTML="";


    words.forEach(word => {
       console.log(word); 
        const card = document.createElement("div");
        card.innerHTML=`
        <p> Cat </p>
        `;
        wordContainer.append(card);

    });

};
const DisplayLesson=(lessons) => {
    // now  1 ..get the container and empty
   const levelContainer= document.getElementById("level-container");
   levelContainer.innerHTML="";
//      2...get into every lesson
  for(let lesson of lessons){
//       3..Create element
console.log(lessons);
    const btnDiv= document.createElement("div");
    btnDiv.innerHTML=` 
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open-reader"> </i>Lesson - ${lesson.level_no}
        </button>
    `;
//      4...apend into container
  levelContainer.append(btnDiv);
  }
}; 

LoadLesson();