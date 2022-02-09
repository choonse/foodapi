import React, {useState} from 'react';
import styled,{css} from 'styled-components';


const Fullscreen = styled.div`
    position:fixed;
    z-index:200;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0, 0, 0, 0.25);
    display:flex;
    justify-content:center;
    align-items:center;
`;

const StyledInput = styled.input`
        font-size: 1rem;
    border: none;
    border-bottom: 1px solid lightgray;
    outline: none;
    width: 99%;
    line-height: 30px;
    text-align:center;
    margin-left:0.1rem;
    &:focus{
        color:$oc-teal-7;
    }
    & + & {
        margin-top: 1rem;
    }

`;

const AskModalBlock = styled.div`
    width:500px;
    background:white;
    padding:1.5rem;
    border-radius:4px;
    box-shadow:0px 0px 8px rgba(0, 0, 0, 0.125);
    h2{
        margin-top:0;
        margin-bottom:1rem;
    }
    p{
        margin-top:1rem;
        margin-bottom:2rem;
    }
    table{
        width:100%;
        display:flex;
        overflow:hidden;
    }
    .setTable{
        width:100%;
    }
    .title{
        width:150px;
        background-color:#EAEAEA;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom:1px solid lightgray;
    }
    .content{
        width:340px;
        display:inline-block;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom:1px solid lightgray;
    }
    .materialPage{
        height:300px;
        border:1px solid lightgray;
        overflow:hidden;
        overflow-y:auto;
        ::-webkit-scrollbar {
        width: 13px;
        }
        .contenttable{
            margin-top:0;
        }
        ::-webkit-scrollbar-track {
        background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
        background-color: gray;
        }
        ::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 20px;
        }
        ::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 20px;
        border: 3px solid transparent;
        background-clip: content-box;
        }
        ::-webkit-scrollbar-thumb:hover {
        background-color: gray;
        }
        }
    }

    .closebtn{    
        text-align:right;
        padding-top:15px;
    }
`;

const Button = styled.button`
    width:100px;
    height:35px;
    border:1px solid gray;
    border-radius:5px;
    margin-left:5px;
    background-color:#BDBDBD;
    &:hover{
        background-color:#D5D5D5;
    }
    ${props => props.color && css`
        color:white;
        background-color:#4374D9;
        &:hover{
            background-color:#6799FF;
        }
    `} 
`;

type Detail = {
    visible:boolean,
    executeDetailScan:(company:string, product:string, raw:string, date:string, regNum:string, serialNum:string)=>void,
    cancel:()=>void
}

const DetailScanModal = ({visible, executeDetailScan, cancel}:Detail) => {

    const [company, setCompany]=useState('');
    const [product, setProduct]=useState('');
    const [raw, setRaw]=useState('');
    const [date, setDate]=useState('');
    const [regNum, setRegNum]=useState('');
    const [serialNum, setSerialNum]=useState('');

    const getScanned = () => {

        if(!!date&&date.length!==8){
            alert('날짜는 YYYYMMDD 형식으로 입력해 주세요.')
            return;
        }        

        executeDetailScan(company, product, raw, date, regNum, serialNum);

        setCompany('');
        setProduct('');
        setRaw('');
        setDate('');
        setRegNum('');
        setSerialNum('');
        cancel();
    }

    const onChange = (e:any) => {
        if(e.target.id==='company'){
            setCompany(e.target.value)
        }else if(e.target.id==='product'){
            setProduct(e.target.value)
        }else if(e.target.id==='raw'){
            setRaw(e.target.value)
        }else if(e.target.id==='date'){
            setDate(e.target.value)
        }else if(e.target.id==='regNum'){
            setRegNum(e.target.value)
        }else if(e.target.id==='serialNum'){
            setSerialNum(e.target.value)
        }
    }

    const enterKey = (e:any) => {
        if(e.key==='Enter'){
            getScanned();
        }
    }
    

  if(!visible){
    return null;
  }

  return(
    <Fullscreen>
        <AskModalBlock>
            <table className='setTable'>
                <tbody>
                    <tr>
                        <td className='title'>
                            업소명                 
                        </td>
                        <td className='content'>
                            <StyledInput onChange={onChange} id='company' onKeyPress={enterKey}/>
                        </td>
                    </tr>
                    <tr>
                        <td className='title'>
                            품목명                 
                        </td>
                        <td className='content'>
                            <StyledInput onChange={onChange} id='product' onKeyPress={enterKey} />
                        </td>
                    </tr>
                    <tr>
                        <td className='title'>
                            원재료명                 
                        </td>
                        <td className='content'>
                            <StyledInput onChange={onChange} id='raw' onKeyPress={enterKey} />
                        </td>
                    </tr>
                    <tr>
                        <td className='title'>
                            허가(보고)일자                 
                        </td>
                        <td className='content'>
                            <StyledInput onChange={onChange} id='date' onKeyPress={enterKey} />
                        </td>
                    </tr>
                    <tr>
                        <td className='title'>
                            인허가번호                
                        </td>
                        <td className='content'>
                            <StyledInput onChange={onChange} id='regNum' onKeyPress={enterKey} />
                        </td>
                    </tr>
                    <tr>
                        <td className='title'>
                            품목제조번호                 
                        </td>
                        <td className='content'>
                            <StyledInput onChange={onChange} id='serialNum' onKeyPress={enterKey} />
                        </td>
                    </tr>
                    
                </tbody>
            </table>  
            <div className='closebtn'>
                <Button color={'true'} onClick={getScanned}>검색</Button>
                <Button onClick={cancel}>닫기</Button>
            </div>
        </AskModalBlock>
    </Fullscreen>
  )
}

export default DetailScanModal;