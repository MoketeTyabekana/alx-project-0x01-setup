import React, {useState} from 'react';
import { PostData,PostModalProps } from '@/interfaces'; 

const PostModal:React.FC<PostModalProps>=({onClose,onSubmit})=> {
 
 const [post,setPost]=useState<PostData>({
    userId:1,
    title:"",
    body:""
 })
 
 return(
    <div>
        
    </div>
 );
 
}


export default PostModal;