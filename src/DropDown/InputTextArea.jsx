import Close from "../assets/svgs/Close";
function InputTextArea (){
    return(
        <>
        <div className="bg-red-800 h-[150px] w-full flex flex-col items-center">
        <div className="bg-white w-[80%] h-[25%] flex justify-end px-8">
        <Close/>
        </div>
        <div className="bg-white w-[80%] h-[75%] flex justify-center items-center">
        <form action="" className="flex flex-col justify-evenly  items-end w-[90%] h-[100%] gap-0">
        <textarea className="w-full py-2 px-2">
          <input type="text" className="w-full h-[70%] outline-none"/>  
          </textarea>
          <button className="rounded-md bg-black text-white h-[25px] w-[120px]">Add Text</button>
        </form>       
        </div>
        </div>

        

        
        </>
    )
}
export default InputTextArea;