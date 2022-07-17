import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

interface Blog {
  id?: string,
  title: string,
  body: string,
  author: string
}

interface blog {
  id: string,
  title: string,
  author: string,
  body: string
}


const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<blog[]>([])

  useEffect(() => {
    const fetcher: any = async () => {
      const blogs = await axios.get("http://localhost:5000/blogs")
      setBlogs(blogs.data)
    }
    fetcher();
  }, [])


  console.log(blogs)
  return (
    <div className='w-screen h-screen px-[15vw] py-10 overflow-x-hidden '>
      <div className='w-full   flex items-center justify-between'><span className='text-2xl font-bold'>Blogs</span> <Link to={'/new'} className="text-sm font-bold text-white bg-sky-400 py-2 px-4 rounded-sm">New Blog</Link></div>

      <hr className='mt-10' />
      <div className='flex justify-between flex-wrap '>
        {!blogs && <><div className='w-full h-full items-center justify-center'>Loading</div></>}

        {blogs &&
          blogs.map((blog) => (
            <Blog  key={blog.id} id={blog.id} title={blog.title} body={blog.body} author='John Doe' />
          ))
        }


      </div>

    </div>
  )
}

export default Blogs