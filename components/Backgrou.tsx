import Image from 'next/image'
import terra from "@/app/img/terralord.png"

function Backgrou() {
  return (
    <div>
      <div className="relative bg-slate-400 flex items-center justify-center overflow-hidden mt-20 mb-10">
        {/* Background skewed divs */}
        <div className="absolute inset-0 flex">
          <div className="w-1/3 h-full bg-transparent transform  -skew-x-12"></div>
          <div className="w-1/3 h-full bg-slate-900 transform -skew-x-12"></div>
          <div className="w-1/3 h-full bg-transparent transform -skew-x-12"></div>
         
        </div>
        
        {/* Centered text */}
        <div className="relative z-10 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-4">
            {/* Image div */}
            <div className="w-full md:w-1/2">
            <Image src={terra} alt="Djetran" className="w-full h-full object-contain " />
            </div>
            
            {/* Text div */}
            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-3xl font-bold mb-4">Envoyer nous votre message</h2>
              <form className="mb-4">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Votre email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
              </form>
              <button className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition duration-300">
                Call to Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backgrou