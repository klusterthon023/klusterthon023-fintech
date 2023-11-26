export default function TopStaticsLoadingSkeleton() {
  return (
    <section className="flex flex-col md:flex-row gap-5 w-full">
      <div className="animate-pulse w-full flex items-center bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-100 rounded"></div>
            <div className="h-4 bg-gray-100 rounded w-5/6"></div>
          </div>
        </div>
      </div>
      <div className="animate-pulse space-x-4  w-full flex items-center bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-100 rounded"></div>
            <div className="h-4 bg-gray-100 rounded w-5/6"></div>
          </div>
        </div>
      </div>
      <div className="animate-pulse space-x-4 w-full flex items-center bg-white border border-gray-200 border-opacity-20 rounded-lg p-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-100 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-100 rounded"></div>
            <div className="h-4 bg-gray-100 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
