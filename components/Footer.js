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

export default function GetInTouch() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="mt-3 mb-3">
          <div className="text-base text-center">
            <p className="text-sm text-gray-500 uppercase">
              Designed and Built by James Plant ©2022
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
