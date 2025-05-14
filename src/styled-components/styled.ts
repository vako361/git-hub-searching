import styled from "styled-components";
export const StyledSearch = styled.input`
 width: 100%;
 height: 69px;
 border-radius: 15px;
 background: #FEFEFE;
 box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);
  &:focus {
    outline: none; /* optional: removes default outline */
  border: 1px solid #0079FF; /* correct syntax */
  box-shadow: 0 0 0 2px rgba(0, 121, 255, 0.3); outline: #0079FF;
    border: #0079FF;
  }
 color: #4B6A9B;
 font-family: "Space Mono";
 font-size: 18px;
 font-weight: 400;
 line-height: 25px;
 padding-left: 80px;
 margin-top: 35px;
 margin-bottom: 24px;
`