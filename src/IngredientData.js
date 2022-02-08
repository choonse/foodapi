import './App.css';
import styled from 'styled-components';
import IngData from './IngData';

const SetCenter = styled.div`
  position:relative;
  justify-content:center;     //horizontal
  align-items:center;         //vertical
  margin-top:110px;
  width:100%;
  height:790px;
  margin:0 0 0 0 auto;
  overflow:hidden;
  padding-top:35px;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  animation:showUp 2s;
  @keyframes showUp{
    0%{
      margin-top:700px;
        height:200px;
    }
    60%{
      margin-top:80px;
    }
    100%{
      margin-top:110px;
      height:790px;
    }
  }
`;

const SetBody = styled.div`
  padding-left:1rem;
  padding-right:1rem;
  width:100%;
  margin:0 auto; /*가운데 정렬*/
  border:7px solid gray;
  width:1400px;
  height:790px;
  overflow:hidden;
  border-top-left-radius:130px 150px;
  border-top-right-radius:130px 150px;
`;

function IngredientData() {
  return (
    <SetCenter>
      <SetBody>
        <IngData />
      </SetBody>
    </SetCenter>
  );
}

export default IngredientData;