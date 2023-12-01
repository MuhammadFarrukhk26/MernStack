import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import { Logo } from '../components';
const Landing = () => {
  return (
    <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
            {/* Info */}
            <div className='info'>
                <h1>Job <span>Tracking</span> App</h1>
                <br/>
                <p>I'm baby pabst butcher 90's skateboard. Sustainable polaroid irony meh cred.
                     Taiyaki art party leggings aesthetic slow-carb. 
                     Tote bag ramps bitters, thundercats air plant ascot shoreditch slow-carb raw denim. </p>
                     <br/>
                     <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={main} alt="Job hunt" className='img main-img' />
        </div>
    </Wrapper>
  )
}
// const Wrapper = styled.main`
// nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
// }
// .page {
//     min-height: calc(100vh - var(--nav-height));
//     display: grid;
//     align-items: center;
//     margin-top: -3rem;
// }
// h1{
//     font-weight: 700;
//     span{
//         color: var(--primary-500);
//     }
// }
// p {
//     color: var(--grey-600);
// }
// .main-img {
//     display: none;
// }
// @media (min-width: 992px) {
//     .page {
//         grid-template-columns: 1fr 1fr;
//         column-gap: 3rem;
//     }
//     .main-img {
//         display: block;
//     }
// }
// `
export default Landing
