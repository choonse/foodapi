import React, {useState} from 'react';
import styled,{css} from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import apikey from './apikey.json';
import DotLoader from 'react-spinners/DotLoader';
import MaterialModal from './MaterialModal';
import DetailScanModal from './DetailScanModal';

const SetCenter = styled.div`
  width:100%;
  text-align:center;
  margin-top:15px;
  overflow:hidden;
  height:760px;
  .centerline{
      width:100px;   
      height:10px;
      background-color:gray;
      margin:0 auto;
  }
  .prevFind{
      background-color:#3DB7CC;
      color:white;
      width:90px;
      visibility:visible;
      padding-left:10px;
      clip-path:polygon(100% 0, 10% 0, 0 50%, 10% 100%, 100% 100%);
      &:hover{
          background-color:#5CD1E5;
      }
  }
  .prevFindNo{
      background-color:white;
      color:white;
      width:90px;
      visibility:hidden;
      clip-path:polygon(100% 0, 10% 0, 0 50%, 10% 100%, 100% 100%);
  }
  .nextFind{
      background-color:#4374D9;
      color:white;
      width:90px;
      visibility:visible;
      padding-right:10px;
      clip-path:polygon(0 0, 90% 0%, 100% 50%, 90% 100%, 0 100%);
      &:hover{
          background-color:#6799FF;
      }
  }
  .nextFindNo{
      background-color:white;
      color:white;
      width:90px;
      clip-path:polygon(0 0, 90% 0%, 100% 50%, 90% 100%, 0 100%);
      visibility:hidden;
  }
  .marginTop10{
      margin-top:10px;
  }
  .setPage{
      width:1200px;
      height:490px;
      padding-bottom:10px;
      margin:0 auto;
      overflow:hidden;
      overflow-y:auto;
      overflow-x:hidden;

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

  .tableHead{
      background-color:lightgray;
      border-bottom:2px solid black;
      display: flex;
  }
  .setCompany{
      width:250px;
  }
  .setProduct{
      width:300px;
  }
  .setType{
      width:150px;
  }
  .setDate{
      width:150px;
  }
  .setRegNum{
    width:150px;
  }
  .setSerialNum{
      width:180px;
  }


  .seteven{
      display: flex;
      
    &:hover{
            background-color: #D9D6FF;
        }
    &:nth-child(odd){
        background-color: #EAEAEA;
        &:hover{
            background-color: #D9D6FF;
        }
    }
  }
  .titlecolor{
      background-color:lightgray;
  }
  .listhide{
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        
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

.showMenu{
    z-index:100;
}

.menuList{
    width:150px;
    height:50px;
    margin-top:1px;
    visibility: hidden;
    background-color:gray;
    color:white;
    opacity:0;
    &:hover{
        background-color:#AAAAAA;
    }
}

.showMenu:hover .menuList{
    visibility:visible;
    transition:linear 1s;
    transition-delay:1s;
    opacity:1;
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

const override = css`
    display: block;
    margin-top:210px;
    margin-bottom:210px;
    margin-left:50%;
`

const IngData = () => {

    const [regNum, setRegNum] = useState(true);
    const [company, setCompany] = useState(true);
    const [serialNum, setSerialNum] = useState(true);
    const [allowDate, setAllowDate] = useState(true);
    const [product, setProduct] = useState(true);
    const [type, setType] = useState(true);
    const [material, setMaterial] = useState(true);
    const [nextFind, setNextFind] = useState(false); // next버튼 활성화
    const [searchUnit, setSearchUnit] = useState(0);
    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(
        // {"C002":{"total_count":"3","row":[{"PRDLST_REPORT_NO":"2011001517149","PRMS_DT":"20141215","LCNS_NO":"20110015171","PRDLST_NM":"GLOBE ULTRA DRY(글로브 울트라 드라이)","BSSH_NM":"하이트진로㈜강원공장","PRDLST_DCNM":"맥주","RAWMTRL_NM":"정제수,글루코아밀라아제,알파아밀라아제,효소제(베타글루카나아제),산도조절제(황산칼슘),이산화탄소,홉(펠렛+즙),전분,맥아"},{"PRDLST_REPORT_NO":"1990045801682","PRMS_DT":"20060110","LCNS_NO":"19900458016","PRDLST_NM":"NHY 구운어묵","BSSH_NM":"명가푸드","PRDLST_DCNM":"어묵","RAWMTRL_NM":"냉동연육,전분,밀가루,정제염,소르빈산칼륨,글루코노-δ-락톤,L-글루타민산나트륨,설탕"},{"PRDLST_REPORT_NO":"201100151715","PRMS_DT":"20130924","LCNS_NO":"20110015171","PRDLST_NM":"dry finish d(드라이피니시디)","BSSH_NM":"하이트진로㈜강원공장","PRDLST_DCNM":"맥주","RAWMTRL_NM":"맥아,전분,홉(펠렛+즙),이산화탄소,정제수"}],"RESULT":{"MSG":"정상처리되었습니다.","CODE":"INFO-000"}}}
    );

    const [companyData, setCompanyData] = useState();
    const [findMany, setFindMany] = useState(10);
    const [materialModal, setMaterailModal] = useState(false);
    const [detailScanModal, setdetailScanModal] = useState(false);

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

    const onSearch = async (next) => {

        setLoading(true);
        setResult();

        if(!next){
            setSearchUnit(0);
        }

        let query = `1/${findMany}`;

        if(next==='next'){
            query = `${searchUnit+1}/${searchUnit+findMany}`;
            setSearchUnit(searchUnit+findMany);
        }

        if(next==='before'){
            query = `${searchUnit-(findMany*2)+1}/${searchUnit-findMany}`;
            setSearchUnit(searchUnit-findMany);            
        }

        try {
            const res = await fetch(
                `https://openapi.foodsafetykorea.go.kr/api/${apikey.key}/C002/json/${query}`
            ,)
            const data = await res.json();
            setResult(data);
            setLoading(false);
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
 
    const setFindset = (data) => {

        setFindMany(data);
        setSearchUnit(data);

    }

    const materialShow = async e => {

        const query = e.currentTarget.getAttribute('id');

        try {
            const res = await fetch(
                `https://openapi.foodsafetykorea.go.kr/api/${apikey.key}/C002/json/1/1/LCNS_NO=${query}`
            ,)
            const data = await res.json();
            setCompanyData(data);
          } catch (err) {
            console.log(err.message);
          }
          setMaterailModal(true);
    }

    const cancel = () => {
        setMaterailModal(false);
    }

    const detailscancancel = () => {
        setdetailScanModal(false);
    }

    const detailScan = (e) => {
        e.stopPropagation();
        setdetailScanModal(true);
    }

    const executeDetailScan = async (company, product, raw, date, regNum, serialNum) => {

        if(company||product||raw||date||regNum||serialNum){
            
            setResult('');
            setLoading(true);

            const query = `${company?'BSSH_NM='+company:''}${product?company?'&PRDLST_NM='+product:'PRDLST_NM='+product:''}${raw?(product||company)?'&RAWMTRL_NM='+raw:'RAWMTRL_NM='+raw:''}${date?(company||product||raw)?'&CHNG_DT='+date:'CHNG_DT='+date:''}${regNum?(company||product||raw||date)?'&LCNS_NO='+regNum:'LCNS_NO='+regNum:''}${serialNum?(company||product||raw||date)?'&PRDLST_REPORT_NO='+serialNum:'PRDLST_REPORT_NO='+serialNum:''}`;
            // console.log(query)
            try {
                const res = await fetch(
                    `https://openapi.foodsafetykorea.go.kr/api/${apikey.key}/C002/json/1/1000/${query}`
                ,)
                const data = await res.json();
                 setResult(data);
                 setLoading(false);
            } catch (err) {
                console.log(err.message);
            }
        }else{
            alert('최소 하나의 검색어를 입력해야 합니다.')
        }
    }

    return(
        <SetCenter>
        <div className="centerline"></div>
        <table className='marginTop10 noline'>
        <tbody>
                <tr>
                    <td colSpan='3' style={{textAlign:'left',fontWeight:'bold',fontSize:'20px'}}>
                        식품(첨가물)품목제조보고(원재료)
                    </td>
                    <td>
                    </td>
                    {nextFind&&(searchUnit!==findMany&&searchUnit!==0)?
                    <td className="prevFind" onClick={()=>{onSearch('before')}}>
                    P R E V
                    </td>:<td className='prevFindNo'></td>
                    }

                    {nextFind?
                    <td className="nextFind" onClick={()=>{onSearch('next')}}>
                    N E X T
                    </td>:<td className='nextFindNo'></td>
                    }
                    <td style={{'width':'10px'}}>  </td>
                    <td>
                    <div className="glow-on-hover showMenu" onClick={()=>{onSearch();setNextFind(true);}}>검색
                    <div className='menuList' onClick={detailScan}>상세검색</div>
                    </div>

                     </td>
                    
                </tr>

            </tbody>
        </table>
        <table>
            <tbody>
                <tr>
                    <td className="titlecolor">
                        {/* <FormControlLabel label="검색 상세" control={<Checkbox checked={!!regNum&&!!company&&!!serialNum&&!!allowDate&&!!product&&!!type&&!!material} onChange={()=>{setAll()}} />} /> */}
                        검색 항목
                    </td>
                    <td>   
                    <FormControlLabel label="업소명" control={<Checkbox checked={company} onChange={()=>{onChange(2)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="품목명" control={<Checkbox checked={product} onChange={()=>{onChange(5)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="유형" control={<Checkbox checked={type} onChange={()=>{onChange(6)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="허가일자" control={<Checkbox checked={allowDate} onChange={()=>{onChange(4)}}/>} />
                    </td>
                    <td>
                    <FormControlLabel label="인허가번호" control={<Checkbox checked={regNum} onChange={()=>{onChange(1)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="품목제조번호" control={<Checkbox checked={serialNum} onChange={()=>{onChange(3)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="ALL" control={<Checkbox styled={{zIndex:2}} checked={!!regNum&&!!company&&!!serialNum&&!!allowDate&&!!product&&!!type&&!!material} onChange={()=>{setAll()}} />} />
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr>
                    <td className="titlecolor">
                    검색 표시  
                    </td>
                    <td className="status1" onClick={()=>{setFindset(10);setNextFind(false);}}>
                    ~10          
                    </td>
                    <td className={findMany>49?"status2":'nonstatus2'} onClick={()=>{setFindset(50);setNextFind(false);}}>
                    ~50          
                    </td>
                    <td className={findMany>99?"status3":'nonstatus3'} onClick={()=>{setFindset(100);setNextFind(false);}}>
                    ~100
                    </td>
                    <td className={findMany>199?"status4":'nonstatus4'} onClick={()=>{setFindset(200);setNextFind(false);}}>
                    ~200
                    </td>
                    <td className={findMany>499?"status5":'nonstatus5'} onClick={()=>{setFindset(500);setNextFind(false);}}>
                    ~500
                    </td>
                    <td colSpan='2' className={findMany>999?"status6":'nonstatus6'} onClick={()=>{setFindset(1000);setNextFind(false);}}>
                    ~1000
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr className='tableHead'>
                    {company?<td className="setCompany">업소명</td>:''}
                    {product?<td className="setProduct">품목명</td>:''}
                    {type?<td className="setType">유형</td>:''}
                    {allowDate?<td className="setDate">허가일자</td>:''}
                    {regNum?<td className="setRegNum">인허가번호</td>:''}
                    {serialNum?<td className="setSerialNum">품목제조번호</td>:''}
                </tr>
                </tbody>
                </table>
                <div className="setPage">
                <table className="contenttable">
                <tbody>
                {result?result.C002.row.map(list=>
                <tr className="seteven" id={list.LCNS_NO} onClick={materialShow}>{company?<td className='listhide setCompany'>{list.BSSH_NM}</td>:''} {product?<td className='listhide setProduct'>{list.PRDLST_NM}</td>:''} {type?<td className='listhide setType'>{list.PRDLST_DCNM}</td>:''} {allowDate?<td className='listhide setDate'>{list.PRMS_DT}</td>:''} {regNum?<td className='listhide setRegNum'>{list.LCNS_NO}</td>:''} {serialNum?<td className='listhide setSerialNum'>{list.PRDLST_REPORT_NO}</td>:''} </tr>
                )
                :<DotLoader color={'#6B66FF'} loading={loading} css={override} size={60} />
                }                        
            </tbody>
        </table>
        </div>   
        <MaterialModal visible={materialModal} data={companyData} cancel={cancel}/>
        <DetailScanModal visible={detailScanModal} cancel={detailscancancel} executeDetailScan={executeDetailScan}/>
        </SetCenter>
    )    
}

export default IngData;