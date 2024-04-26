"use client"
import axios from "axios";
import { useEffect, useState } from "react"

export default function GuestBookList(){
    const[list, setList] = useState([]);
    const API_URL = "/guestbook/list.do";
    const getData = () => {
        axios.get(
            API_URL
        ).then(data =>{
            console.log(data);
            setList(data.data);
        }).catch(

        );
    }

    useEffect(()=>{
        getData();
    },[]);
    return(
        <>
            <h2>GuestBookList</h2>
        </>
    )
}