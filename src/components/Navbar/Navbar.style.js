import styled from 'styled-components'

export const Nav = styled.nav `
width: 100%;
height: 70px;
line-height: 70px;
padding: 0 100px;
box-shadow: 0 1px 3px rgba(0, 0, 0,.1);
padding: 0 103px;
display: flex;
z-index: 9999;

positiob: fixed;
top: 0;
background: #fff;
opacity: 70%;
`
export const left = styled.ul `
width: 50%;
text-align: left;

& a{
  font-weight: 700;
  color: var(--mainColor);
  font-size: 25px;
}
`