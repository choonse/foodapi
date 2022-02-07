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
  z-index:100;
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
    70%{
      height:150px;
    }
    100%{
      height:170px;
      opacity:0;
      
    }
  }
  animation:showLine 3s 4s;
  @keyframes showLine{
    0%{
      border-bottom:0px solid lightgray;
    }
    100%{
      border-bottom:2px solid gray;
    }
  }

.title{
  font-weight:bold;
  font-size:65px;
  visibility:hidden;
  animation:showName 5s forwards;
  animation-delay:3s;
  @keyframes showName{
    0%{
      
      opacity:0;
    }
    50%{
      opacity:0.3;
    }
    100%{
      visibility:visible;
      opacity:100;
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
