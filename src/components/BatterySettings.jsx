import './BatterySettings.css';



function BatterySettings(){
    return (
     <div className="btr_set">
    <p className='bs'> <b>  Battery Setting</b> </p>
    <div className='rectangle'>
    <p className='bat_avai'>Battery Available <span style={{color:"green", float:"right"}}>90% Available</span> </p> 
    <p className='h_line'></p>
    <p>Your Battery Level :</p>
    <div className='b-full'><p className='b_clr'></p></div>
    {/* <p>Your Battery Drained Level :</p>
    <p className='bd_clr'></p> */}
     </div> 
     </div>
    );
}

export default BatterySettings;