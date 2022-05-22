import React from 'react'
import styled from "styled-components";
import { BsTwitter,BsLinkedin,BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 100vh;
.icon{
  transform: scale(5);
  transition: all 0.5s;
  color: black;
}
.icon:hover {
  transform: scale(7);
  color: orange;
}
`
function Contact() {
  return (
    <Wrapper>
      <a href="https://twitter.com/developer_altas"><BsTwitter className='icon'/></a>
      <a href="https://www.linkedin.com/in/mustafa-alta%C5%9F-b49b77225/"><BsLinkedin className='icon'/></a>
      <a href="https://www.instagram.com/xmmuussx/"><BsInstagram className='icon'/></a>
      <a href="mailto:mustafaaltas3428@gmail.com"><SiGmail className='icon'/></a>
      
    </Wrapper>
  )
}

export default Contact
