
import './Config.css';

function Config() {
  return (
    <div className="App">
      {/* <nav className='nav'> */}
       {/* <img width='50' height='50' src='https://cdn2.iconfinder.com/data/icons/prime-dock-icons-2/512/Configure_alt_1.png'></img>  */}
      <h1> Lift Configuration and settings</h1>
      {/* </nav> */}
      <div className='box'>
      <img width='80' height='70' margin-right= '14px'src='https://th.bing.com/th/id/R.6be6a722c4416f06c396226b1e483db8?rik=u9Ic9bQAvkLLTw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fBattery-Charging-PNG-Image.png&ehk=MK2mJ1TwbEKRXWsJUgvdVIZVG3kN2oU27mLdfyJ2Vfs%3d&risl=&pid=ImgRaw&r=0'></img>  
      <p><b>  Battery_Level : </b></p>
      
      <p className='battery_percent'> 100% </p>
       </div>
       <div className='lift_brand'>
       <img width='80' height='70' margin-right= '14px'src='https://cdn4.iconfinder.com/data/icons/hotel-collection/64/Elevator-hotel-service-travel-1024.png'></img>
       <p> <b> Lift Brand : </b></p>
       <p className='l_brand'>Johnsons Lift and Escalators</p>
       </div>
       <div className='max_speed'>
        <img width='80' height='80' margin-right= '14px'src='https://th.bing.com/th/id/OIP.97fA23tHDKaEMFcJ44bxagHaFj?pid=ImgDet&rs=1'></img>
       <p><b> Maximum Speed :</b></p>
       <p className='m_speed'> 1.2m/s</p>
       </div>
       <div className='lift_capacity'>
       <img width='80' height='80' margin-right= '14px' src='https://cdn3.iconfinder.com/data/icons/overpopulation-flat/64/capacity-maximum-ability-limit-elevator-512.png'></img>
      <p><b>  Lift Capacity : </b></p>
      <p className='l_capacity'>Maximum 5 persons</p>
       </div>
       <div className='power_cons'>
       <img width='80' height='80' margin-right= '14px'src='https://th.bing.com/th/id/R.b05bb369287778345a2d7e03815ce9c0?rik=ryUaEjxCn1n3Qg&riu=http%3a%2f%2fpremierpoolsandspas.com%2fwp-content%2fuploads%2f2015%2f05%2flightning-clip-art-Anonymous_Lightning_Icon.png&ehk=I5LSE01rtzeonuLMT6rclU6wyqYT6whfwexSRZlhx18%3d&risl=&pid=ImgRaw&r=0'></img>
       <p> <b> Power Consumed :</b></p>
       <p className='pow_cons'> 1200 Watts</p>
       </div>
    </div>
  );
}

export default Config;
