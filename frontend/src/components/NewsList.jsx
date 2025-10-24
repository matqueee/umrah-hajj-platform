// import React from 'react';
// import NewsCard from './NewsCard';
// import { Loader2 } from 'lucide-react';

// function NewsList({ news, isLoading = false }) {
//   if (isLoading) {
//     return (
//       <div className="flex flex-col items-center justify-center py-20">
//         <Loader2 className="w-12 h-12 text-emerald-600 animate-spin mb-4" />
//         <p className="text-gray-600 text-lg">Loading latest news...</p>
//       </div>
//     );
//   }

//   if (news.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <p className="text-gray-500 text-lg">No news articles found. Try a different search or category.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//       {news.map((item, index) => (
//         <NewsCard key={index} item={item} />
//       ))}
//     </div>
//   );
// }

// export default NewsList;




import React from "react";
import NewsCard from "./NewsCard";

function NewsList({ news }) {
return (
<div
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
gap: "20px",
marginTop: "30px",
}}
>
{news.length > 0 ? (
news.map((item, index) => <NewsCard key={index} item={item} />)
) : (
<p style={{ textAlign: "center" }}>Loading latest news...</p>
)}
</div>
);
}

export default NewsList;