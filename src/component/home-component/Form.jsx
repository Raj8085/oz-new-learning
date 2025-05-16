// // import { Button } from '@/components/ui/button'
// // import { Checkbox } from '@/components/ui/checkbox'
// // import { Input } from '@/components/ui/input'

// // const Form = () => {
// //     const handleChange = () => {}
// //     const handleSubmit = () => {}
// //   return (
   
// //          <div className='w-full h-full relative'>
// //                 <div className='lg:absolute lg:bottom-0 w-full lg:w-[100%] bg-white rounded-lg p-3 sm:p-6 drop-shadow-md'>
// //                     <div>
// //                         <h1 className='text-2xl md:text-3xl tracking-wide'>
// //                             Book a Live Class, For <span   className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 bg-clip-text text-transparent">Free!</span>
// //                         </h1>
// //                         <p className='mt-5 text-gray-700'>Your Topic of Interest <span className='text-red-800'>*</span></p>
// //                     </div>
// //                     <div className='flex justify-center gap-5 sm:justify-between sm:items-center mt-5'>
// //                         {/* Checkboxes for topics */}
// //                         {['Fullstack', 'Internship', 'Live Projects'].map((topic) => (
// //                             <div className='flex items-center gap-2' key={topic}>
// //                                 <Checkbox
// //                                     // id={topic}
// //                                     // name={topic}
// //                                     // // checked={formData.topics.includes(topic)}
// //                                     // onClick={() => handleCheckboxChange(topic)}
// //                                 />
// //                                 <label
// //                                     htmlFor={topic}
// //                                     className="text-xs sm:text-base text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// //                                 >
// //                                     {topic}
// //                                 </label>
// //                             </div>
// //                         ))}
// //                     </div>
// //                     <hr className='mt-5 mb-5' />
// //                     <div>
// //                         <div>
// //                             <Input
// //                                 placeholder="Full Name"
// //                                 type="text"
// //                                 name="fullName"
// //                                 // value={formData.fullName}
// //                                 onChange={handleChange}
// //                             />
// //                         </div>
// //                         <div className='mt-5'>
// //                             <Input
// //                                 placeholder="Email Address"
// //                                 type="email"
// //                                 name="email"
// //                                 // value={formData.email}
// //                                 onChange={handleChange}
// //                             />
// //                         </div>
// //                         <div className='mt-5'>
// //                             <Input
// //                                 placeholder="Enter your number"
// //                                 type="tel"
// //                                 name="phone"
// //                                 // value={formData.phone}
// //                                 onChange={handleChange}
// //                             />
// //                         </div>
// //                     </div>
// //                     <div className='mt-7 flex flex-wrap-reverse gap-3 items-center'>
// //                         <div>
// //                             <Button className='bg-black' size="lg" onClick={handleSubmit}>Continue Booking Live Class</Button>
// //                         </div>
// //                         <div className='flex items-center'>
// //                             {/* <FontAwesomeIcon icon={faUserGroup} className='text-xl' /> */}
// //                             <span className='ml-2'>Limited seats left</span>
// //                         </div>
// //                     </div>
// //                     <div className='mt-5 flex items-center gap-1'>
// //                         {/* <div className='text-sm text-gray-700'>Already have an account?</div>
// //                         <div className='text-blue-700 cursor-pointer'><SignUpSidebar /></div> */}
// //                     </div>
// //                     {/* <div className='mt-2'>
// //                         <p className='text-xs text-gray-700'>
// //                             By creating an account I have read and agree to Scaler's
// //                             <span className='text-blue-700'> Terms</span> and
// //                             <span className='text-blue-700'> Privacy Policy</span>
// //                         </p>
// //                     </div> */}
// //                 </div>
// //             </div>
// //   )
// // }

// // export default Form



// import { useState, useEffect } from 'react'
// import { Button } from '@/components/ui/button'
// import { Checkbox } from '@/components/ui/checkbox'
// import { Input } from '@/components/ui/input'
// import { AlertCircle } from 'lucide-react'

// const Form = () => {
//     // Form state
//     const [formData, setFormData] = useState({
//         topics: [],
//         fullName: '',
//         email: '',
//         phone: ''
//     })

//     // Validation state
//     const [errors, setErrors] = useState({
//         topics: '',
//         fullName: '',
//         email: '',
//         phone: ''
//     })

//     // Submission state
//     const [isSubmitted, setIsSubmitted] = useState(false)

//     // Load data from localStorage on component mount
//     useEffect(() => {
//         const savedFormData = localStorage.getItem('bookingFormData')
//         if (savedFormData) {
//             try {
//                 setFormData(JSON.parse(savedFormData))
//             } catch (error) {
//                 console.error('Error parsing stored form data:', error)
//             }
//         }
//     }, [])

//     // Handle input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }))
        
//         // Clear error when field is edited
//         if (errors[name]) {
//             setErrors(prev => ({
//                 ...prev,
//                 [name]: ''
//             }))
//         }
//     }

//     // Handle checkbox changes
//     const handleCheckboxChange = (topic) => {
//         setFormData(prev => {
//             const updatedTopics = prev.topics.includes(topic)
//                 ? prev.topics.filter(t => t !== topic)
//                 : [...prev.topics, topic]
            
//             return {
//                 ...prev,
//                 topics: updatedTopics
//             }
//         })

//         // Clear topic error if at least one is selected
//         if (errors.topics && formData.topics.length > 0) {
//             setErrors(prev => ({
//                 ...prev,
//                 topics: ''
//             }))
//         }
//     }

//     // Validate form
//     const validateForm = () => {
//         const newErrors = {}
//         let isValid = true

//         // Validate topics
//         if (formData.topics.length === 0) {
//             newErrors.topics = 'Please select at least one topic'
//             isValid = false
//         }

//         // Validate name
//         if (!formData.fullName.trim()) {
//             newErrors.fullName = 'Full name is required'
//             isValid = false
//         } else if (formData.fullName.trim().length < 3) {
//             newErrors.fullName = 'Name must be at least 3 characters'
//             isValid = false
//         }

//         // Validate email
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//         if (!formData.email.trim()) {
//             newErrors.email = 'Email is required'
//             isValid = false
//         } else if (!emailRegex.test(formData.email)) {
//             newErrors.email = 'Please enter a valid email'
//             isValid = false
//         }

//         // Validate phone
//         const phoneRegex = /^\d{10}$/
//         if (!formData.phone.trim()) {
//             newErrors.phone = 'Phone number is required'
//             isValid = false
//         } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
//             newErrors.phone = 'Please enter a valid 10-digit phone number'
//             isValid = false
//         }

//         setErrors(newErrors)
//         return isValid
//     }

//     // Handle form submission
//     const handleSubmit = () => {
//         if (validateForm()) {
//             // Save to localStorage
//             localStorage.setItem('bookingFormData', JSON.stringify(formData))
            
//             // Show success message
//             setIsSubmitted(true)
            
//             // Reset form after 3 seconds
//             setTimeout(() => {
//                 setIsSubmitted(false)
//             }, 3000)
            
//             console.log('Form submitted successfully:', formData)
//         } else {
//             console.log('Form has errors')
//         }
//     }

//     // Error message component
//     const ErrorMessage = ({ message }) => (
//         message ? (
//             <div className="flex items-center mt-1 text-xs text-red-600">
//                 <AlertCircle className="h-3 w-3 mr-1" />
//                 <span>{message}</span>
//             </div>
//         ) : null
//     )

//     return (
//         <div className="w-full h-full relative">
//             <div className="lg:absolute lg:bottom-0 w-full lg:w-full bg-white rounded-lg p-3 sm:p-6 drop-shadow-md">
//                 {isSubmitted && (
//                     <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
//                         Form submitted successfully! Data has been saved.
//                     </div>
//                 )}

//                 <div>
//                     <h1 className="text-2xl md:text-3xl tracking-wide">
//                         Book a Live Class, For <span className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 bg-clip-text text-transparent">Free!</span>
//                     </h1>
//                     <p className="mt-5 text-gray-700">Your Topic of Interest <span className="text-red-800">*</span></p>
//                 </div>

//                 <div className="flex justify-center gap-5 sm:justify-between sm:items-center mt-5">
//                     {/* Checkboxes for topics */}
//                     {['Fullstack', 'Internship', 'Live Projects'].map((topic) => (
//                         <div className="flex items-center gap-2" key={topic}>
//                             <Checkbox
//                                 id={topic}
//                                 checked={formData.topics.includes(topic)}
//                                 onCheckedChange={() => handleCheckboxChange(topic)}
//                             />
//                             <label
//                                 htmlFor={topic}
//                                 className="text-xs sm:text-base text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                             >
//                                 {topic}
//                             </label>
//                         </div>
//                     ))}
//                 </div>
//                 <ErrorMessage message={errors.topics} />

//                 <hr className="mt-5 mb-5" />

//                 <div>
//                     <div>
//                         <Input
//                             placeholder="Full Name"
//                             type="text"
//                             name="fullName"
//                             value={formData.fullName}
//                             onChange={handleChange}
//                             className={errors.fullName ? "border-red-500" : ""}
//                         />
//                         <ErrorMessage message={errors.fullName} />
//                     </div>
                    
//                     <div className="mt-5">
//                         <Input
//                             placeholder="Email Address"
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className={errors.email ? "border-red-500" : ""}
//                         />
//                         <ErrorMessage message={errors.email} />
//                     </div>
                    
//                     <div className="mt-5">
//                         <Input
//                             placeholder="Enter your number"
//                             type="tel"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             className={errors.phone ? "border-red-500" : ""}
//                         />
//                         <ErrorMessage message={errors.phone} />
//                     </div>
//                 </div>

//                 <div className="mt-7 flex flex-wrap-reverse gap-3 items-center">
//                     <div>
//                         <Button className="bg-black" size="lg" onClick={handleSubmit}>
//                             Continue Booking Live Class
//                         </Button>
//                     </div>
//                     <div className="flex items-center">
//                         <span className="ml-2">Limited seats left</span>
//                     </div>
//                 </div>

//                 <div className="mt-5 flex items-center gap-1">
//                     {/* Additional content can be added here if needed */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Form


import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { AlertCircle, CheckCircle, Info } from 'lucide-react'

const Form = () => {
    // Form state
    const [formData, setFormData] = useState({
        topics: [],
        fullName: '',
        email: '',
        phone: ''
    })

    // Validation state
    const [errors, setErrors] = useState({
        topics: '',
        fullName: '',
        email: '',
        phone: ''
    })

    // Submission states
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [alreadyBooked, setAlreadyBooked] = useState(false)
    
    // Check if user has already booked
    useEffect(() => {
        const bookingHistory = localStorage.getItem('bookingHistory')
        if (bookingHistory) {
            try {
                const history = JSON.parse(bookingHistory)
                setAlreadyBooked(history.hasBooked || false)
            } catch (error) {
                console.error('Error parsing booking history:', error)
            }
        }
    }, [])

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        // Clear error when field is edited
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    // Handle checkbox changes
    const handleCheckboxChange = (topic) => {
        setFormData(prev => {
            const updatedTopics = prev.topics.includes(topic)
                ? prev.topics.filter(t => t !== topic)
                : [...prev.topics, topic]
            
            return {
                ...prev,
                topics: updatedTopics
            }
        })

        // Clear topic error if at least one is selected
        if (errors.topics && formData.topics.length > 0) {
            setErrors(prev => ({
                ...prev,
                topics: ''
            }))
        }
    }

    // Validate form
    const validateForm = () => {
        const newErrors = {}
        let isValid = true

        // Validate topics
        if (formData.topics.length === 0) {
            newErrors.topics = 'Please select at least one topic'
            isValid = false
        }

        // Validate name
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required'
            isValid = false
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = 'Name must be at least 3 characters'
            isValid = false
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
            isValid = false
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
            isValid = false
        }

        // Validate phone
        const phoneRegex = /^\d{10}$/
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required'
            isValid = false
        } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }


    const handleSubmit = async () => {
        if (validateForm()) {
            const bookingData = {
                topics: formData.topics.join(', '), // SheetDB does not support arrays directly
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                bookingDate: new Date().toISOString()
            }
    
            try {
                // Send form data to SheetDB
                const response = await fetch("https://sheetdb.io/api/v1/ghge1os0krzno", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ data: bookingData }) // SheetDB expects this structure
                })
    
                if (!response.ok) {
                    throw new Error("Failed to submit to SheetDB")
                }
    
                // Save locally to prevent resubmission
                localStorage.setItem('bookingFormData', JSON.stringify(bookingData))
                localStorage.setItem('bookingHistory', JSON.stringify({
                    hasBooked: true,
                    email: formData.email,
                    lastBookingDate: new Date().toISOString()
                }))
    
                // Show success message
                setIsSubmitted(true)
                setAlreadyBooked(true)
    
                // Clear form
                setFormData({
                    topics: [],
                    fullName: '',
                    email: '',
                    phone: ''
                })
    
                // Hide success after delay
                setTimeout(() => {
                    setIsSubmitted(false)
                }, 5000)
    
            } catch (err) {
                console.error("Error submitting form:", err)
                alert("Something went wrong. Please try again later.")
            }
        } else {
            console.log("Validation failed")
        }
    }
    

    // Handle form submission
    // const handleSubmit = () => {
    //     if (validateForm()) {
    //         // Create booking record with timestamp
    //         const bookingData = {
    //             ...formData,
    //             bookingDate: new Date().toISOString()
    //         }
            
    //         // Save to localStorage
    //         localStorage.setItem('bookingFormData', JSON.stringify(bookingData))
            
    //         // Update booking history
    //         localStorage.setItem('bookingHistory', JSON.stringify({
    //             hasBooked: true,
    //             email: formData.email,
    //             lastBookingDate: new Date().toISOString()
    //         }))
            
    //         // Show success message
    //         setIsSubmitted(true)
    //         setAlreadyBooked(true)
            
    //         // Reset form fields
    //         setFormData({
    //             topics: [],
    //             fullName: '',
    //             email: '',
    //             phone: ''
    //         })
            
    //         console.log('Form submitted successfully:', bookingData)
            
    //         // Hide success message after 5 seconds
    //         setTimeout(() => {
    //             setIsSubmitted(false)
    //         }, 5000)
    //     } else {
    //         console.log('Form has errors')
    //     }
    // }

    // Error message component
    const ErrorMessage = ({ message }) => (
        message ? (
            <div className="flex items-center mt-1 text-xs text-red-600">
                <AlertCircle className="h-3 w-3 mr-1" />
                <span>{message}</span>
            </div>
        ) : null
    )

    return (
        <div className="w-full h-full relative">
            <div className="lg:absolute lg:bottom-0 w-full lg:w-full bg-white rounded-lg p-3 sm:p-6 drop-shadow-md">
                {isSubmitted && (
                    <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Booking successful! Your class has been reserved.</span>
                    </div>
                )}
                
                {alreadyBooked && !isSubmitted && (
                    <div className="mb-4 p-3 bg-blue-100 text-blue-800 rounded-md flex items-center">
                        <Info className="h-5 w-5 mr-2" />
                        <span>You've already booked a class! We'll contact you with further details.</span>
                    </div>
                )}

                <div>
                    <h1 className="text-2xl md:text-3xl tracking-wide">
                        Book a Live Class, For <span className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 bg-clip-text text-transparent">Free!</span>
                    </h1>
                    <p className="mt-5 text-gray-700">Your Topic of Interest <span className="text-red-800">*</span></p>
                </div>

                <div className="flex justify-center gap-5 sm:justify-between sm:items-center mt-5">
                    {/* Checkboxes for topics */}
                    {['Fullstack', 'Internship', 'Live Projects'].map((topic) => (
                        <div className="flex items-center gap-2" key={topic}>
                            <Checkbox
                                id={topic}
                                checked={formData.topics.includes(topic)}
                                onCheckedChange={() => handleCheckboxChange(topic)}
                                disabled={alreadyBooked && !isSubmitted}
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
                <ErrorMessage message={errors.topics} />

                <hr className="mt-5 mb-5" />

                <div>
                    <div>
                        <Input
                            placeholder="Full Name"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={errors.fullName ? "border-red-500" : ""}
                            disabled={alreadyBooked && !isSubmitted}
                        />
                        <ErrorMessage message={errors.fullName} />
                    </div>
                    
                    <div className="mt-5">
                        <Input
                            placeholder="Email Address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "border-red-500" : ""}
                            disabled={alreadyBooked && !isSubmitted}
                        />
                        <ErrorMessage message={errors.email} />
                    </div>
                    
                    <div className="mt-5">
                        <Input
                            placeholder="Enter your number"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? "border-red-500" : ""}
                            disabled={alreadyBooked && !isSubmitted}
                        />
                        <ErrorMessage message={errors.phone} />
                    </div>
                </div>

                <div className="mt-7 flex flex-wrap-reverse gap-3 items-center">
                    <div>
                        {alreadyBooked && !isSubmitted ? (
                            <Button className="bg-gray-300 text-gray-700 hover:bg-gray-300" size="lg" disabled>
                                Already Booked
                            </Button>
                        ) : (
                            <Button className="bg-black" size="lg" onClick={handleSubmit}>
                                Continue Booking Live Class
                            </Button>
                        )}
                    </div>
                    <div className="flex items-center">
                        <span className="ml-2 text-orange-600 font-medium">Limited seats left</span>
                    </div>
                </div>

                <div className="mt-5">
                    <p className="text-xs text-gray-700">
                        By booking a class, you agree to our <span className="text-blue-700 cursor-pointer">Terms</span> and
                        <span className="text-blue-700 cursor-pointer"> Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Form