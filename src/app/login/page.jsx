"use client"

import { Avatar, Button, FormControl, Stack, TextField } from "@mui/material"
import { green } from "@mui/material/colors"
import axios from "axios";
import { useState } from "react"

export default function Login(){
    const API_URL = "/members/login.do"
    const[uvo, setUvo] = useState({
        m_id : '',
        m_pw : ''
    });
    function changeUvo(e){
        setUvo({
            ...uvo,
            [e.target.name] : e.target.value
        })
    }
    function login(){
        // 두번째 인자 null은 post 요청의 본문으로 보낼 데이터를 나타낸다. 본문은 비어 있음
        // 세번째 인자 는 옵션 객체로, params 속성을 사용하여 요청에 쿼리 매개변수(파라미터)를 추가 햇음 
        axios.post(
            API_URL, null, {params : {m_id : uvo.m_id, m_pw : uvo.m_pw}}
        ).then( data => {
            console.log(data.data)
        }).catch(
            console.log("error")
        );
    }
    return(
        <div style={{width: '80%', margin: 'auto', paddingTop: '20px', textAlign: 'center'}}>
            <FormControl>
                <Stack direction="column" spacing={1} alignItems='center'>
                    <Avatar sx={{ bgcolor: green[500], marginBottom:'20px'}} />
                    <TextField type='text' label='ID' name='m_id' fullWidth  onChange={changeUvo}/>
                    <TextField type='password' label='PW' name='m_pw' fullWidth onChange={changeUvo}/>
                    <Button fullWidth variant='contained' onClick={login}>Sign in</Button>
                </Stack>
            </FormControl>
      </div>
    )
}