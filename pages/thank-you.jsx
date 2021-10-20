import Page from "../components/Page";
import Tick from "../components/Tick";

export default function Thank() {
  return (
    <Page>
      <div className="thank" style={{paddingTop:'15vh',textAlign:'center', display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center',width:'100%' }}>
        <Tick on full/>
        <h1 style={{ fontSize: "5rem",marginTop:'20px' }}>Thank You !</h1>
        <h3 style={{ fontSize: "3rem",fontWeight:'300' }}>We will reach out to you soon.</h3>
      </div>
    </Page>
  );
}
