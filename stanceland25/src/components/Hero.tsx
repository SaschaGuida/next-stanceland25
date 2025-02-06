import { Container } from "@/components/Container";

export const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/img/SL.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
{/*           <button
            className="px-6 py-3 text-lg font-semibold text-white bg-[#ED4821] rounded-lg hover:bg-[#d33d1b] transition duration-300"
          >
            Scopri di più
          </button> */}
        </div>
      </div>
{/*       <Container className="flex flex-wrap mb-20">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Free Landing Page Template for startups
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nextly is a free landing page & marketing website
              template for startups and indie projects. It’s built with
              Next.js & TailwindCSS. And it’s completely open-source.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#ED4821] rounded-md transition duration-300 hover:bg-[#d33d1b]"
              >
                Download for Free
              </a>
              <a
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <span> View on Github</span>
              </a>
            </div>
          </div>
        </div>
      </Container> */}
    </>
  );
}
