
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../App";
import { PhonesComponent} from "../components/constants/PhonesComponent"




export const MainLayout = () => {

 const { iphones } = useContext(StoreContext)
 

  return (
    <>
      <header >
        <Header />
      </header>
      <div className="main-cards">
        <main style={{ height: "calc(100vh - 170px)" }}>{<Outlet />}</main>
          <div className="main-cards">
            {
              iphones.map(iphone => {
                return (<PhonesComponent key={iphone.model} iphone={iphone} />)
              })
            }
            
          </div>
      </div>
      
      <footer style={{ borderTop: "2px solid lightgrey" }}>
        <h1>HELLO I AM FOOTER</h1>
      </footer>
    </>
  );
};
