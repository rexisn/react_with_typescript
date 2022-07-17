import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackArrow from '../icons/back-arrow.svg'
import axios from 'axios'


interface datatoFetch {
    id: string,
    title: string,
    body: string,
    author: string
}

const Singleblog: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState<datatoFetch>()
    useEffect(() => {

        const fetcher: any = async () => {
            const data = await axios.get(`http://localhost:5000/blogs/${id}`)
            setData(data.data)
        }
        setTimeout(() => {

            fetcher();
        }, 2000)
    }, [])

    const deleteFx  = async ( id :string) => {
        const res : any = await axios.delete(`http://localhost:5000/blogs/${id}`)
        goBack();
      }
    //by using fetch


    function goBack(): void {
        navigate("/blogs")
    }
    if (!data) console.log("Nothing found")
    else console.log(data)

    return (
        <div className="flex justify-center w-screen h-screen px-[15vw] gap-14 py-10">
            {!data && (
                <div className="flex justify-center items-center">Loading...</div>
            )}
            {data && (
                <>
                    <button title="go back to last page" className="px-4 py-2 rounded-full font-semibold hover:bg-sky-100  h-fit" onClick={goBack}> <img alt="back" src={BackArrow} className="w-6" /> </button>
                    <div className="full w-[60vw] ">
                        <h1 className="font-bol">{data.title}</h1>
                        <hr className="my-4 border-gray-200" />
                        <p className="text-sm text-gray-500">{data.body}</p>
                        <p className=" text-right mt-4 w-full italic text-sm text-gray-300">{data.author}</p>
                        <button className="px-4 py-2 bg-red-200 hover:bg-red-600 rounded-full float-right mt-10 text-white " onClick={() => deleteFx(data.id)}> Delete blog</button>

                    </div>
                </>
            )}

        </div>
    )

}


export default Singleblog