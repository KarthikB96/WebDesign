import React from 'react'

import item1 from '../../../../src/images/womenshoe1.jpg';
import item2 from '../../../../src/images/womenshoe2.jpg';
import item3 from '../../../../src/images/womenshoe3.jpg';
import item4 from '../../../../src/images/womenshoe4.jpg';
export default function WomenShoes() {
    return (
        <React.Fragment>
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center" style={{display:'block', float:'left',marginLeft:'90px'}}>
  <img src={item1} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0">Black Heels</h1>
      </div>
      <div className="dtc tr">
        <h2 className="f5 mv0">$100</h2>
        
      </div>
      
    </div>
    <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-green">Add to Cart</button>
    
  </div>
  </article>
  <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center" style={{display:'block', float:'left',marginLeft:'90px'}} >
  <img src={item2} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0">Peach Sandals</h1>
      </div>
      <div className="dtc tr">
        <h2 className="f5 mv0">$140</h2>
      </div>
    </div>
    <div><button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-green">Add to Cart</button></div>
    
  </div>
  </article>
  <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center" style={{display:'block', float:'left',marginLeft:'90px'}}>
  <img src={item3} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0">White Sandals</h1>
      </div>
      <div className="dtc tr">
        <h2 className="f5 mv0">$59</h2>
      </div>
    </div>
    <button className='f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-green'>Add to Cart</button>
  </div>
  </article>
  <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center" style={{display:'block', float:'left',marginLeft:'90px'}} >
  <img src={item4} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0">Black Fancy Heels</h1>
      </div>
      <div className="dtc tr">
        <h2 className="f5 mv0">$60</h2>
      </div>
    </div>
    <button className='f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-green'>Add to Cart</button>
  </div>
  </article>
  

</React.Fragment>
    )
}
