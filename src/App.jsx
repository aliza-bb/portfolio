import './index.css';

function App() {
  return (
    <div style={{ display: "flex", flexDirection:"column", backgroundColor: "whitesmoke"}}>
      <div style={{  display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px"}}>
          <h1 style={{marginTop:"40px", marginLeft:"100px",}}>JOE.</h1>
          <nav style={{display:"flex", gap:"20px", marginRight:"300px"}}>
          <a className="home" href="Teaching/Speaking.html">Home</a>
          <a className="shop" href="WebDesign.html">Shop</a>
          <a className="categories" href="Animation.html">Categories</a>
          <a className="about" href="Blog.html">About</a>
          <a className="contact" href="Contact.html">Contact</a>
          </nav>
      <button style={{ marginRight:"50px", marginTop:"40px", color:"white",backgroundColor: "purple", borderRadius:"10px", width:"120px",
           height:"40px"}}>Let's Talk</button>
 </div>

 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <main style={{ maxWidth: "600px" }}>
          <section>
            <h1 style={{ marginLeft:"100px", fontSize: "50px", marginBottom: "10px" }}>Hi, I'm Joe Greyson</h1>
            <h2 style={{  marginLeft:"100px", color: "purple", marginBottom: "20px" }}>Front-End Developer</h2>
          </section>
          
          <article>
<p style={{ marginLeft:"100px",  marginBottom: "30px" }}>
Lorem ipsum dolor sit amet. Welcome to the homepage. Consectetur adipiscing elit.
Inventore et officiis suscipit assumenda libero tuetur expedita eveniet, quaerat 
quasi.
            </p>
          </article>


          <div style={{  marginLeft:"100px", display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
            <button style={{ color: "white", backgroundColor: "purple", borderRadius: "10px", width: "120px", height: "40px", border: "none"}}>
              Hire Me
            </button>
            <button style={{ color: "purple", backgroundColor: "transparent", border: "2px solid purple", borderRadius: "10px", width: "120px", height: "40px" }}>
              See Projects
            </button>
             </div>
        <div style={{ display: "flex", alignItems: "start", justifyContent: "start",marginLeft:"100px", }}> 
  <button style={{ color: "white", backgroundColor: "purple", border: "none", borderRadius: "50%", width: "35px", height: "35px", marginTop:"100px", marginLeft:"20px", marginRight:"20px"}}>ln</button> 
  <button style={{ color: "white", backgroundColor: "purple", border: "none", borderRadius: "50%", width: "35px", height: "35px", marginTop:"100px", marginLeft:"20px", marginRight:"20px" }}>f</button> 
  <img src="purpleTwitter.png" alt="Twitter" style={{ width: "30px", height: "30px", marginTop:"100px", marginLeft:"20px", marginRight:"20px", objectFit:"contain"}} /> 
</div>

        </main>

        
        <div style={{ marginLeft: "40px" }}>
          <img src="bn.jpg" alt="Joe Greyson" style={{ maxWidth: "400px", borderRadius: "10px",  marginRight:"100px",}} />
        </div>
      </div>

    </div>
  );
}

export default App;
