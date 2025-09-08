import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CarNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const url = "https://api.rss2json.com/v1/api.json?rss_url=https://www.caranddriver.com/rss/all.xml";
        const res = await axios.get(url);
        setArticles(res.data.items);
        console.log(res.data.items);
      } catch (err) {
        console.error("Error fetching RSS:", err);
      }
    };
    fetchRSS();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("ar-EG", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4"> أخبار السيارات</h2>
      <div className="space-y-3">
        {articles.map((a, i) => (
          <div className="flex flex-col md:flex-row gap-4 border rounded-lg shadow overflow-hidden" key={i}>
            {/* img */}
            <div className="w-full md:w-2xs lg:w-96 md:h-56">
              <img src={a.enclosure.link} alt={a.title} className="w-full h-full object-cover" />
            </div>

            {/* information */}
            <ul className="md:w-2/3">
              <li key={i} className="p-3">
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold"
                >
                  {a.title}
                </a>
                <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: a.description }}/>
                <span className="text-xs text-gray-500">{formatDate(a.pubDate)}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
