import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React from 'react'

const Form = () => {
    const handleChange = () => {}
    const handleSubmit = () => {}
  return (
   
         <div className='w-full h-full relative'>
                <div className='lg:absolute lg:bottom-0 w-full lg:w-[100%] bg-white rounded-lg p-3 sm:p-6 drop-shadow-md'>
                    <div>
                        <h1 className='text-2xl md:text-3xl tracking-wide'>
                            Book a Live Class, For <span className='font-bold text-3xl text-blue-600'>Free!</span>
                        </h1>
                        <p className='mt-5 text-gray-700'>Your Topic of Interest <span className='text-red-800'>*</span></p>
                    </div>
                    <div className='flex justify-center gap-5 sm:justify-between sm:items-center mt-5'>
                        {/* Checkboxes for topics */}
                        {['Fullstack Java', 'Internship', 'Live Projects'].map((topic) => (
                            <div className='flex items-center gap-2' key={topic}>
                                <Checkbox
                                    // id={topic}
                                    // name={topic}
                                    // // checked={formData.topics.includes(topic)}
                                    // onClick={() => handleCheckboxChange(topic)}
                                />
                                <label
                                    htmlFor={topic}
                                    className="text-xs sm:text-base text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {topic}
                                </label>
                            </div>
                        ))}
                    </div>
                    <hr className='mt-5 mb-5' />
                    <div>
                        <div>
                            <Input
                                placeholder="Full Name"
                                type="text"
                                name="fullName"
                                // value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mt-5'>
                            <Input
                                placeholder="Email Address"
                                type="email"
                                name="email"
                                // value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mt-5'>
                            <Input
                                placeholder="Enter your number"
                                type="tel"
                                name="phone"
                                // value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='mt-7 flex flex-wrap-reverse gap-3 items-center'>
                        <div>
                            <Button className='bg-black' size="lg" onClick={handleSubmit}>Continue Booking Live Class</Button>
                        </div>
                        <div className='flex items-center'>
                            {/* <FontAwesomeIcon icon={faUserGroup} className='text-xl' /> */}
                            <span className='ml-2'>Limited seats left</span>
                        </div>
                    </div>
                    <div className='mt-5 flex items-center gap-1'>
                        {/* <div className='text-sm text-gray-700'>Already have an account?</div>
                        <div className='text-blue-700 cursor-pointer'><SignUpSidebar /></div> */}
                    </div>
                    {/* <div className='mt-2'>
                        <p className='text-xs text-gray-700'>
                            By creating an account I have read and agree to Scaler's
                            <span className='text-blue-700'> Terms</span> and
                            <span className='text-blue-700'> Privacy Policy</span>
                        </p>
                    </div> */}
                </div>
            </div>
  )
}

export default Form