import React from 'react'
import Menjeans1 from '../../../../src/images/menjeans1.jpg';
import Menjeans2 from '../../../../src/images/menjeans2.jpg';
import Menjeans3 from '../../../../src/images/menjeans3.jpg';
import './items.css'
export default function MenJeans() {
    return (
      <React.Fragment>
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center" style={{display:'block', float:'left',marginLeft:'90px'}}>
  <img src={Menjeans1} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0">Jeans1</h1>
      </div>
      <div className="dtc tr">
        <h2 className="f5 mv0">$100</h2>
        
      </div>
      
    </div>
    <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-green">Add to Cart</button>
    
  </div>
  </article>
  <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center" style={{display:'block', float:'left',marginLeft:'90px'}}>
  <img src={Menjeans2} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."  />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0">Jeans2</h1>
      </div>
      <div className="dtc tr">
        <h2 className="f5 mv0">$140</h2>
      </div>
    </div>
    <div><button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-green">Add to Cart</button></div>
    
  </div>
  </article>
  <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center" style={{display:'block', float:'left',marginLeft:'90px'}}>
  <img src={Menjeans3} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0">Jeans3</h1>
      </div>
      <div className="dtc tr">
        <h2 className="f5 mv0">$99</h2>
      </div>
    </div>
    <button className='f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-green'>Add to Cart</button>
  </div>
</article>
</React.Fragment>
    )
}
