
export default function BtnNext({forward}) {

    
  return (
            <button onClick={() => forward()} className="bg-mainBackColor py-3 border-gray-200 border shadow px-10 flex justify-center items-center space-x-2  rounded-2xl text-white ">
                التالي
                <svg width="25" height="25" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path></svg>
            </button>
  )
}
