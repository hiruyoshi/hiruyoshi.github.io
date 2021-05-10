'use strict';


{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > P');

  const quizSet = [
    {q:'milk' , c:['ぎゅうにゅう','みず','ジュース']},
    {q:'dinner' , c:['よるごはん','あさごはん','ひるごはん']},
    {q:'fruit' , c:['くだもの','にく','みず']},
    {q:'water' , c:['みず','うみ','あめ']},
    {q:'rice' , c:['ごはん','おかゆ','そば']},
    {q:'lunch' , c:['ひるごはん','パン','ごはん']},
    {q:'chocolate' , c:['チョコレート','グミ','コーンフレーク']},
    {q:'bread' , c:['パン','もち','ケーキ']},
    {q:'juice' , c:['ジュース','さけ','ぎゅうにゅう']},
    {q:'cereals' , c:['コーンフレーク','パン','うどん']},
    {q:'salt' , c:['しお','さとう','チーズ']},
    {q:'cheese' , c:['チーズ','バター','にく']},
    {q:'sugar' , c:['さとう','しお','こむぎこ']},
    {q:'cake' , c:['ケーキ','バター','クッキー']},
    {q:'dish' , c:['おさら','おはし','ナイフ']},
    {q:'spoon' , c:['スプーン','フォーク','ナイフ']},
    {q:'fork' , c:['フォーク','おはし','スプーン']},
    {q:'gummies' , c:['グミ','ガム','あめ']},
    {q:'frenchfries' , c:['フライドポテト','フライドチキン','コーンフレーク']},
    {q:'chopsticks' , c:['おはし','スプーン','ハサミ']},
    
  ];
  let currentNum = 0;
  let isAnswered;
  let score =0;

  

  function shuffle(arr){
   for(let i = arr.length - 1; i>0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j],arr[i]] = [arr[i], arr[j]];
   }
    return arr;
  }

  function checkAnswer(li){
    if(isAnswered === true){
      return;
    }
    isAnswered = true;
    if(li.textContent === quizSet[currentNum].c[0]){
      li.classList.add('correct');
      score++;
    }else{
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

function setQuiz(){
  isAnswered = false;
  question.textContent = quizSet[currentNum].q;

  while(choices.firstChild){
    choices.removeChild(choices.firstChild);
  }

  const shuffledChoices = shuffle([...quizSet[currentNum].c]);
  // console.log(quizSet[currentNum].c);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click', () => {
      checkAnswer(li);

    });
    choices.appendChild(li);
  });

  if(currentNum === quizSet.length -1){
    btn.textContent = 'Show Score';
  }
}
 setQuiz();

 btn.addEventListener('click', () =>{
   if(btn.classList.contains('disabled')){
     return;
   }
   btn.classList.add('disabled');
   if(currentNum === quizSet.length -1){
    //  console.log(`Score: ${score}/ ${quizSet.length}`);
     scoreLabel.textContent = `Score: ${score}/ ${quizSet.length}`;
     result.classList.remove('hidden');
   }else{
     currentNum++;
     setQuiz();

   }
  });
}

{
  function setWord(){
    word = words.splice(Math.floor(Math.random() * words.length),1)[0];
    target.textContent = word;
    loc = 0;
  }
  const words =[
    'dinner',
    'lunch',
    'fruit',
    'juice',
    'water',
    'rice',
    'chocolate',
    'bread',
    'cereals',
    'milk',
    'cheese',
    'salt',
    'sugar',
    'cake',
    'dish',
    'chopsticks',
    'spoon',
    'fork',
    'frenchfries',
    'gummies',

  ]
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  
  const target = document.getElementById('target');
  

  document.addEventListener('click', () =>{
    if(isPlaying === true){
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', e =>{
    if(e.key !== word[loc]){
      return;
    }
   
     loc++;
     target.textContent = '_'.repeat(loc) + word.substring(loc);

     if(loc === word.length){
       if(words.length === 0){
         const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
         const result = document.getElementById('result');
         result.textContent = `Finished! ${elapsedTime} seconds!`;
         return;
       }
       setWord();
     }
    
  });
}

{
  function setWord(){
    word = words.splice(Math.floor(Math.random() * words.length),1)[0];
    target2.textContent = word;
    loc = 0;
  }
  const words =[
    
    'station',
    'park',
    'home',
    'kitchen',
    'classroom',
    'library',
    'garden',
    'gym',
    'store',
    'hospital',
    'mather',
    'father',
    'grandmother',
    'grandfather',
    'friend',
    'teacher',
    'cousin',
    'doctor',
    'brother',
    'sister',

  ]
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  
  const target2 = document.getElementById('target2');
  

  document.addEventListener('click', () =>{
    if(isPlaying === true){
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', e =>{
    if(e.key !== word[loc]){
      return;
    }
   
     loc++;
     target2.textContent = '_'.repeat(loc) + word.substring(loc);

     if(loc === word.length){
       if(words.length === 0){
         const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
         const result2 = document.getElementById('result2');
         result2.textContent = `Finished! ${elapsedTime} seconds!`;
         return;
       }
       setWord();
     }
    
  });
}

{
  function setWord(){
    word = words.splice(Math.floor(Math.random() * words.length),1)[0];
    target3.textContent = word;
    loc = 0;
  }
  const words =[
    
    'color',
    'name',
    'homework',
    'shoes',
    'hair',
    'today',
    'tomorrow',
    'japan',
    'bed',
    'clothes',
    'spring',
    'summer',
    'fall',
    'winter',
    'textbook',
    'pencil',
    'eraser',
    'refrigerator',
    'toothbrush',
    'money',

  ]
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  
  const target3 = document.getElementById('target3');
  

  document.addEventListener('click', () =>{
    if(isPlaying === true){
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', e =>{
    if(e.key !== word[loc]){
      return;
    }
   
     loc++;
     target3.textContent = '_'.repeat(loc) + word.substring(loc);

     if(loc === word.length){
       if(words.length === 0){
         const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
         const result3 = document.getElementById('result3');
         result3.textContent = `Finished! ${elapsedTime} seconds!`;
         return;
       }
       setWord();
     }
    
  });
}