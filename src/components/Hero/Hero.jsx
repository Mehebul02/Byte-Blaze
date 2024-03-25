const Hero =()=>{
    return(
        <div className="hero -mt-14">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
            <p className="py-6">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
            {/* button 1 */}
            <a href="#_" class=" relative inline-flex items-center justify-center px-6 py-3 text-lg mr-7 font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
      <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out  bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
      <span class="absolute inset-0 w-full h-full border  border-purple-600 bg-white rounded-md "></span>
      <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 border-2  bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
      <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100  group-hover:text-white">Read Blogs</span>
      </a>
      {/* button 2 */}
            <a href="#_" class=" relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
      <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out  bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
      <span class="absolute inset-0 w-full h-full border  border-purple-600 bg-white rounded-md "></span>
      <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 border-2  bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
      <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100  group-hover:text-white"><button>Bookmarks</button></span>
      </a>
          </div>
        </div>
      </div>
    )
}
export default Hero;