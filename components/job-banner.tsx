export function JobBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold mb-1">AI Jobs Available</h3>
          <p className="text-sm md:text-base opacity-90">
            Discover AI and tech opportunities on Mercor. Find your next role today.
          </p>
        </div>
        <a
          href="https://work.mercor.com?referralCode=406789d7-e5a4-413a-867d-65813d26be7b&utm_source=referral&utm_medium=direct&utm_campaign=platform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 font-bold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
        >
          Explore Jobs
        </a>
      </div>
    </div>
  )
}
