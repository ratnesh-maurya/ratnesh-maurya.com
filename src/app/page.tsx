import Link from "next/link";
import { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Ratnesh Maurya",
  description: "Ratnesh Maurya's Portfolio showcasing his skills, projects, education, and experience in software engineering.",
};

export default function Home() {
  return (
    < div className=" max-w-5xl  mx-auto" >

    <div className=" flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-8">
      <div className=" font-sans max-w-2xl ">
        <section>
          <h1 className="title text-2xl md:text-4xl font-merriweather  mb-2">Hey, I am Ratnesh Maurya</h1>
          <h3 className=" text-xl font-semibold  md:text-2xl font-merriweather text-bold mb-4 text-teal-600">Software Engineer <Link href="https://www.linkedin.com/company/initializ/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">@initializ</Link></h3>
          <div>
            <p>
              I am a software engineer and a recent 2024 graduate passionate about
              backend development, cloud-native technologies, and solving real-world
              problems through innovative solutions. I have hands-on experience
              in designing secure systems, creating efficient APIs,
              and building reliable platforms.
            </p>
            <p className="mt-4">
              Currently, I work as a Software Development Engineer at   {' '}
              <Link href="https://www.linkedin.com/company/initializ/"
                target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold">initializ</Link>,
              where I have engineered a secure secret management platform,
              designed Kubernetes Controllers for optimized secret management,
              and streamlined CI/CD pipelines to enhance efficiency. Before this,
              I worked as a Software Developer Intern at   {' '}
              <Link
                href="https://www.linkedin.com/company/emsec/"
                target="_blank" rel="noopener noreferrer"
                  className="text-blue-600   font-semibold
                   hover:underline">EMSEC Pvt. Ltd.</Link>, where
              I developed scalable RESTful APIs and built data
              scraping frameworks to optimize operations.
            </p>
            <p className="mt-4">

            </p>
            <p className="mt-4">
              During my academic and professional journey,
              I have contributed to projects like {' '} <Link
                href="https://github.com/Ratnesh-Team/Rehabify"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold
                 hover:underline">Rehabify</Link>,
              a platform aimed at improving addiction recovery services,
              and {' '} <Link
                href="https://github.com/ratnesh-maurya/Unzip_N_Open"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold
                 hover:underline">Unzip N Open</Link>,
              a CLI tool simplifying file management
              for developers. My technical expertise includes Golang,
              TypeScript, Python, Kubernetes, and cloud technologies,
              enabling me to deliver impactful and efficient solutions.
            </p>


          </div>

        </section>
      </div>

      <div className=" md:ml-8 items-center justify-center ">
        <div className="relative flex w-80 flex-col rounded-xl mt-14 bg-white text-gray-700  border-2 border-gray-200">
          <div className="p-6">
            <h3 className="text-xl font-merriweather font-semibold mb-4"> Recent Projects</h3>
            <div className="divide-y divide-gray-200">
              <div className="flex items-center justify-between pb-3 pt-3">
                <div className="flex items-center gap-x-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="block font-sans text-base font-semibold text-blue-gray-900">
                      <Link href="https://rehabify.ratn.tech/" 
                      title=" Go to Rehabify"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-teal-600">
                        Rehabify
                      </Link>
                    </h6>
                    <p className="text-sm text-gray-600">Addiction Recovery Platform</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pb-3 pt-3">
                <div className="flex items-center gap-x-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="block font-sans text-base font-semibold text-blue-gray-900">
                      <Link href="https://github.com/ratnesh-maurya/Unzip_N_Open" 
                      title="Go to Unzip N Open"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-teal-600">
                        Unzip N Open
                      </Link>
                    </h6>
                    <p className="text-sm text-gray-600">CLI File Management Tool</p>
                  </div>
                </div>
              </div>

            

              <div className="flex items-center justify-between pb-3 pt-3">
                <div className="flex items-center gap-x-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="block font-sans text-base font-semibold text-blue-gray-900">
                      <Link href="https://github.com/initializ/secrets-operator" 
                            title="Go to Secret Operator"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-teal-600">
                        Secret Operator
                      </Link>
                    </h6>
                    <p className="text-sm text-gray-600">Secure Key Management</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pb-3 pt-3">
                <div className="flex items-center gap-x-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="block font-sans text-base font-semibold text-blue-gray-900">
                      <Link href="https://currency.ratn.tech/" 
                          title="Go to Currency Converter"
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-teal-600">
                        Currency Converter
                      </Link>
                    </h6>
                    <p className="text-sm text-gray-600">Real-time Exchange Rates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    

    <div className="container mx-auto px-4 mt-10 mb-10 md:px-8">
      <h2 className="text-2xl md:text-3xl font-merriweather font-semibold mb-6 text-center">Certifications</h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-24">
        <a href="https://www.credly.com/badges/0feb784b-3712-41ad-8666-8e3b01ed17f8" 
           target="_blank" 
           rel="noopener noreferrer"
           className="transition-transform hover:scale-105">
            <Image 
              src="https://images.credly.com/size/220x220/images/6b924fae-3cd7-4233-b012-97413c62c85d/blob" 
              alt="AWS Certified Cloud Practitioner" 
              width={220}
              height={220}
              className="w-20 md:w-[220px]"
            />
        </a>
        <a href="https://www.credly.com/badges/2d49d590-5c98-4e64-915b-e9ca3e50ec62"
           target="_blank"
           rel="noopener noreferrer"
           className="transition-transform hover:scale-105">
          <Image 
            src="https://images.credly.com/size/220x220/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" 
            alt="AWS Solutions Architect Associate" 
            width={220}
            height={220}
            className="w-20 md:w-[220px]"
          />
        </a>
        <a href="https://www.credly.com/badges/af06b77a-d878-48be-85a1-ea37bb893aaf"
           target="_blank"
           rel="noopener noreferrer"
           className="transition-transform hover:scale-105">
         <Image 
           src="https://images.credly.com/size/220x220/images/ee986187-6637-45e9-8184-8382dc117432/blob" 
           alt="AWS Developer Associate" 
           width={220}
           height={220}
           className="w-20 md:w-[220px]"
         />
        </a>
      </div>
    </div>
    </div>
 
  );
}