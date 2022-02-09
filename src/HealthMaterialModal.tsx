import React from 'react';
import styled from 'styled-components';


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

const AskModalBlock = styled.div`
    width:1200px;
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
    .titleSet{
        width:125px;
        display:inline-block;
        background-color:#B2CCFF;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom:1px solid lightgray;
    }
    .contentSet{
        width:270px;
        display:inline-block;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom:1px solid lightgray;
    }
    .twoblock{
        display:flex;
    }
    .setOne{
        margin-left:3px;
    }
    .etcPage{
        height:150px;
        width:394px;
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
    .materialPage{
        
        height:250px;
        width:595px;
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
    .materialTr{
        width:100%;
        display:block;
        border-bottom:1px solid lightgray;
        height:40px;
        line-height:40px;
    }
    .title{
        margin-top:10px;
        background-color:#B2CCFF;
        height:45px;
        line-height:45px;
        display:blo;
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
    background-color:#BDBDBD;
    &:hover{
        background-color:#D5D5D5;
    }
`;

type HealthMaterial = {
    visible:boolean,
    data:any,
    cancel:()=>void
}

const HealthMaterialModal = ({visible, data, cancel}:HealthMaterial) => {

  if(!visible){
    return null;
  }

  console.log(data)

  return(
    <Fullscreen>
        <AskModalBlock>
            <table className='setTable'>
                <tbody>
                    <tr>
                        <td className='titleSet'>업소명</td><td className='contentSet'>{!!data&&data.BSSH_NM}</td><td className='titleSet'>제품명</td><td className='contentSet'>{!!data&&data.PRDLST_NM}</td><td className='titleSet'>제품형태</td><td className='contentSet'>{!!data&&data.PRDT_SHAP_CD_NM}</td>
                    </tr>
                    <tr>
                        <td className='titleSet'>보고일자</td><td className='contentSet'>{!!data&&data.PRMS_DT}</td>    <td className='titleSet'>유통기한</td><td className='contentSet'>{!!data&&data.POG_DAYCNT}</td><td className='titleSet'>성상</td><td className='contentSet'>{!!data&&data.DISPOS}</td>
                    </tr>


                    <tr>
                        <td className='titleSet'>최초생성일시</td><td className='contentSet'>{!!data&&data.CRET_DTM}</td><td className='titleSet'>최종수정일시</td><td className='contentSet'>{!!data&&data.LAST_UPDT_DTM}</td><td className='titleSet'>보관방법</td><td className='contentSet'>{!!data&&data.CSTDY_MTHD}</td>
                    </tr>


                    
                    <div className="twoblock">

                    <div className='setOne'>
                    <div className='title'>섭취방법</div>
                    <div className='etcPage'>
                    {!!data&&data.NTK_MTHD}
                    </div>
                    </div>

                    <div className='setOne'>
                    <div className='title'>섭취시주의사항</div>
                    <div className='etcPage'>
                    {!!data&&data.IFTKN_ATNT_MATR_CN}
                    </div>
                    </div>

                    <div className='setOne'>
                    <div className='title'>기준규격</div>
                    <div className='etcPage'>
                    {!!data&&data.NTK_MTHD}
                    </div>
                    </div>

                    </div>





                </tbody>
            </table>

            <div className="twoblock">

                <div className='setOne'>
                <div className='title'>주된기능성</div>
                <div className='materialPage'>
                        {!!data&&data.PRIMARY_FNCLTY}
                </div>
                </div>

                <div className='setOne'>
                <div className='title'>원료</div>
                <div className='materialPage'>
                        {!!data&&data.RAWMTRL_NM.split(',').map((list:any)=><div className='materialTr'>{list}</div>)}
                </div>
                </div>
            </div>
            <div className='closebtn'>
                <Button onClick={cancel}>닫기</Button>
            </div>
        </AskModalBlock>
    </Fullscreen>
  )
}

export default HealthMaterialModal;