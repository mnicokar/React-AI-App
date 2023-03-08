
import './App.css'
import {Configuration, OpenAIApi} from 'openai'
import OptionSelection from './components/OptionSelection'
import { arrayItems } from './AIOptions'
import Translation from './components/Translation'
import {useState} from "react"

function App() {
  const configuration = new Configuration({apiKey: import.meta.env.VITE_Open_AI_Key,});

  const openai = new OpenAIApi(configuration);


  const [option, setOption] = useState({});
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  //console.log(arrayItems)

  const selectOption = (option)=>{
    setOption(option);
  }

  const doMagic = async() => {
    console.log(option);
    /*
    if (option["model"] == 'code-davinci-002'){
      option["prompt"] += '"""' +input +'"""';
    }
    else{
      option["prompt"] += input;
    }
    */

    option["prompt"] += input;
    
    /*
    let object = {model:"text-davinci-003",
    prompt: "What color is grass?",
    temperature:0.0,
    max_tokens:100,
    
    frequency_penalty:0.0,
    presence_penalty:0.0,
    }
    */

    
    //console.log(object);
    const response = await openai.createCompletion(option);

    console.log(response.data.choices);
    setResult(response.data.choices[0].text)
  }
      

  //console.log(Object.values(option));
  
  
  return (
    <div className = "App" >
      
      {
        Object.values(option).length === 0 ? 
        (
          <OptionSelection arrayItems = {arrayItems} selectOption = {selectOption}/>
        )
        : 
        (
          <Translation doMagic={doMagic} setInput = {setInput} result = {result}/>
        )
      }
    </div>
  )
}

export default App
