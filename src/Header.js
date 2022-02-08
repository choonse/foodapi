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
  display:inline-flex;
  width:100%;
  padding-left:50px;
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
  display:inline-flex;
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

.setMenu{
  
  margin-left:15px;
  margin-top:15px;
  width:150px;
  cursor:pointer; 
}

.setMenu1{
    width:20px;
    height:35px;
    background-color:gray;
    line-height:35px;
    text-align:center;
}

.menu1{
    visibility: hidden;
    width:100px;
    background-color:gray;
    color:white;   
    border-bottom-right-radius:30%;
    border-top-right-radius:30%;
}

.setMenu1:hover .menu1{
  visibility:visible;
  width:150px;
  transition:linear 200ms;
}

.setMenu2{
    width:20px;
    height:35px;
    background-color:#B2CCFF;
    line-height:35px;
    text-align:center;
}

.menu2{
    visibility: hidden;
    width:100px;
    background-color:#B2CCFF;
    color:black;
    border-bottom-right-radius:30%;
    border-top-right-radius:30%;   
}

.setMenu2:hover .menu2{
  visibility:visible;
  width:150px;
  transition:linear 200ms;
}

`;

function Header({setMenu}) {
  return (
    <SetHeader>
    <div className="title">Food API    </div>
    <div className='setMenu'>
    <div className="setMenu1" onClick={()=>{setMenu(1)}}> 
    <div className='menu1'>
      식품 품목제조
    </div>
    </div>
    <div className="setMenu2" onClick={()=>{setMenu(2)}}>
    <div className='menu2'>
      건기 식품제조
    </div>
    </div>
    </div>

    </SetHeader>
  );
}

export default Header;
