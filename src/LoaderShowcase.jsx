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
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Vibrant Loaders Showcase</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allLoaders.map((loaderName) => {
          const LoaderComponent = Loaders[loaderName];
          const isMiniLoader = loaderName.startsWith('Mini');
          return (
            <div key={loaderName} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`${isMiniLoader ? 'h-32' : 'h-64'} bg-gray-50 flex items-center justify-center`}>
                <LoaderComponent />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{loaderName}</h3>
                <button
                  onClick={() => copyImportStatement(loaderName)}
                  className={`w-full py-2 px-4 rounded ${copiedLoader === loaderName
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                    } transition-colors`}
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