import React from 'react';

// Create a utility function for wrapping components with multiple providers
function wrapWithProviders(providers: any, children: any) {
  // Iterate through the array of providers and nest them inside each other
  return providers.reduceRight((child: any, Provider: any) => {
    return <Provider>{child}</Provider>;
  }, children);
}

export default wrapWithProviders;
