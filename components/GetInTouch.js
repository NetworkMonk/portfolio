/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Mail from './icons/Mail'
import LinkedIn from './icons/LinkedIn'
import GitHub from './icons/GitHub'
import Instagram from './icons/Instagram'

export default function GetInTouch() {
  return (
    <div className="overflow-hidden bg-white" id="get-in-touch">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl fira-mono">
              &gt; Get In Touch
            </h3>
          </div>
        </div>
        <div className="mt-8 mb-8">
          <div className="text-base">
            <p className="text-lg text-gray-500">
              Feel free to get in touch with me to discuss anything at all!
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Mail />
          <LinkedIn />
          <GitHub />
          <Instagram />
        </div>
      </div>
    </div>
  )
}
