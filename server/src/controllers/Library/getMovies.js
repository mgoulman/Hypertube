const user = require ('../../models/user');
let cloudscraper = require('cloudscraper');

getMovies = (req, res) => {
    const filter = req.body.filter;
    console.log(filter);
    cloudscraper.get(`https://tv-v2.api-fetch.website/movies/${filter.page}?sort=trending&genre=&order=-1`)
    .then(resp => {
        let result1 = JSON.parse(resp);
        if(result1.length > 0 && result1[0].title) 
        {
            //if(category === null)
                result1.sort((a, b) => {return b.rating.percentage - a.rating.percentage})
            res.send(result1);
        }
        else
        {
            cloudscraper.get(`https://yts.unblocked4u.org/api/v2/list_movies.json/?limit=50&sort_by=download_count&sort=order_by=desc&page=${filter.page}`)
            .then(resp => {
                let result2 = JSON.parse(resp);
                if(result2.status === 'ok' && result2.data.movies.length > 0)
                {
                    //if(category === null)
                        result2.data.movies.sort((a, b) => {return b.rating - a.rating})
                    res.send(result2.data.movies);
                }
            })
            .catch(err => {});
        }
    })
    .catch(err => {});
}
module.exports = getMovies;