export default function TestPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'Not set';
  const testKey = process.env.NEXT_PUBLIC_JUKKAS_TEST_KEY || 'Not set';
  const missingKey = process.env.NEXT_PUBLIC_MISSING_KEY || 'Not set';

  return (
    <main className="p-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Environment Variable Test</h1>
        
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">NEXT_PUBLIC_API_URL</h2>
          <p className="text-sm text-gray-600 mb-2">Value:</p>
          <code className="block bg-white border border-gray-300 rounded p-4 font-mono break-all">
            {apiUrl}
          </code>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">NEXT_PUBLIC_JUKKAS_TEST_KEY</h2>
          <p className="text-sm text-gray-600 mb-2">Value:</p>
          <code className="block bg-white border border-gray-300 rounded p-4 font-mono break-all">
            {testKey}
          </code>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">NEXT_PUBLIC_MISSING_KEY</h2>
          <p className="text-sm text-gray-600 mb-2">Value:</p>
          <code className="block bg-white border border-gray-300 rounded p-4 font-mono break-all">
            {missingKey}
          </code>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            This page displays the <code className="bg-gray-200 px-2 py-1 rounded">NEXT_PUBLIC_API_URL</code> environment variable.
          </p>
          <p className="mt-2">
            Since this variable starts with <code className="bg-gray-200 px-2 py-1 rounded">NEXT_PUBLIC_</code>, it is automatically exposed to the browser.
          </p>
        </div>
      </div>
    </main>
  );
}
