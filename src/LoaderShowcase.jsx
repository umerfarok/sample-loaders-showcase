import React, { useState } from 'react';
import * as Loaders from 'vibrant-loaders';

const LoaderShowcase = () => {
  const [copiedLoader, setCopiedLoader] = useState(null);

  // const allLoaders = [
  //   'AtomLoader', 'CosmicLoader', 'DNALoader', 'GalaxyLoader', 'WaveLoader',
  //   'ClockLoader', 'PulseGridLoader', 'RotatingSquaresLoader', 'BouncingDotsLoader',
  //   'ShoppingLoader', 'ImageSpinLoader', 'CloudLoader', 'BinaryLoader',
  //   'BubbleLoader', 'MoleculeLoader', 'PendulumLoader', 'TypewriterLoader',
  //   'MiniPulseLoader', 'MiniDotsLoader', 'MiniSpinnerLoader', 'MiniFlipLoader',
  //   'MiniHourglassLoader', 'MiniRippleLoader'
  // ];
  const allLoaders = [
    'AtomLoader', 'CosmicLoader', 'DNALoader', 'GalaxyLoader', 'WaveLoader',
    'ClockLoader', 'PulseGridLoader', 'RotatingSquaresLoader',
    'ShoppingLoader', 'ImageSpinLoader',
    'MiniDotsLoader',
  ];

  const copyImportStatement = (loaderName) => {
    const importStatement = `import { ${loaderName} } from 'vibrant-loaders';`;
    navigator.clipboard.writeText(importStatement).then(() => {
      setCopiedLoader(loaderName);
      setTimeout(() => setCopiedLoader(null), 2000);
    });
  };

  return (
    <div className="p-8 bg-gradient-to-br from-purple-100 to-pink-100 min-h-screen font-['Poppins',sans-serif]">
      <h1 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        Vibrant Loaders Showcase
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allLoaders.map((loaderName) => {
          const LoaderComponent = Loaders[loaderName];
          const isMiniLoader = loaderName.startsWith('Mini');
          return (
            <div key={loaderName} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
              <div className={`${isMiniLoader ? 'h-40' : 'h-72'} bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden flex-grow`}>
                <LoaderComponent />
              </div>
              <div className="p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{loaderName}</h3>
                <button
                  onClick={() => copyImportStatement(loaderName)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${copiedLoader === loaderName
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    }`}
                >
                  {copiedLoader === loaderName ? 'Copied!' : 'Copy Import'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoaderShowcase;