import React from 'react'

const Jumbotron = () => {
  return (
    <div>
        <div className="jumbotron">
        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://th.bing.com/th/id/R.4e3c00ab7276c8aa03470c5aa4baf2de?rik=oaZt2JE75thn6A&riu=http%3a%2f%2fwww.disneytouristblog.com%2fwp-content%2fuploads%2f2012%2f01%2fDSC_7332-as-Smart-Object-1-copy-1024x712.jpg&ehk=EMBzZvN5COCs8NkqBv86RHz8L1PrIsqUZgsOm0z0N%2bQ%3d&risl=&pid=ImgRaw&r=0", height: 350 }}
        
        // style={{ backgroundImage: "url('bg1.png", height: 400 }}

      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
                <h1 className="display-4">Hello, everyone!</h1>
                <p className="lead">According to the new RBI guidelines, we have to tokenize our credit/debit cards as soon as possible. Token Hub helps you to make the process user friendly and hassle free!</p>
                {/* <p>Please find the FAQs regarding the tokenization of Card On File (CoF)</p>
                <p className="lead">
                <a className="btn btn-success btn-lg" href="https://www.rbi.org.in/commonman/English/scripts/FAQs.aspx?Id=2917" role="button">FAQs by RBI</a>
                </p> */}
            </div>
        </div>
    </div>        
  <hr className="my-6" />
  
 </div>
</div>
    </div>
  )
}

export default Jumbotron

