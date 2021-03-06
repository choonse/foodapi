import React, {useState} from 'react';
import styled,{css} from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import apikey from './apikey.json';
import DotLoader from 'react-spinners/DotLoader';
import MaterialModal from './MaterialModal';
import DetailScanModal from './DetailScanModal';
import ExcelJS from 'exceljs';
import {saveAs} from 'file-saver';

const SetCenter = styled.div`
  width:100%;
  text-align:center;
  margin-top:15px;
  overflow:hidden;
  height:760px;
  .centerline{
      width:100px;   
      height:10px;
      margin:0 auto;
      display:block;
      cursor:pointer;
  }
  .showDown{
    height:30px;
    background:
    visibility:hidden;
    background-image:url(${window.location.origin + '/excel.png'});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .centerline:hover .showDown{
    height:70px;
    visibility:visible;
    transition:linear 1s;
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
  .setNumber{
      width:50px;
  }
  .setCompany{
      width:230px;
  }
  .setProduct{
      width:270px;
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
  .setMaterial{
      width:630px;
      overflow:hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }

  .setMaterialContent{
      text-align:left;
  }

  .seteven{
      display: flex;
      line-height:45px;
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

    interface Provider{
        result:any,
        C002:any,
        row:any,
    }

    const [regNum, setRegNum] = useState<boolean>(true);
    const [company, setCompany] = useState<boolean>(true);
    const [serialNum, setSerialNum] = useState<boolean>(true);
    const [allowDate, setAllowDate] = useState<boolean>(true);
    const [product, setProduct] = useState<boolean>(true);
    const [type, setType] = useState<boolean>(true);
    const [material, setMaterial] = useState<boolean>(false);
    const [nextFind, setNextFind] = useState<boolean>(false); // next?????? ?????????
    const [searchUnit, setSearchUnit] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const [result, setResult] = useState<Provider|null>(
        // {"C002":{"total_count":"3","row":[{"PRDLST_REPORT_NO":"2011001517149","PRMS_DT":"20141215","LCNS_NO":"20110015171","PRDLST_NM":"GLOBE ULTRA DRY(????????? ????????? ?????????)","BSSH_NM":"??????????????????????????????","PRDLST_DCNM":"??????","RAWMTRL_NM":"?????????,????????????????????????,?????????????????????,?????????(????????????????????????),???????????????(????????????),???????????????,???(??????+???),??????,??????"},{"PRDLST_REPORT_NO":"1990045801682","PRMS_DT":"20060110","LCNS_NO":"19900458016","PRDLST_NM":"NHY ????????????","BSSH_NM":"????????????","PRDLST_DCNM":"??????","RAWMTRL_NM":"????????????,??????,?????????,?????????,??????????????????,????????????-??-??????,L-????????????????????????,??????"},{"PRDLST_REPORT_NO":"201100151715","PRMS_DT":"20130924","LCNS_NO":"20110015171","PRDLST_NM":"dry finish d(?????????????????????)","BSSH_NM":"??????????????????????????????","PRDLST_DCNM":"??????","RAWMTRL_NM":"??????,??????,???(??????+???),???????????????,?????????"}],"RESULT":{"MSG":"???????????????????????????.","CODE":"INFO-000"}}}
    );

    const [companyData, setCompanyData] = useState<any>();
    const [findMany, setFindMany] = useState<number>(10);
    const [materialModal, setMaterailModal] = useState<boolean>(false);
    const [detailScanModal, setdetailScanModal] = useState<boolean>(false);

	const [listPage, setListPage] = useState<number>(1);

    const onChange= (num:Number):void => {  
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

    const onSearch = async (next:string|null) => {
        let process:boolean = true;

        setLoading(true);

        if(next===null){
            setResult(null);
            setSearchUnit(findMany);
            setListPage(1);
        }

        if(next==='before'&&listPage<findMany){
            process=false;
            setLoading(false);
        }
        
        let query = `1/${findMany}`;

        if(next==='next'){
            setResult(null);
            query = `${searchUnit+1}/${searchUnit+findMany}`;
            setListPage(searchUnit+1)
            setSearchUnit(searchUnit+findMany);
        }

        if(next==='before'&&process===true){
            setResult(null);
            query = `${searchUnit-(findMany*2)+1}/${searchUnit-findMany}`;
            setSearchUnit(unit=>unit-findMany);     
            setListPage(searchUnit-(findMany*2)+1); 
        }

        if(process===true){
	        try {
	            const res = await fetch(
	                `https://openapi.foodsafetykorea.go.kr/api/${apikey.key}/C002/json/${query}`
	            ,)
	            const data = await res.json();
                if(data.C002.total_count==='0'){
                    alert('?????? ????????? ????????????.')
                    setLoading(false);
                }else{
                    setResult(data);
                    setLoading(false);
                    setNextFind(true);
                }
                // setResult(data);
	            // setLoading(false);
	            // console.log(data);
	          } catch (err:any) {
	            console.log(err.message);
	          }
        }
    }

    const setAll = () => {

        for(let i=1;i<=7;i++){
            onChange(i);
        }

    }
 
    const excelOut = async () => {

        console.log('excel Out');
        const workbook = new ExcelJS.Workbook();

        const worksheet = workbook.addWorksheet('?????????');

        worksheet.columns=[
            {header : 'No.', key:'num', style:{alignment:{horizontal:'center'}}},
            {header : '?????????', key:'num', style:{alignment:{horizontal:'center'}}},
            {header : '?????????', key:'num', style:{alignment:{horizontal:'center'}}},
            {header : '??????', key:'num', style:{alignment:{horizontal:'center'}}},
            {header : '????????????', key:'num', style:{alignment:{horizontal:'center'}}},
            {header : '???????????????', key:'num', style:{alignment:{horizontal:'center'}}},
            {header : '??????????????????', key:'num', style:{alignment:{horizontal:'center'}}},
            {header : '??????', key:'num', style:{alignment:{horizontal:'center'}}},
        ];

        worksheet.getColumn('A').width=10;
        worksheet.getColumn('B').width=30;
        worksheet.getColumn('C').width=40;
        worksheet.getColumn('D').width=15;
        worksheet.getColumn('E').width=20;
        worksheet.getColumn('F').width=20;
        worksheet.getColumn('G').width=20;
        worksheet.getColumn('H').width=150; 
        worksheet.getRow(1).fill = {
            type: 'pattern',
            pattern:'solid',
            fgColor:{argb:'A6A6A6'},
        };

        let numbering:number = listPage;

        if(result){
            result.C002.row.map((list:any)=>{
                worksheet.addRow([numbering,list.BSSH_NM,list.PRDLST_NM,list.PRDLST_DCNM,list.PRMS_DT,list.LCNS_NO,list.PRDLST_REPORT_NO,list.RAWMTRL_NM]);            
                return numbering++;            
            });
        }

        await workbook.xlsx.writeBuffer().then(data=>{
            const blob = new Blob([data]);
            saveAs(blob, 'apidata.xlsx');
        })
    }

    const setFindset = (data:any) => {
        setFindMany(data);
        setSearchUnit(data);
    }

    const materialShow = async (e:any) => {

        const res = !!result?result.C002.row[e.currentTarget.getAttribute('id')-1]:'';

        setMaterailModal(true);
        setCompanyData(res);
        
        // const query = e.currentTarget.getAttribute('id');
        // try {
        //     const res = await fetch(
        //         `https://openapi.foodsafetykorea.go.kr/api/${apikey.key}/C002/json/1/10/PRDLST_REPORT_NO=${query}`
        //     ,)
        //     const data = await res.json();
        //     setCompanyData(data);
        //   } catch (err) {
        //     console.log(err.message);
        //   }
    }

    const cancel = ():void => {
        setMaterailModal(false);
    }

    const detailscancancel = ():void => {
        setdetailScanModal(false);
    }

    const detailScan = (e:Event):void => {
        e.stopPropagation();
        setdetailScanModal(true);
    }

    const executeDetailScan = async (company:String, product:String, raw:String, date:String, regNum:String, serialNum:String, setPage:number) => {
        setResult(null);

        if(company||product||raw||date||regNum||serialNum||setPage){
            
            if(setPage!==1){
                setListPage(setPage)
            }

            const page = setPage!==1?`${setPage}/${Number(setPage)+findMany}`:`${setPage}/${findMany}`;
            
            setSearchUnit(Number(setPage)+findMany-1);

            setLoading(true);

            console.log(page)
            const query = `${company?'BSSH_NM='+company:''}${product?company?'&PRDLST_NM='+product:'PRDLST_NM='+product:''}${raw?(product||company)?'&RAWMTRL_NM=*'+raw+'*':'RAWMTRL_NM=*'+raw+'*':''}${date?(company||product||raw)?'&CHNG_DT='+date:'CHNG_DT='+date:''}${regNum?(company||product||raw||date)?'&LCNS_NO='+regNum:'LCNS_NO='+regNum:''}${serialNum?(company||product||raw||date)?'&PRDLST_REPORT_NO='+serialNum:'PRDLST_REPORT_NO='+serialNum:''}`;
            console.log(query)
            try {
                const res = await fetch(
                    `https://openapi.foodsafetykorea.go.kr/api/${apikey.key}/C002/json/${page}/${query}`
                ,)
                const data = await res.json();
                if(data.C002.total_count==='0'){
                    alert('?????? ????????? ????????????.')
                    setLoading(false);
                }else{
                    setResult(data);
                    setLoading(false);
                    setNextFind(true);
                }
                //  setResult(data);
                //  setLoading(false);
                //  setNextFind(true);
            } catch (err:any) {
                console.log(err.message);
            }
        }else{
            alert('?????? ????????? ???????????? ???????????? ?????????.')
        }
    }

    let cnt = listPage;

    return(
        <SetCenter>
        <div className="centerline" onClick={excelOut}><div className="showDown"></div></div>
        <table className='marginTop10 noline'>
        <tbody>
                <tr>
                    <td colSpan={3} style={{textAlign:'left',fontWeight:'bold',fontSize:'20px'}}>
                        ??????(?????????)??????????????????(?????????)
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
                    <div className="glow-on-hover showMenu" onClick={()=>{onSearch(null);setNextFind(true);}}>??????
                    <div className='menuList' onClick={(event:any)=>{detailScan(event)}}>????????????</div>
                    </div>

                     </td>
                    
                </tr>

            </tbody>
        </table>
        <table>
            <tbody>
                <tr>
                    <td className="titlecolor">
                    <FormControlLabel label="?????? ??????" control={<Checkbox checked={!!regNum&&!!company&&!!serialNum&&!!allowDate&&!!product&&!!type&&!!material} onChange={()=>{setAll()}} />} />
                    </td>
                    <td>   
                    <FormControlLabel label="?????????" control={<Checkbox checked={company} onChange={()=>{onChange(2)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="?????????" control={<Checkbox checked={product} onChange={()=>{onChange(5)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="??????" control={<Checkbox checked={type} onChange={()=>{onChange(6)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="????????????" control={<Checkbox checked={allowDate} onChange={()=>{onChange(4)}}/>} />
                    </td>
                    <td>
                    <FormControlLabel label="???????????????" control={<Checkbox checked={regNum} onChange={()=>{onChange(1)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="??????????????????" control={<Checkbox checked={serialNum} onChange={()=>{onChange(3)}}/>} />
                    </td>
                    <td>   
                    <FormControlLabel label="?????????" control={<Checkbox style={{zIndex:2}} checked={material} onChange={()=>{onChange(7)}} />} />
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr>
                    <td className="titlecolor">
                    ?????? ??????  
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
                    <td colSpan={2} className={findMany>999?"status6":'nonstatus6'} onClick={()=>{setFindset(1000);setNextFind(false);}}>
                    ~1000
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody>
            <tr className='tableHead'>
                    {material?
                    <>
                    <td className="setNumber">No.</td>
                    {company?<td className="setCompany">?????????</td>:''}
                    {product?<td className="setProduct">?????????</td>:''}
                    {material?<td className="setMaterial">?????????</td>:''}
                    </>
                    :
                    <>
                    <td className="setNumber">No.</td>
                    {company?<td className="setCompany">?????????</td>:''}
                    {product?<td className="setProduct">?????????</td>:''}
                    {type?<td className="setType">??????</td>:''}
                    {allowDate?<td className="setDate">????????????</td>:''}
                    {regNum?<td className="setRegNum">???????????????</td>:''}
                    {serialNum?<td className="setSerialNum">??????????????????</td>:''}
                    </>

                    }
                    </tr>   
                </tbody>
                </table>
                <div className="setPage">
                <table className="contenttable">
                <tbody>
                {result?result.C002.row.map((list:any)=>
                <tr className="seteven" id={String(cnt)} onClick={materialShow}><td className="setNumber">{cnt++}</td>{company?<td className='listhide setCompany'>{list.BSSH_NM}</td>:''} {product?<td className='listhide setProduct'>{list.PRDLST_NM}</td>:''} {type&&!material?<td className='listhide setType'>{list.PRDLST_DCNM}</td>:''} {allowDate&&!material?<td className='listhide setDate'>{list.PRMS_DT}</td>:''} {regNum&&!material?<td className='listhide setRegNum'>{list.LCNS_NO}</td>:''} {serialNum&&!material?<td className='listhide setSerialNum'>{list.PRDLST_REPORT_NO}</td>:''} {material?<td className='listhide setMaterial setMaterialContent'>{list.RAWMTRL_NM}</td>:''}</tr>
                )
                :<DotLoader color={'#6B66FF'} loading={loading} css={String(override)} size={60} />
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