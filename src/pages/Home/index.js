import './App.css';
import btt from './features/home';
import styled from 'styled-components';
import React from 'react';
import Navbar from './features/navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import background from './assets/nvbar.png'
import logo from './assets/Logo.png'
import TextField from "@mui/material/TextField";
import TL from './assets/Trang chủ/Tailieu.png';
import bxh from './assets/Trang chủ/BXH.png';
import dang from './assets/Trang chủ/Dang.png';
import lg from './assets/Trang chủ/Login.png';

function Home() {
  return (
    //Thanh điều hướng ở đầu trang chủ - Nguyễn Như Đăng
      <div className="Home">
     <header className="App-top">
      <Container 
            
            style={{height: 70,  backgroundImage: `url(${background})`, borderColor: 'transparent' }}>
      <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" style={{backgroundImage: `url(${logo})`,justifyContent: 'center', width: 90 , height: 46, alignItems: 'center', borderColor: 'transparent' }} >
      
      </Button>
      <img src= {TL} />
      <Button variant="secondary" style ={{fontFamily: 'Mulish Bold', fontWeight: 'bold', borderColor: 'transparent'}}>
        Thể loại
      </Button>
      <img src= {bxh} />
      <Button variant="secondary" style ={{fontFamily: 'Mulish Bold', fontWeight: 'bold', borderColor: 'transparent'}}>
        BXH
      </Button>
      <img src= {dang} />
      <Button variant="secondary" style ={{fontFamily: 'Mulish Bold', fontWeight: 'bold', borderColor: 'transparent'}}>
        Dang
      </Button>
      <TextField
          id="outlined-basic"
          variant="outlined"
          label="Tìm kiếm"
          style = {{width: 300, height: 20}}
        />
      <Button variant="secondary" style={{backgroundImage: `url(${lg})`,justifyContent: 'center', width: 135 , height: 38, alignItems: 'center', borderColor: 'transparent'}}>
       
      </Button>
    </ButtonGroup>
    
    </Container>
     </header>
    </div>
  );
}

export default Home;
