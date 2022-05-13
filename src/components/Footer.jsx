import React from "react";
import styled from "styled-components";

const FooterBar = styled.div`
height: 4rem;
background-color: aliceblue;
`
function Footer() {
  return (
    <FooterBar>
      <h5>© {new Date().getFullYear()} All Rights Reserved.</h5>
      <h6>Mustafa Altaş</h6>
    </FooterBar>
  );
}

export default Footer;
