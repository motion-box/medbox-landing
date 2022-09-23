import styled from "styled-components";

const Container = styled.header`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    height: 96px;
    padding: 0 32px;
    z-index: 10;
    .header_logo {
        height: 48px;
    }


    .nav_cont {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
    }

    .header__list{
        display: grid;
        grid-auto-flow: column;
        align-items:center;
        margin: 0 26px 0 0;
        padding-left: 0;
        list-style: none;
    }

    .header__nav-item:not(:last-child){
        margin-right: 24px;
    }

    .header__nav-link--active{
        color: #000000;
    }

    .auth_cont {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
    }

    .header__sign-in{
        margin-right: 18px;
        padding: 8px 16px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.38px;
        color: #000000;
        background: #FFFFFF;
        border-radius: 14px;
    }

    .header_reg-link{
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.38px;
        color: rgba(60, 60, 67, 0.6);
    }
`;

export default Container;