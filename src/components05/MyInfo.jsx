import { useLocation } from "react-router-dom";

export default function MyInfo() {

  // ** useLocation()
  //=> navigate('path_url', {stat:{id:.., name:..}}) 
  //   을 이용해서 Parameter 를 전달하면
  //   useLocation 의 state 로 접근가능
  //  ( searchParams() 로 전달되지 않음 ) 
  const location = useLocation();
  console.log(`** location.pathname=${location.pathname}`);   
  console.log(`** location.search=${location.search}`); //쿼리스트링 
  
  
  const {id, userName} = location.state;
  console.log(`** location.state.id=${id}`);
  console.log(`** location.state.userName=${userName}`);

  return (
    <div>
      <div className="contents">
        <p className="pageTitle">** My Information **</p>
        <p>UserId : {location.state.id}</p>
        <p>UserName : {location.state.userName}</p>
      </div>

    </div>
  );
}