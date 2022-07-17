import React from "react";
import {Link} from 'react-router-dom'

interface data{
    id : string ,
    title: string,
    body : string,
    author : string ,
}

const Blog : React.FC<data> = ({id ,title , body, author}) => {
    return (
      <Link to={`/blogs/${id}`} > <div className="rounded-sm  shadow-sm p-2 w-[350px]" >
            <h1 className="font-bold">{title}</h1> 
            <hr className="my-4 border-gray-200"/>
            <p className="text-sm text-gray-500">{body}</p>
            <p className=" text-right mt-4 w-full italic text-sm text-gray-300">{author}</p>
            
        </div></Link> 
    )

}

export default Blog