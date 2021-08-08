import React from 'react';
import Header from '../../Components/Header';
import './Home.css';
import College from '../../Assets/Walking.mp4';
function Home({ setloginModalVisible, loginModalVisible }) {
    return (
        <div>
            <Header
                setloginModalVisible={setloginModalVisible}
                loginModalVisible={loginModalVisible}
            />

            <div className="home">
                <video
                    className="home__vid"
                    src={College}
                ></video>
                <input
                    className="home__search"
                    placeholder="Search college, major, or question "
                    type="text"
                ></input>
            </div>
        </div>
    );
}

export default Home;
