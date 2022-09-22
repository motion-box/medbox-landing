import styled from "styled-components";
import Image from "next/image"
import React from 'react'
import Link from "next/link";


const Styles = {
  Header: styled.header`
    display: flex;  
    justify-content: space-between;
    padding: 24px 32px;
`,
  Header_Nav: styled.nav`
    margin-right: 26px;
`,
  Header_List: styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding-left: 0;
    list-style: none;
`,
  Header_BtnBox: styled.div`
    display: flex;
    align-items: center;
    padding: 2px;
    border: 1px solid rgba(120, 120, 128, 0.1);
    border-radius: 16px;
`,
  Header_LinksBox: styled.div`
    display: flex;
    align-items: center;
`,
  Header_List_item: styled.li`
  :not(:last-child){
    margin-right: 24px;
}
`,
  signUp_link:styled.a``

}


const Home = () => {
  return (
    <>
      {/* <Styles.Box></Styles.Box> */}
      <Styles.Header>
        <Link href="/">
          <a>
            <svg width="183" height="48" viewBox="0 0 183 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="14.4" fill="#007AFF" />
              <path fillRule="evenodd" clipRule="evenodd" d="M34.8495 25.9627C36.2281 24.5343 37 22.6033 37 20.5929C37 18.5825 36.2282 16.6516 34.8495 15.223C33.4616 13.7838 31.5715 12.972 29.597 12.972C27.6224 12.972 25.7322 13.7838 24.3442 15.2232L23.9997 15.5803L23.6551 15.223C20.7604 12.2225 16.0446 12.2225 13.1499 15.223C10.2834 18.1944 10.2834 22.9913 13.1499 25.9627L22.6335 35.7931C23.3554 36.5414 24.5524 36.5677 25.307 35.8516C27.5063 33.7336 29.6101 31.4997 31.7106 29.2692C32.754 28.1613 33.7965 27.0542 34.8495 25.9627ZM30.89 22.7653C30.89 23.244 30.502 23.632 30.0233 23.632H29.1566C28.678 23.632 28.29 23.244 28.29 22.7653V21.682H27.2067C26.728 21.682 26.34 21.294 26.34 20.8154V19.9487C26.34 19.4701 26.728 19.082 27.2067 19.082H28.29L28.29 17.9987C28.29 17.52 28.678 17.132 29.1566 17.132H30.0233C30.502 17.132 30.89 17.52 30.89 17.9987V19.082H31.9733C32.452 19.082 32.84 19.4701 32.84 19.9487V20.8154C32.84 21.294 32.452 21.682 31.9733 21.682H30.89V22.7653Z" fill="white" />
              <path d="M65.6406 33.5H69.3184V20.1562H69.4277L74.7598 33.5H77.3574L82.6758 20.1562H82.7988V33.5H86.4766V13.7715H81.7051L76.0996 27.9492H76.0176L70.4121 13.7715H65.6406V33.5ZM90.1178 33.5H103.188V30.0957H94.2467V25.1328H102.682V21.9062H94.2467V17.1758H103.188V13.7715H90.1178V33.5ZM106.529 33.5H114.062C119.982 33.5 123.468 29.8223 123.468 23.5605V23.5332C123.468 17.2852 119.968 13.7715 114.062 13.7715H106.529V33.5ZM110.658 30.082V17.1758H113.57C117.193 17.1758 119.257 19.4316 119.257 23.5469V23.5742C119.257 27.8398 117.261 30.082 113.57 30.082H110.658ZM126.494 33.5H135.23C139.441 33.5 142.053 31.3398 142.053 27.8809V27.8535C142.053 25.2695 140.07 23.3281 137.322 23.123V23.041C139.496 22.7539 141.137 20.9082 141.137 18.748V18.7207C141.137 15.6855 138.799 13.7715 135.08 13.7715H126.494V33.5ZM134.014 16.834C135.941 16.834 137.076 17.7363 137.076 19.3086V19.3359C137.076 21.0449 135.832 22.0156 133.508 22.0156H130.623V16.834H134.014ZM134 24.8184C136.529 24.8184 137.842 25.7891 137.842 27.5938V27.6211C137.842 29.4531 136.543 30.4238 134.178 30.4238H130.623V24.8184H134ZM153.665 33.8418C159.53 33.8418 163.18 29.918 163.18 23.6426V23.6152C163.18 17.3535 159.516 13.4297 153.665 13.4297C147.827 13.4297 144.149 17.3398 144.149 23.6152V23.6426C144.149 29.918 147.799 33.8418 153.665 33.8418ZM153.665 30.3418C150.424 30.3418 148.36 27.7715 148.36 23.6426V23.6152C148.36 19.4863 150.438 16.9297 153.665 16.9297C156.905 16.9297 158.969 19.5 158.969 23.6152V23.6426C158.969 27.7305 156.946 30.3418 153.665 30.3418ZM163.978 33.5H168.435L172.741 26.582H172.878L177.212 33.5H181.915L175.53 23.6426V23.5879L181.997 13.7715H177.39L173.22 20.8809H173.07L168.872 13.7715H164.019L170.253 23.5195V23.5605L163.978 33.5Z" fill="black" />
            </svg>
          </a>
        </Link>
        <Styles.Header_LinksBox>
          <Styles.Header_Nav>
            <Styles.Header_List>
              <Styles.Header_List_item>
                <Link href="/test"><a>Для клиентa</a></Link>
              </Styles.Header_List_item>
              <Styles.Header_List_item>
                <Link href="/test"><a>Для клиник</a></Link>
              </Styles.Header_List_item>
              <Styles.Header_List_item>
                <Link href="/test"><a>Про нас</a></Link>
              </Styles.Header_List_item>
              <Styles.Header_List_item>
                <Link href="/test"><a>Цены</a></Link>
              </Styles.Header_List_item>
            </Styles.Header_List>
          </Styles.Header_Nav>
          <Styles.Header_BtnBox>
            <Link href="/test"><a className="signUp_link">Вход</a></Link>
            <Link href="/test"><a>Регистрация</a></Link>
          </Styles.Header_BtnBox>
        </Styles.Header_LinksBox>
      </Styles.Header>
    </>
  )
}


export default Home;
