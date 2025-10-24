// import React from 'react';
// import { ExternalLink, Calendar, Newspaper } from 'lucide-react';

// function NewsCard({ item }) {
//   return (
//     <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
//       <div className="p-6">
//         <div className="flex items-start justify-between gap-3 mb-3">
//           <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-emerald-600 transition-colors">
//             {item.title}
//           </h3>
//           <Newspaper className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//         </div>

//         <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
//           <Calendar className="w-4 h-4" />
//           <time dateTime={item.pubDate}>
//             {new Date(item.pubDate).toLocaleDateString('en-PK', {
//               year: 'numeric',
//               month: 'short',
//               day: 'numeric',
//               hour: '2-digit',
//               minute: '2-digit'
//             })}
//           </time>
//         </div>

//         <p className="text-sm text-gray-600 mb-4 font-medium">{item.source}</p>

//         {item.description && (
//           <p className="text-sm text-gray-700 mb-4 line-clamp-3">{item.description}</p>
//         )}

//         <a
//           href={item.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm group/link transition-colors"
//         >
//           Read full article
//           <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
//         </a>
//       </div>
//     </article>
//   );
// }

// export default NewsCard;

import React from "react";

function NewsCard({ item }) {
return (
<div
style={{
background: "white",
padding: "15px",
borderRadius: "10px",
boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
}}
>
<h3>{item.title}</h3>
<p style={{ fontSize: "14px", color: "#555" }}>
{new Date(item.date).toLocaleString()}
</p>
<p style={{ fontSize: "13px", color: "#777" }}>{item.source}</p>
<a
href={item.link}
target="_blank"
rel="noreferrer"
style={{
display: "inline-block",
marginTop: "10px",
color: "#0066cc",
textDecoration: "none",
fontWeight: "bold",
}}
>
Read more →
</a>
</div>
);
}

export default NewsCard;
