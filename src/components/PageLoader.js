import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gsap, CSSPlugin, Expo } from 'gsap';
import Body from './Body';
gsap.registerPlugin(CSSPlugin);

function PageLoader() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const count = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter < 100) {
                    return prevCounter + 1;
                } else {
                    clearInterval(count);
                    return 100;
                }
            });
        }, 25);

        return () => clearInterval(count); // Clear interval on component unmount
    }, []);

    useEffect(() => {
        if (counter === 100) {
            reveal();
        }
    }, [counter]);

    const reveal = () => {
        const tl = gsap.timeline({
            onComplete: () => {
                console.log("completed");
            },
        });
        tl.to('.follow', {
            width: '100%',
            duration: 1.2,
            delay: 0.7,
            ease: Expo.easeInOut,
        })
        .to('.hide', {
            opacity: 0,
            duration: 0.3,
        })
        .to('.hide', {
            display: 'none',
            duration: 0.3,
        })
        .to('.follow', {
            height: '100%',
            duration: 0.7,
            delay: 0.5,
            ease: Expo.easeInOut,
        })
        .to('.content', {
            width: '100%',
            ease: Expo.easeInOut,
            duration: 0.7,
        });
    };

    return (
        <AppContainer>
            <Loading>
                <Follow className="follow"></Follow>
                <ProgressBar
                    className="hide"
                    style={{ width: counter + "%" }}
                ></ProgressBar>
                <Count className="hide">{counter}%</Count>
            </Loading>
            <Content className="content">
                <Body />
            </Content>
        </AppContainer>
    );
}

export default PageLoader;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000;
  position: relative;
  text-align: center;
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const Follow = styled.div`
  position: absolute;
  left: 0;
  width: 0;
  height: 2px;
  background-color: green;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #fff;
`;

const Count = styled.div`
  position: absolute;
  font-size: 130px;
  color: #fff;
  font-weight: 500;
  transform: translateY(-15px);
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #121212;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  color: #fff;
`;
