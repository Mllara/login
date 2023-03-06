import styled from "styled-components";

export const Container = styled.main`
    position: absolute;
    width: 1920px;
    height: 1080px;
    left: 0px;
    top: 0px;

    background: linear-gradient(180deg, rgba(4, 115, 182, 0.67) 0%, rgba(66, 191, 248, 0.67) 23.44%, rgba(154, 211, 239, 0.67) 61.46%, rgba(170, 231, 255, 0.67) 82.29%, rgba(208, 233, 242, 0.67) 100%);

`;

export const Content = styled.div`
    width: 600px;
    height: 600px;
    background-color: #f0f5fa;
`;

export const Column = styled.div`
    flex: 1;
`
export const Title = styled.h2`
    position: absolute;
    width: 214px;
    height: 64px;
    left: 395px;
    top: 256px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 189.5%;

    color: #000000;    
`;
export const SubTitle = styled.h2`
    position: absolute;
    width: 463.99px;
    height: 27.16px;
    left: 269px;
    top: 321.81px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 189.5%;
    /* or 28px */

    text-align: center;

    color: #666666;
    
`;

export const Login = styled.p`
    position: absolute;
    left: 16.53%;
    right: 76.26%;
    top: 36.28%;
    bottom: 58.31%;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 175.4%;
    /* or 49px */

    letter-spacing: -0.3px;

    color: #4F4F4F;
`;

export const LoginPosition = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 50%;
    bottom: 0%;

    background: #FFFFFF;
    border-radius: 9px;    
`

export const Password = styled.p`
    position: absolute;
    width: 116.7px;
    height: 58.5px;
    left: 317.33px;
    top: 547.4px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 175.4%;
    /* or 49px */

    letter-spacing: -0.3px;

    color: #4F4F4F;
`;

export const PasswordPosition = styled.div`
    position: absolute;
    width: 368.4px;
    height: 58.5px;
    left: 317.33px;
    top: 604.9px;

    background: #FFFFFF;
    border-radius: 9px;
`
export const RememberMe = styled.p`
    position: absolute;
    width: 122.44px;
    height: 27.16px;
    left: 333.66px;
    top: 713.53px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 189.5%;
    /* or 34px */

    text-align: center;

    color: #666666;
`;
export const ForgotPassword = styled.p`
    position: absolute;
    width: 183px;
    height: 28px;
    left: 503px;
    top: 713px;

    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 189.5%;
    /* or 34px */

    text-align: center;

    color: #666666;
`;
export const BuildAccount = styled.p`
    position: absolute;
    width: 183px;
    height: 28px;
    left: 503px;
    top: 713px;

    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 189.5%;
    /* or 34px */

    text-align: center;

    color: #666666;
`;

export const Img =  styled.img`
    position: absolute;
    left: 41.77%;
    right: 3.85%;
    top: 87.31%;
    bottom: -42.04%;

    background: radial-gradient(358.5% 389.33% at 105.66% -92.18%, rgba(0, 117, 209, 0.64) 16.67%, rgba(89, 255, 225, 0) 51.56%, rgba(22, 22, 22, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    filter: blur(10px);
    transform: matrix(1, 0, 0, -1, 0, 0);
`

export const Portal = styled.h2`
    position: absolute;
    width: 355.51px;
    height: 95.06px;
    left: 1262.49px;
    top: 256px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 189.5%;
    /* or 91px */


    background: linear-gradient(180deg, rgba(0, 8, 20, 0.968504) 0%, #006D9F 33.85%, rgba(7, 122, 175, 0.968504) 48.44%, rgba(0, 0, 0, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

`
/*export const Line = ´
    position: absolute;
    width: 620px;
    height: 0px;
    left: 960px;
    top: 272px;

    border: 1px solid #0075D1;
    transform: rotate(90deg);
´