import { useEffect } from "react"

export default function Comments() {

  useEffect(()=>{
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://libreria-2.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })();
  }, [])

  return (
    <div id="disqus_thread" className="comment">

    </div>
  )
}