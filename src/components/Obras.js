import { React, useState } from 'react'
import Modal from './Modal';

const propprueba = "Prop prueba"

export default function Obras({obras}) {

const [isShown, setIsShown] = useState(false);

  return (      
<>
 
            {obras.map((obra) =>{

                return(

                    <>
                    <div className="bg-[url('/img/M1.jpg')] border shadow rounded-xl overflow-hidden"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    >                   
                        <div className="h-64 w-64 h-full">
                            <div className="pt-24 h-64 w-64 h-full bg-black opacity-100"> 
                            <p className="text-white text-center">{ obra.title }</p>
                            <Modal artwork ={{ title: obra.title }} onMouseEnter={() => setIsShown(false)} />
                            </div>
                        </div>
                    </div>

                    </>
                )
                                    }
                )}

{/*               <div className="bg-[url('/img/M1.jpg')] border shadow rounded-xl overflow-hidden"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    >
                      
                <div className="h-64 w-64 h-full">

                {isShown &&
                  <div className="pt-24 h-64 w-64 h-full bg-black opacity-100"> 
                    <p className="text-white text-center">Artwork title #1</p>
                    <Modal onMouseEnter={() => setIsShown(false)} />
                  </div>
                 }
                  </div>
              
              </div> */}
</>
        )
}
