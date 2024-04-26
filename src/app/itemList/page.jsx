"use client"
import { Divider, Grid } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import './itemList.css'

export default function ItemList(){
    // 상품을 저장하기 위해서 
    const[list, setList] = useState([]);
    //  https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
    const API_URL = "/makeup/v1/products.json?brand=maybelline";
    const getData = () =>{
        axios.get(
            API_URL
        ).then(data =>{
           // console.log(data.data);
            setList(data.data);
        }).catch(
            console.log("에러 발생")
        )

    }
    // 렌더링 될때 마다 실행 
    // useEffect(()=>{getData()});

    // 최초 한번만 실행 
    useEffect(()=>{
        getData();
      },[]);
    return(
        <div style={{width:"80%", margin:"auto", paddingTop:"20px"}}>
            <h2>베스트 상품</h2>
            {/* 구분선 */}
            <Divider /> 
            <Grid container>
                {list.map((k) => (
                    // 화면의 1/3 의미 => xs ={3}
                    <Grid item  xs={3} key={k.id}>
                        <Link href={'/view/'+k.id}>
                            <img src={k.image_link} alt={k.name} className="img_item"  />
                            <strong>{k.name}</strong>
                            <span className="txt_info">{k.category} &nbsp; {k.product_type} </span>
                            <strong className="num_price">${k.price}</strong>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}