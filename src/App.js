import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
      <h1> Lift Configuration and settings</h1>
      </nav>
      <div className='box'>
      <img width='80' height='70' margin-right= '14px'src='https://th.bing.com/th/id/R.6be6a722c4416f06c396226b1e483db8?rik=u9Ic9bQAvkLLTw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fBattery-Charging-PNG-Image.png&ehk=MK2mJ1TwbEKRXWsJUgvdVIZVG3kN2oU27mLdfyJ2Vfs%3d&risl=&pid=ImgRaw&r=0'></img>  
      <p>  Battery_Level :</p>
       </div>
       <div className='lift_brand'>
       <img width='80' height='70' margin-right= '14px'src='https://cdn4.iconfinder.com/data/icons/hotel-collection/64/Elevator-hotel-service-travel-1024.png'></img>
       <p>  Lift Brand :</p>
       </div>
       <div className='max_speed'>
        <img width='80' height='80' margin-right= '14px'src='https://th.bing.com/th/id/OIP.97fA23tHDKaEMFcJ44bxagHaFj?pid=ImgDet&rs=1'></img>
       <p>  Maximum Speed :</p>
       </div>
       <div className='lift_capacity'>
       <img width='80' height='80' margin-right= '14px' src='https://cdn3.iconfinder.com/data/icons/overpopulation-flat/64/capacity-maximum-ability-limit-elevator-512.png'></img>
      <p>  Lift Capacity : </p>
       </div>
       <div className='power_cons'>
       <img width='80' height='80' margin-right= '14px'src='https://th.bing.com/th/id/R.b05bb369287778345a2d7e03815ce9c0?rik=ryUaEjxCn1n3Qg&riu=http%3a%2f%2fpremierpoolsandspas.com%2fwp-content%2fuploads%2f2015%2f05%2flightning-clip-art-Anonymous_Lightning_Icon.png&ehk=I5LSE01rtzeonuLMT6rclU6wyqYT6whfwexSRZlhx18%3d&risl=&pid=ImgRaw&r=0'></img>
       <p>  Power Consumed :</p>
       </div>
    </div>
  );
}

export default App;
