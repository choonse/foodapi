import './App.css';
import styled from 'styled-components';

const SetHeader = styled.div`


/* background-color:#D9D6FF; */
  border:none;
  height:100px;
  position:fixed;
  left:0;
  top:0;
  bottom:0;
  right:0;
  display:flex;
  width:100%;
  justify-content:center;     //horizontal
  align-items:center;         //vertical
  /* border-bottom-left-radius: 500px 50px;
  border-bottom-right-radius: 500px 50px; */
  animation:showTitle 3s;
    @keyframes showTitle{
    0%{
      height:0px;
      background-color:lightgray;
    }
    50%{
      height:130px;
      background-color:lightgray;
    }
    100%{
      height:100px;
      opacity:1;
    }
  }
  
 
.title{
  font-weight:bold;
  font-size:65px;
  visibility:hidden;
  animation:showName 4s forwards;
  animation-delay:2s;
  @keyframes showName{
    0%{
      opacity:0;      
    }
    50%{
      opacity:0.5;
      border-bottom:2px solid lightgray;
    }
    100%{
      visibility:visible;
      opacity:1;
      border-bottom:3px solid gray;
    }
  }
}

`;

function Header() {
  return (
    <SetHeader>
    <div className="title">Food API</div>
    </SetHeader>
  );
}

export default Header;
