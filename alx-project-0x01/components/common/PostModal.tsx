import React, {useState} from 'react';
import { PostData,PostModalProps } from '@/interfaces'; 

const PostModal:React.FC<PostModalProps>=({onClose,onSubmit})=> {
 
 const [post,setPost]=useState<PostData>({
    userId:1,
    title:"",
    body:""
 });

 const handleChange=(e:React.FormEvent)=>{
    e.preventDefault();
    onSubmit(post);
    onClose();
 }
 
 return(
    <div>

    </div>
 );
 
}


export default PostModal;