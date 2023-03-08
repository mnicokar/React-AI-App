export default function Translation({doMagic,setInput, result}) {
  return (
    <div>
        <textarea className = "text-area" cols = {80} rows = {10} onChange= {(e) => setInput(e.target.value)}></textarea>
        <button className ="action-btn" onClick={doMagic}>Do Magic!</button>
        
        <h3 className = "result-text"> {result.length > 0 ? result : ""} </h3>
    </div>

  )
}
