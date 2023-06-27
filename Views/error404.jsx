const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <img src="/css/images/lol.jpg" alt="donkey laughing"/>
              <div>
              Photo by <a href="https://unsplash.com/ja/@dan_scape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Cook</a> on <a href="https://unsplash.com/s/photos/laughing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  
module.exports = error404
