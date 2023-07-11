import InputTextArea from "../DropDown/InputTextArea";
import Delete from "../assets/Svgs/Delete";


function TodoList (){
    return(
        <>
        <section className=" w-screen h-screen flex ">
            <div className="h-screen w-[400px] bg-zinc-200 flex flex-col justify-center items-center">
                <div>
                <button className="rounded-full h-[40px] bg-green-200 w-[100px] text-red-500">
                    click me
                    </button>
            </div>
            </div>
            <div className="h-screen w-[70%] bg-gray-500 ">
            <InputTextArea/>
            <div className="h-[77%] bg-teal-500 w-[50%] flex flex-col items-center">
           <div className="">MY TODO LISTS</div>
           <div className="border-y border-black w-full h-[60px] flex justify-between px-2 py-2 items-center">
           <p>finally discovered how to set a border</p>
             <button className=" bg-black h-[30px] w-[140px] text-sm font-serif rounded text-white">
                    display list
                    </button>
                    <Delete />
           </div>
            </div>

            </div>
            
            </section>
            
            
            
            
               
            
              



            <div></div>
            
        
            
            
        
        </>
    )
};
export default TodoList;