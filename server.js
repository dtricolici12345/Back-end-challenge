const http = require('http');
const fs = require('fs')


const delay = (ns) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve()
        },ns )   
    })
}


const readFile = (path) => {
    return new Promise((resolve, reject) => {
         fs.readFile(path, (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })  
    })

}

const server = http.createServer(async (req, res) => {
    switch (req.url) {
        case '/home': {
try {
         const data =  await readFile('pages/home.html')
         res.write(data)
         res.end()
         
        } catch (err) {
            res.write('Somthing wrong, 500')
            res.end()
        }
        }

        case '/about': {
           await  delay(300)
               res.write('ABOUT COURSE')
                res.end(); 
         
            break;
        }
      
        default: {
            res.write('404 NOT FOUND')
            res.end()
        }
    }
})

server.listen(3003)
