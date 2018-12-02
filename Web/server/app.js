const express = require('express')
const fs = require('fs');
const cors = require('cors')


const app = express()
const port = 3000


app.use(cors())
app.get('/writeFile', function (req, res) {
    var text;
    var filename;
    var dir;

    text = req.query.text
    filename = req.query.filename+'.txt'
    dir = '/Users/kresnajenie/Javascript/cc-league-stream/Web/Parameters/'

    console.log('Writing to: '+ dir+ filename)
    console.log('Text: ' + text)

    fs.writeFile(dir+filename, text, (err) => {  
        // throws an error, you could also catch it here
        if (err) throw err;
    
        // success case, the file was saved
        console.log('Lyric saved!');
        res.send('file written.')
    }); 


  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))