import React, { useEffect, useState } from 'react';
import moment from 'moment';

export default function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [showCurrentPost, setShowCurrentPost] = useState(6);
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // get Blogger data from script
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://jeamshiv.blogspot.com/feeds/posts/default?alt=json-in-script&callback=latestPost';
    // scriptTag.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(scriptTag);

    //use the script callback here
    window.latestPost = function (json) {
      for (let index = 0; index < json?.feed.entry.length; index++) {
        const element = json.feed.entry[index];
        //updating 72 image size to 300
        element.media$thumbnail['url'] = element?.media$thumbnail.url?.replace('s72-c', 's400');
        //made content readable
        element.content['$t'] = element.content.$t.replace(/(<([^>]+)>)/gi, '').substr(0, 150);
      }
      setBlogData(json.feed.entry);
    };
  }, []);

  useEffect(() => {
    console.log('getting blog data len', blogData?.length);
  }, [blogData]);

  return (
    <>
      <section className="container pt-5 my-5">
        <div className="text-center mb-3">
          <h5>Latest Blog</h5>
          <h1 className="style-title">My Blog</h1>
        </div>
        <div className="row" id="blogdata">
          {blogData?.slice(0, showCurrentPost).map((item, index) => (
            <div className="col-lg-4 col-md-6 pt-4" key={index}>
              <div className="card">
                <div className="imgwrapper">
                  <a href={item.link[4].href} target="_bank">
                    <img className="card-img-top img-fluid" src={item.media$thumbnail.url} alt={item.title.$t} />
                  </a>
                </div>
                <div className="card-body">
                  <h4 className="card-title blog-tite-truncate">
                    <a href={item.link[4].href} target="_bank">
                      {item.title.$t}
                    </a>
                  </h4>
                  <p className="text-muted m-0">
                    {moment(item.published.$t).isValid() ? moment(item.published.$t).format('MMM DD, YYYY') : '-'}
                  </p>
                  <p className="card-text blog-content-truncate">{item.content.$t}</p>
                  <a href={item.link[4].href} target="_bank">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {showCurrentPost === 6 && (
        <div className="container text-center">
          <button className="btn primary-button" onClick={() => setShowCurrentPost(blogData?.length + 1)}>
            Load More Posts
          </button>
        </div>
      )}
    </>
  );
}
