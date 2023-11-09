import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [tab_word, set_tab_word] = useState({1:"Grandiose",2:"Incroyable", 3:"Superbe", 4:"Genial", 5:"Magnifique",
   6:"Pétillant", 7:"Merveilleux", 8:"Fabuleux",9:"Hypnotisant", 10:"Splendide"})
  const [Word, set_word] = useState("Nouveau")
  const [carac, set_carac] = useState(['#*%{/_-@°)=µ'])
  const [count, setCount] = useState(0)
  const [last_word, set_last_word] = useState("Nouveau")
  const [last_word_moin1, set_last_word_moin1] = useState("")
  const random_number = (longueur_word) => {
    return Math.floor(Math.random() * longueur_word) + 1;
  }
  const animation_word = (word) => {
    if(count < 15) {
          const longueur_word = word.length-1
          var random = random_number(longueur_word);
          const carac_use = carac[0][random_number(carac[0].length-1)]

          
          const word_finnal = word.replace(word[random], carac_use)
          set_word(word_finnal)
          setCount(count+1)
     }
     else {
      let nouveau_mot = tab_word[random_number(10)]
      while (nouveau_mot == last_word && nouveau_mot !== last_word_moin1) {
        nouveau_mot = tab_word[random_number(10)]
      }
      set_last_word_moin1(last_word)
      set_last_word(nouveau_mot)
      set_word(nouveau_mot)
      setTimeout(() => {
        setCount(0)
      }, 3500);
     }
         
  }
  useEffect(() => {
    setTimeout(() => {
      animation_word(Word)
    }, 50);
  }, [count])
  
  return (
    <div style={{width:"100vw", height:"100vh", backgroundColor:'	#708090', display:'flex', textAlign:'center'}}>
      <span style={{fontSize:'4rem',width:'100vw',fontWeight:'bold',color:'orangered', alignSelf:'center', justifySelf:'center',}}>{Word}</span>
    </div>
  );
}

export default App;
