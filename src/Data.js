import React, {useState} from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import apikey from './apikey.json';


const SetCenter = styled.div`

  width:100%;
  text-align:center;
  margin-top:15px;
  overflow:hidden;

  .centerline{
      width:100px;
      
      height:10px;
      background-color:gray;
      margin:0 auto;

  }
  .marginTop10{
      margin-top:10px;
  }
  .setPage{
      width:1200px;
      height:1000px;
      padding-top:10px;
      padding-bottom:30px;
      margin:0 auto;
      overflow:hidden;
      overflow-y:auto;
      overflow-y:scroll;
      overflow-x:hidden;

    ::-webkit-scrollbar {
     width: 13px;
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
  .noline{
      border:none;
  }
  table{
      margin:0 auto;
      border:1px solid lightgray;
      margin-top:8px;
      width:1200px;
  }

  table td{
      /* border:1px solid gray; */
      width:150px;
      height:50px;
      padding:0;
      font-size:15px;
      line-height:50px;
      justify-content:center;
      text-align:center;
      cursor:pointer;
      transition:linear 400ms;
  }
    
  .titlecolor{
      background-color:lightgray;
  }
  .underLine{
    border-bottom:1px solid lightgray;
  }

  .status1{
      background-color:#E8FFFF;
      display:inline-flex;

  }
  .status2{
      background-color:#D6FFFF;
      display:inline-flex;
  }
  .status3{
      background-color:#C4FDFF;
      display:inline-flex;
      width:170px;
  }
  .status4{
      background-color:#B2EBF4;
      display:inline-flex;
      width:180px;
  }
  .status5{
      background-color:#A0D9E2;
      display:inline-flex;
      width:190px;
  }
  .status6{
      background-color:#8EC7D0;
      display:inline-flex;
      width:200px;
  }
  .nonstatus1{
      display:inline-flex;
  }
  .nonstatus2{
      display:inline-flex;
      color:gray;
  }
  .nonstatus3{
      display:inline-flex;
      width:170px;
      color:gray;
  }
  .nonstatus4{
      display:inline-flex;
      width:180px;
      color:gray;
  }
  .nonstatus5{
      display:inline-flex;
      width:190px;
      color:gray;
  }
  .nonstatus6{
      display:inline-flex;
      width:200px;
      color:gray;
  }
;

.glow-on-hover {
    width: 150px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background-color: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 3px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 3px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 3px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
}



`;




const Data = () => {

    const [regNum, setRegNum] = useState(true);
    const [company, setCompany] = useState(true);
    const [serialNum, setSerialNum] = useState(true);
    const [allowDate, setAllowDate] = useState(true);
    const [product, setProduct] = useState(true);
    const [type, setType] = useState(true);
    const [material, setMaterial] = useState(true);

    const [result, setResult] = useState(
        {"C002":{"total_count":"3","row":[{"PRDLST_REPORT_NO":"2011001517149","PRMS_DT":"20141215","LCNS_NO":"20110015171","PRDLST_NM":"GLOBE ULTRA DRY(글로브 울트라 드라이)","BSSH_NM":"하이트진로㈜강원공장","PRDLST_DCNM":"맥주","RAWMTRL_NM":"정제수,글루코아밀라아제,알파아밀라아제,효소제(베타글루카나아제),산도조절제(황산칼슘),이산화탄소,홉(펠렛+즙),전분,맥아"},{"PRDLST_REPORT_NO":"1990045801682","PRMS_DT":"20060110","LCNS_NO":"19900458016","PRDLST_NM":"NHY 구운어묵","BSSH_NM":"명가푸드","PRDLST_DCNM":"어묵","RAWMTRL_NM":"냉동연육,전분,밀가루,정제염,소르빈산칼륨,글루코노-δ-락톤,L-글루타민산나트륨,설탕"},{"PRDLST_REPORT_NO":"201100151715","PRMS_DT":"20130924","LCNS_NO":"20110015171","PRDLST_NM":"dry finish d(드라이피니시디)","BSSH_NM":"하이트진로㈜강원공장","PRDLST_DCNM":"맥주","RAWMTRL_NM":"맥아,전분,홉(펠렛+즙),이산화탄소,정제수"}],"RESULT":{"MSG":"정상처리되었습니다.","CODE":"INFO-000"}}}
    );

    const [findMany, setFindMany] = useState(10);

    const onChange= (num) => {  
        if(num===1){
            setRegNum(data=>!data);
        }else if(num===2){
            setCompany(data=>!data);
        }else if(num===3){
            setSerialNum(data=>!data);
        }else if(num===4){
            setAllowDate(data=>!data);
        }else if(num===5){
            setProduct(data=>!data);
        }else if(num===6){
            setType(data=>!data);
        }else if(num===7){
            setMaterial(data=>!data);
        }else{
        }
    }

    const onSearch = async () => {

        try {
            const res = await fetch(
                `https://openapi.foodsafetykorea.go.kr/api/${apikey.key}/C002/json/1/${findMany}`
            ,)
            const data = await res.json();
            setResult(data);
            // console.log(data);
          } catch (err) {
            console.log(err.message);
          }
    
          

    }

    const setAll = () => {

        for(let i=1;i<=7;i++){
            onChange(i);
        }

    }
 
    return(
        <SetCenter>
        <div className="centerline"></div>
        <table className='marginTop10 noline'>
        <tbody>
                <tr>
                    <td colSpan='3'>
                    </td>
                    <td>
                    </td>
                    <td>
                        btn
                    </td>
                    <td style={{backgroundColor:'gold'}}>
                    <div className="glow-on-hover" onClick={()=>{onSearch()}}>검색</div>
                     </td>
                    
                </tr>

            </tbody>
        </table>
        <table>
            <tbody>
                <tr>
                    <td className="titlecolor">
                        <FormControlLabel label="검색 상세" control={<Checkbox checked={!!regNum&&!!company&&!!serialNum&&!!allowDate&&!!product&&!!type&&!!material} onChange={()=>{setAll()}} />} />
                    </td>
                    <td>
                    <FormControlLabel label="인허가번호" control={<Checkbox checked={regNum} onChange={()=>{onChange(1)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="업소명" control={<Checkbox checked={company} onChange={()=>{onChange(2)}}/>} />
                    </td>
                    <td>   
                        <FormControlLabel label="품목제조번호" control={<Checkbox checked={serialNum} onChange={()=>{onChange(3)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="허가일자" control={<Checkbox checked={allowDate} onChange={()=>{onChange(4)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="품목명" control={<Checkbox checked={product} onChange={()=>{onChange(5)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="유형" control={<Checkbox checked={type} onChange={()=>{onChange(6)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="원재료" control={<Checkbox checked={material} onChange={()=>{onChange(7)}}/>} />
                    </td>
                    
                </tr>

            </tbody>
        </table>

        <table>
        <tbody>
                <tr>
                    <td className="titlecolor">
                        검색 수  
                    </td>
                    <td className="status1" onClick={()=>{setFindMany(10)}}>
                    ~10          
                    </td>
                    <td className={findMany>49?"status2":'nonstatus2'} onClick={()=>{setFindMany(50)}}>
                    ~50          
                    </td>
                    <td className={findMany>99?"status3":'nonstatus3'} onClick={()=>{setFindMany(100)}}>
                    ~100
                    </td>
                    <td className={findMany>199?"status4":'nonstatus4'} onClick={()=>{setFindMany(200)}}>
                    ~200
                    </td>
                    <td className={findMany>499?"status5":'nonstatus5'} onClick={()=>{setFindMany(500)}}>
                    ~500
                    </td>
                    <td colSpan='2' className={findMany>999?"status6":'nonstatus6'} onClick={()=>{setFindMany(1000)}}>
                    ~1000
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="marginTop10 setPage">
            {!!result&&result.C002.row.map(list=><div>{list.PRDLST_REPORT_NO} {list.PRMS_DT} {list.LCNS_NO} {list.PRDLST_NM} {list.BSSH_NM} {list.PRDLST_DCNM}</div>


            )}
        </div>
        </SetCenter>
    )


}


export default Data;