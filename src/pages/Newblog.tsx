import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface data {
    title : string ,
    author : string ,
    body : string 
}


const Newblog: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")

    //fetch request with fetch
    const handleTitleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value.trim())
    }
    const handleAuthorChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value.trim())
    }
    const handleBodyChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBody(e.target.value.trim())
    }
    
    
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const body_data : data = {title : title  , author : author , body : body }
        fetch("http://localhost:5000/blogs", {
            method: 'POST' ,
            body : JSON.stringify(body_data) ,
            headers : {'Content-type' : "application/json"}
        }).then((res) => {
            navigate('/blogs')
            console.log(res)
        })
        .catch((error) => console.error(error))
    }


    return (
        <div className="grid grid-cols-2 h-screen mx-auto my-auto overflow-hidden">
            <img src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" alt="" className="object-contain mx-auto lg:block sm:hidden" />

            <form onSubmit={handleSubmit} className="w-[350px] my-auto">

                <h1 className="text-xl font-bold">Create a new blog.</h1>
                <p className="text-gray-300">Fill in the fiels to create a new blog</p> <br />
                <input type="text" className="w-full border rounded-sm h-10 px-2" placeholder="Blog title "  onChange={handleTitleChange}/> <br />
                <input type="text" className="w-full border rounded-sm h-10 px-2 mt-2" placeholder="Blog author   (full names)"  onChange={handleAuthorChange}/> <br />
                <textarea placeholder="Content of the blog" className="w-full h-[200px] border  mt-2  resize-none px-2 py-2" onChange={handleBodyChange}></textarea>
                <button  type="submit" className="w-full py-2 bg-sky-500 text-white font-semibold border rounded-sm shadow hover:bg-black">Boom</button>

            </form>




        </div>
    )

}



export default Newblog