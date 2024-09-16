import React from 'react'
import heroImg from '../../assets/images/hero.svg'
import CountUp from 'react-countup'

function Hero() {
    return (
        <section className='pt-0' id='about'>
            <div className="myContainer pt-14">
                <div className="flex sm:flex-col md:flex-row items-center justify-center">
                    {/* hero left content */}
                    <div className="w-full md:basis-1/2">
                        <h5 data-aos='fade-right' data-aos-duration='1500' className=" text-headingColor font-semibold text-base"> Hello welcome</h5>
                        <h1 data-aos='fade-up' data-aos-duration='1500'
                         className="text-headingColor font-extrabold text-3xl sm:text-4xl leading-9 sm:leading-10 mt-5"> I'm Azizul Haque <br />Software Developer</h1>
                        </div>
                      
                    {/* hero left end */}
                </div>

            </div>

        </section>
    )
}

export default Hero