import { getAssetPath } from '../utils/path';
import Image from 'next/image';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-8">Asset Path Test</h1>
      
      <div className="space-y-6">
        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">Image Test</h2>
          <div className="w-32 h-32 relative">
            <Image
              src={getAssetPath('/zephilea.png')}
              alt="Test Image"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Path: {getAssetPath('/zephilea.png')}
          </p>
        </div>

        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">Environment Variables</h2>
          <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
            {JSON.stringify({
              NODE_ENV: process.env.NODE_ENV,
              GITHUB_ACTIONS: process.env.GITHUB_ACTIONS,
              basePath: process.env.NEXT_PUBLIC_BASE_PATH,
            }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
