import React from 'react'
import { Link } from 'react-router-dom';
const Home : React.FC = () => {
  return (
    <div className='w-screen h-screen flex flex-col px-16 py-48 '>
        <h1 className='text-4xl font-bold'>Welcome in the bloggers hub.</h1>  <br />
        <p className='text-sm  text-gray-400'>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae mollitia dolore eum dignissimos suscipit deleniti, alias sapiente iusto deserunt, earum sit tenetur nulla esse incidunt atque tempore voluptas? Nam, aspernatur.
        Excepturi sequi voluptatibus aliquid possimus atque quibusdam deserunt quod officiis error odio minima iusto itaque ipsa voluptate nobis provident, ut ad, nemo temporibus quas magni labore eos impedit aperiam. Odio!
        Cumque, inventore? Minima doloribus ipsa autem consequuntur, unde ratione et facere similique totam accusamus? Consectetur voluptatibus repellendus soluta neque eius excepturi magni, corporis tempora sapiente rerum tempore omnis, nisi ut!</p>
        <div className=' flex   gap-4 mt-10'>

     <Link to={'/blogs'}>   <button className='font-bold text-md bg-sky-500 text-white rounded-sm py-2 w-fit px-6'>Read blogs</button></Link>
    <Link to={'/new'}>    <button className='font-bold text-md bg-sky-500 text-white rounded-sm py-2 px-6 w-fit'>Publish your own blog</button> </Link>
        </div>
        <div>
            <p className='text-sm   text-gray-300 absolute bottom-3 '>For learning purpose by #regis</p>
        </div>
    </div>
  )
}

export default Home ;