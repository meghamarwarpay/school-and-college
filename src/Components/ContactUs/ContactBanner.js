// import React from 'react';
// import bgimg from "../../assets/img/SchlBnr.jpg"
// import Image from 'next/image';

// const ContactBanner = () => {
//     return (
//         <div>
//             <div className="z-20 relative overflow-hidden group h-[500px] bg-primary card-hidden">
//                 <Image
//                     src={bgimg}
//                     alt="Contact background"
//                     className="h-full transition-all delay-300 duration-400 ease-in w-full absolute group-hover:scale-105 object-center"
//                 />

//                 <div className="absolute p-8 z-50 gap-4 flex flex-col justify-end bg-opacity-45 h-full w-full bottom-0">
//                     <span className="text-[20px] sm:text-[24px] text-white md:text-[20px] font-canela">
//                         Let&apos;s Connect :- I&apos;m always open to discussing new projects, creative ideas, or collaboration opportunities.
//                     </span>
//                     <p className="group-hover:block text-white text-[14px] hidden">
//                         Whether you have a question, want to work together, or just want to say hello — feel free to reach out! I’m always excited to connect with like-minded professionals, developers, designers, or businesses looking for a reliable partner.
//                     </p>

//                     <a href="contactus.html" className="flex items-center gap-2">
//                         <div className="flex group-hover:bg-secondary justify-center items-center rounded-full bg-primary min-h-10 min-w-10 max-h-10 max-w-10">
//                             <Image
//                                 src="https://images.unsplash.com/photo-1595239244990-b609da3d95f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxkYXRhJTNBaW1hZ2UlMkZibXAlM0JiYXNlNjQlMkNRazMyQkFBQUFBQUFBRFlBQUFBb0FBQUFDQUFBQUFnQUFBQUJBQmdBQUFBQUFNQUFBQUFUQ3dBQUV3c0FBQUFBQUFBQUFBQUFvWnRhbnBaTm9aTTR0S05KeTd0dzBjV0Z1clYlMkZpcEJqcDZSMW41dGtsSTQlMkZvWmxLdkxWNXlNT1R0TFNLaFl0Z3I2Mk1vYUY1aUl0Tmk1RlRxN0NJdnNLa3I3T1dnSVpkdGJPYXBhYUhobzVnaEpKbnBMS1l1Y1N5ckxTZ2ZvVmZ0N1dkcXF1T2s1bDBrcDklMkZyTHFudk1pN3JiYW1nSWRtdDdPWHNLMlBwYWFGckxHV3ZzYTB4YzYlMkZzYm1vaG8xdXRiQ1BzNiUyQk50YkdSd0wlMkJsenRDOHp0TEJ0cnlwaTVKMXRLJTJCTHRhJTJCTXVyV1Z5TVdxMU5TJTJGMGRUQnVMMm9qcFIzfGVufDB8MHx8fDE3MjM0MDU0MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
//                                 alt="Contact Icon"
//                                 className="w-[28px] h-8 rounded-full overflow-hidden"
//                             />
//                         </div>
//                         <h2 className="font-bold text-[16px] text-white">Contact Us</h2>
//                     </a>
//                 </div>

//                 <div className="absolute transition-all duration-400 ease-in bg-gradient-to-b from-transparent to-black min-h-[650px] text-white bottom-0 group-hover:bottom-0 group-hover:min-h-[900px] w-full z-30"></div>
//             </div>
//         </div>
//     );
// };

// export default ContactBanner;
import React from 'react';
import bgimg from "../../assets/img/SchlBnr.jpg"
import Image from 'next/image';

const ContactBanner = () => {
    return (
        <div>
            <div className="z-20 relative overflow-hidden group h-[500px] bg-primary card-hidden">

                {/* Background Image */}
                <Image
                    src={bgimg}
                    alt="Contact background"
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                />

                <div className="absolute p-8 z-50 gap-4 flex flex-col justify-end bg-opacity-45 h-full w-full bottom-0">
                    <span className="text-[20px] text-white">
                        Let&apos;s Connect :- I&apos;m always open to discussing new projects.
                    </span>

                    <a href="#" className="flex items-center gap-2">
                        <div className="flex justify-center items-center rounded-full bg-primary min-h-10 min-w-10">
                            
                            <Image
                                src="https://images.unsplash.com/photo-1595239244990-b609da3d95f2"
                                alt="Contact Icon"
                                width={32}
                                height={32}
                                className="rounded-full"
                            />

                        </div>
                        <h2 className="font-bold text-[16px] text-white">Contact Us</h2>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ContactBanner;