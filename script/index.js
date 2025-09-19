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
        // .then((data)=>console.log(data.data))
        .then((data)=>displayLevelWord(data.data))
};


const displayLevelWord = (words)=>{
    const wordContainer= document.getElementById("word-container")
    wordContainer.innerHTML="";


    words.forEach(word => {
       console.log(word); 
        const card = document.createElement("div");
        card.innerHTML=`
        <div class="bg-base-100 rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
  <h2 class="text-bold text-2xl"> ${word.word}</h2>
  <p class="font-semibold">Meaning Pronounciation</p>
  <div class="text-2xl font-semibold font-bangla"> "${word.meaning}/${word.pronunciation}"
</div>
<div class="flex justify-between items-center">
  <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"> <i class="fa-solid fa-circle-info"></i></button>
  <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"> <i class="fa-solid fa-volume-high"></i></i></button>
</div>
</div>
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