import logo from "../Images/Layer2.png";
import "../Styles/home.css";
import axios from "axios";
import { useEffect } from "react";
const Home = () => {

    useEffect(() => {
        const getData = async () => {
          const res = await axios.get("http://localhost:8888/link")
          console.log(res.data)
        }
        getData()
      }, [])

  return (
    <div className="Boginoo-Home">
        <div className="Header">
            <strong className="Usage">Хэрхэн ажилладаж вэ?</strong>
            <a className="Login" href="/Login">Нэвтрэх</a>
        </div>
        <div className="Body">
            <div className="Big-Logo">
                <img className="Logo" src={logo}></img>
                <div className="Title">Boginoo</div>
            </div>
            <div className="Link">
                <input className="Link_input" placeholder="https://www.web-huudas.mn"></input>
                <button className="Link_button">Богиносгох</button>
            </div>
        </div>
        <div className="Footer">
            <div className="Made">Made with ♥️ by Nest Academy</div>
            <div className="Date">©boginoo.io 2020</div>
        </div>
    </div>
  );
};
export default Home;