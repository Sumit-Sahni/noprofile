import  NavbarComp  from "./NavbarComp";
import Introduction from "./Introduction";
import Project from "./Project";

const Home = () => {
  return (
    <section  className="bg-slate-300" >
       <NavbarComp />   
       <Introduction />
       <Project />
    </section>
  )
}

export default Home