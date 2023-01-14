import React,{useEffect,useState} from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CardDetails = () => {
   const [data, setData] = useState([]);
  //  console.log(data,'fgvhb');
   


const {id} = useParams();
// console.log(id);

const getdata = useSelector((state)=>state.cartreducer.carts);
  //  console.log(getdata);

// eslint-disable-next-line react-hooks/exhaustive-deps
const  compare =()=>{
  let comparedata = getdata.filter((e)=>{
    return e.id == id;
  })
  setData(comparedata);
}
 useEffect(() => {
 compare();
 }, [id])
 
  return (
    <>
      <div className="conatiner mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
          {
            data.map((ele)=>{
              return(
                <>
                <div className="items_img">
              <img
                src={ele.imgdata}
                alt=""
              />
            </div>
            <div className="details">
             <Table>
             <tr>
              <td>
                <p> <strong>Restaurant</strong> : {ele.rname}</p>
                <p> <strong>Price</strong> : ₹{ele.price}</p>
                <p> <strong>Dishes</strong> : {ele.address}</p>
                <p> <strong>Total</strong> : ₹1253</p>
              </td>
              <td>
                <p> <strong>Rating :</strong> <span style={{background:"green",color:'#fff',padding:'2px 5px',borderRadius:'5px'}}>{ele.rating}★</span></p>
                <p> <strong>Order Review :</strong> <span>{ele.somedata}</span></p>
                <p> <strong>Remove :</strong> <span><i className="fas fa-trash" style={{color:'red',fontSize:20,cursor:'pointer'}}></i></span></p>
              </td>
             </tr>
             </Table>
            </div>
                </>
              )
            })
          }
       </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
