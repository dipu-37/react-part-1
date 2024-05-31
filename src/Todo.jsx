export default function Todo({task, isDone}){

   
        if(isDone== true)
            {
                return <li>work is finish</li>
            }
        else{
            return <li> not finish</li>
        }
       
  
}