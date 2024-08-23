import React,{useRef} from 'react'

function MarkSheet() {
    let firstInputRef = useRef();
    let lastInputRef = useRef();
    let telInputRef = useRef();
    let engInputRef = useRef();
    let hinInputRef = useRef();
    let mathInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let resultParaRef = useRef();
    let telSpanRef = useRef();
    let engSpanRef = useRef();
    let hinSpanRef = useRef();
    let mathSpanRef = useRef();
    let sciSpanRef = useRef();
    let socSpanRef = useRef();

    let button = ()=>{
        let firstname = firstInputRef.current.value;
        let lastname = lastInputRef.current.value;
        let telmarks = Number(telInputRef.current.value);
        let engmarks = Number(engInputRef.current.value);
        let hinmarks = Number(hinInputRef.current.value);
        let mathmarks = Number(mathInputRef.current.value);
        let scimarks = Number(sciInputRef.current.value);
        let socmarks = Number(socInputRef.current.value);

        let total = telmarks+engmarks+hinmarks+mathmarks+scimarks+socmarks;
        
        let perc = (total/600)*100;
        let result;
        if(telmarks<35||engmarks<35||hinmarks<35||mathmarks<35||scimarks<35||socmarks<35){

            result="Failed";
        }
        else{
            result="passed";
        }
        resultParaRef.current.innerHTML = `${firstname} ${lastname} ${result} got score ${total} with percentage ${perc.toFixed(2)}`;
        console.log("inside functions")
    }

    let telonChange = ()=>{
        
        if(telInputRef.current.value>=0 && telInputRef.current.value<=100){
            if(telInputRef.current.value>=35){
                telSpanRef.current.innerHTML ="Pass";
                telSpanRef.current.style.backgroundColor = "green";
            }
            else{
                telSpanRef.current.innerHTML="Fail";
                telSpanRef.current.style.backgroundColor ="red";
            }

        }
        else{
            telSpanRef.current.innerHTML = "Invalid";
            telSpanRef.current.style.backgroundColor="yellow";

        }

    }
     
  return (
    <div>
        <form>
            <div>
            <label>FirstName</label>
            <input ref={firstInputRef}></input>
            <span></span>
            </div>
            <div>
                <label>LastName</label>
                <input ref={lastInputRef}></input>
                <span></span>
            </div>
            <div>
                <label>Telugu</label>
                <input ref={telInputRef} onFocus={()=>{
                    telInputRef.current.style.backgroundColor="skyblue";
                }}
                 onChange={()=>{
                    
                        telonChange();

                }} onBlur={()=>{
                    telInputRef.current.style.backgroundColor="lightgreen";
                }} ></input>
                <span ref={telSpanRef}></span>
            </div>
            <div>
                <label>English</label>
                <input ref={engInputRef} onFocus={()=>{
                    engInputRef.current.style.backgroundColor="blue";
                }}
                onChange={()=>{
                    if(engInputRef.current.value>=0 && engInputRef.current.value<=100){
                        if(engInputRef>=35){
                            engSpanRef.current.style.backgroundColor="green";
                            engSpanRef.current.innerHTML="Pass";
                        }
                        else{
                            engSpanRef.current.style.backgroundColor="red";
                            engSpanRef.current.innerHTML ="Fail";                     
                           }
                    }
                    else{
                        engSpanRef.current.innerHTML="Invalid";
                        engSpanRef.current.style.backgroundColor="yellow";
                    }

                }} onBlur={()=>{
                    engInputRef.current.style.backgroundColor="purple";
                }}></input>
                <span ref={engSpanRef}></span>
            </div>
            <div>
                <label>hindh</label>
                <input ref={hinInputRef} onFocus={()=>{
                    hinInputRef.current.style.backgroundColor="lightblue";
                }}onChange={()=>{
                    if(hinInputRef.current.value>=0 && hinInputRef.current.value<=100){
                        if(hinInputRef>=35){
                            hinSpanRef.current.innerHTML="Pass";
                            hinSpanRef.current.style.backgroundColor="green";
                        }
                        else{
                            hinSpanRef.current.innerHTML="Fail";
                            hinSpanRef.current.style.backgroundColor="red";
                        }
                    }
                    else{
                        hinSpanRef.current.innerHTML="Invalid";
                        hinSpanRef.current.style.backgroundColor="yellow";
                    }
                }} onBlur={()=>{
                    hinInputRef.current.style.backgroundColor="red";
                }}></input>
                <span ref={hinSpanRef}></span>
            </div>
            <div>
                <label>Maths</label>
                <input ref={mathInputRef} onFocus={()=>{
                    mathInputRef.current.style.backgroundColor="lightgreen";
                }}onChange={()=>{
                    if(mathInputRef.current.value>=0 && mathInputRef.current.value<=100){
                        if(mathInputRef.current.value>=35){
                            mathSpanRef.current.innerHTML="Pass";
                            mathSpanRef.current.style.backgroundColor="green";

                        }
                        else{
                            mathSpanRef.current.style.backgroundColor="red";
                            mathSpanRef.current.innerHTML="Fail";
                        }
                    }
                    else{
                        mathSpanRef.current.style.backgroundColor="yellow";
                        mathSpanRef.current.innerHTML="Invalid";
                    }
                }} onBlur={()=>{
                    mathInputRef.current.style.backgroundColor="yellow";
                }}></input>
                <span ref={mathSpanRef}></span>
            </div>
            <div>
                <label>Science</label>
                <input ref={sciInputRef} onFocus={()=>{
                    sciInputRef.current.style.backgroundColor="orange";
                }} onChange={()=>{
                    if(sciInputRef.current.value>=0 && sciInputRef.current.value<=100)
                    {
                        if(sciInputRef.current.value>=35){
                            sciSpanRef.current.style.backgroundColor="green";
                            sciSpanRef.current.innerHTML="Pass";

                        }
                        else{
                            sciSpanRef.current.innerHTML="Fail";
                            sciSpanRef.current.style.backgroundColor="red";
                        }
                    }
                    else{
                        sciSpanRef.current.style.backgroundColor="yellow";
                        sciSpanRef.current.innerHTML="Invalid";
                    }
                }} onBlur={()=>{
                    sciInputRef.current.style.backgroundColor="lightpink";
                }}></input>
                <span ref={sciSpanRef}></span>
            </div>
            <div>
                <label>Social</label>
                <input ref={socInputRef} onFocus={()=>{
                    socInputRef.current.style.backgroundColor="Deeppink";
                }}onChange={()=>{
                    if(socInputRef.current.value>=0 && socInputRef.current.value<=100)
                        {
                            if(socInputRef.current.value>=35){
                                socSpanRef.current.style.backgroundColor="green";
                                socSpanRef.current.innerHTML="Pass";
    
                            }
                            else{
                                socSpanRef.current.innerHTML="Fail";
                                socSpanRef.current.style.backgroundColor="red";
                            }
                        }
                        else{
                            socSpanRef.current.style.backgroundColor="yellow";
                            socSpanRef.current.innerHTML="Invalid";
                        }
                }} onBlur={()=>{
                    socInputRef.current.style.backgroundColor ="red";
                }}></input>
                <span ref={socSpanRef}></span>
            </div>
            <div>
                <button type="button" onClick={()=>{

                    button();
                   
                }}>Calculate the Result</button>
            </div>
            <div>
                <p ref={resultParaRef}>Results</p>
            </div>
        </form>
      
    </div>
  )
}

export default MarkSheet
