// import React, { useEffect, useState } from 'react';
// import NewsList from './components/NewsList';
// import { Search, Filter } from 'lucide-react';

// const categories = ['All', 'Hajj', 'Umrah', 'Visa'];

// function App() {
//   const [news, setNews] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [search, setSearch] = useState('');
//   const [category, setCategory] = useState('All');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:4000/api/feeds')
//       .then((res) => res.json())
//       .then((data) => {
//         setNews(data);
//         setFiltered(data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching news:', err);
//         setIsLoading(false);
//       });
//   }, []);

//   const handleFilter = (type) => {
//     setCategory(type);
//     const searchLower = search.toLowerCase();

//     if (type === 'All') {
//       setFiltered(
//         search
//           ? news.filter((n) => n.title.toLowerCase().includes(searchLower))
//           : news
//       );
//     } else {
//       setFiltered(
//         news.filter((n) => {
//           const matchesCategory = n.title.toLowerCase().includes(type.toLowerCase());
//           const matchesSearch = search
//             ? n.title.toLowerCase().includes(searchLower)
//             : true;
//           return matchesCategory && matchesSearch;
//         })
//       );
//     }
//   };

//   const handleSearch = (e) => {
//     const query = e.target.value;
//     setSearch(query);
//     const queryLower = query.toLowerCase();

//     if (category === 'All') {
//       setFiltered(
//         query ? news.filter((n) => n.title.toLowerCase().includes(queryLower)) : news
//       );
//     } else {
//       setFiltered(
//         news.filter((n) => {
//           const matchesCategory = n.title.toLowerCase().includes(category.toLowerCase());
//           const matchesSearch = n.title.toLowerCase().includes(queryLower);
//           return matchesCategory && matchesSearch;
//         })
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex items-center justify-center gap-3">
//             <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
//               <span className="text-2xl">🕋</span>
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">
//                 Hajj & Umrah News Portal
//               </h1>
//               <p className="text-sm text-gray-600 mt-1">
//                 Latest updates for Pakistani pilgrims
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Search and Filter Section */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           {/* Search Bar */}
//           <div className="relative mb-6">
//             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               value={search}
//               onChange={handleSearch}
//               placeholder="Search for news articles..."
//               className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-500"
//             />
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex items-center gap-3 flex-wrap">
//             <div className="flex items-center gap-2 text-gray-700 font-medium">
//               <Filter className="w-4 h-4" />
//               <span className="text-sm">Filter by:</span>
//             </div>
//             {categories.map((type) => (
//               <button
//                 key={type}
//                 onClick={() => handleFilter(type)}
//                 className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
//                   category === type
//                     ? 'bg-emerald-600 text-white shadow-md hover:bg-emerald-700'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {type}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* News List */}
//         <NewsList news={filtered} isLoading={isLoading} />
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-200 mt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <p className="text-center text-gray-600 text-sm">
//             © 2025 Hajj & Umrah News Portal. All rights reserved.
//           </p>
//         </div>
//       </footer>
      
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";

function App() {
const [news, setNews] = useState([]);
const [filtered, setFiltered] = useState([]);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

useEffect(() => {
axios
.get("http://localhost:4000/api/feeds")
.then((res) => {
setNews(res.data);
setFiltered(res.data);
})
.catch((err) => console.error("Error fetching news:", err));
}, []);

const handleFilter = (type) => {
setCategory(type);
if (type === "All") setFiltered(news);
else
setFiltered(
news.filter((n) =>
n.title.toLowerCase().includes(type.toLowerCase())
)
);
};

const handleSearch = (e) => {
setSearch(e.target.value);
const query = e.target.value.toLowerCase();
setFiltered(
news.filter((n) => n.title.toLowerCase().includes(query))
);
};

return (
<div style={{ padding: "30px", background: "#f5f5f5", minHeight: "100vh" }}>
<h1 style={{ textAlign: "center", color: "#333" }}>🕋 Umrah & Hajj News Portal</h1>


  {/* Search Bar */}
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    <input
      type="text"
      value={search}
      onChange={handleSearch}
      placeholder="🔍 Search news..."
      style={{
        width: "60%",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "16px",
      }}
    />
  </div>

  {/* Filter Buttons */}
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    {["All", "Hajj", "Umrah", "Visa"].map((type) => (
      <button
        key={type}
        onClick={() => handleFilter(type)}
        style={{
          margin: "5px",
          padding: "10px 15px",
          borderRadius: "6px",
          border: "none",
          background: category === type ? "#007bff" : "#ddd",
          color: category === type ? "white" : "black",
          cursor: "pointer",
        }}
      >
        {type}
      </button>
    ))}
  </div>

  <NewsList news={filtered} />
</div>
);
}

export default App;
