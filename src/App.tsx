import React from 'react';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-48">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
            <div className="text-indigo-500 font-bold text-7xl">
                404
            </div>
            <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                FooDelivery
            </div>
            <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
              We're still building the site, so you can check back later. Try visit our Github <a href='https://github.com/cky008/fd-frontend'target="_blank" className="text-blue-600" rel="noreferrer">
              front-end </a> and <a href='https://github.com/cky008/fd-backend'target="_blank" className="text-blue-600" rel="noreferrer">
              back-end </a> repos.  <br></br>
            </div>
            <div className=" font-medium text-sm md:text-xl lg:text-2xl mt-8">
            <a href='https://iocky.com'target="_blank" className="font-bold text-blue-600" rel="noreferrer">
              Blog </a>  and <a href='https://fdapi.iocky.com/graphql'target="_blank" className="font-bold text-blue-600" rel="noreferrer"> Online API </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
