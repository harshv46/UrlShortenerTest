import http from "k6/http";
import { sleep } from "k6";


function randomExponential(rate) {
	// http://en.wikipedia.org/wiki/Exponential_distribution#Generating_exponential_variates
	rate = rate || 1;
  
	// Allow to pass a random uniform value or function
	// Default to Math.random()
	var U = Math.random();
  
	return -Math.log(U)/rate;
  }
  

export const options = {
	duration: '60m',
	vus: 1,
	maxRedirects: 0,
};
// export default function () {
// 	const requests = [];
// 	for(let i=0;i<80;i++){
// 		const req1 = {
// 			method: 'GET',
// 			url: `https://url-shortener4-dev.ap-south-1.elasticbeanstalk.com/${getPareto(1001)-1}_${Math.floor(Math.random()*999)}`,
// 		};
// 		requests.push(req1);
// 	}
// 	const res = http.batch(requests);
// 	sleep(randomExponential(1));
	
// 	// const res = http.get(`http://url-shortener4-dev.ap-south-1.elasticbeanstalk.com/${getPareto(1001)-1}_${Math.floor(Math.random()*999)}`);
// 	// console.log(res.body);
// 	// if(res.timings.duration !==0 )
// 		// console.log(Date.now(), res.timings.duration);
// }




// export default function () {
//     // getPareto(100);
//   const url =
//   [
//       `http://url-shortener4-dev.ap-south-1.elasticbeanstalk.com/c${getPareto(1001)-1}_${Math.floor(Math.random()*999)}`,
//   ];
//     // console.log(url);
//   url.forEach(myFunc);
//   function myFunc(url){
//     const res = http.get(url);
//     // console.log(res.body);
//   }
// //   console.log(res.body);
// }


// discrete.js
// Sample from discrete distributions.

// export default function ()
// {
//     // var short = getRandomString(getRandomInt(1));
//     // var lurl = "https://www.google.com/search?q=";
//     // console.log(short);
//     // const pre = "https://github.com/shubham11941140/short_url/";
//     const url = 'https://url-shortener4-dev.ap-south-1.elasticbeanstalk.com/';
//     const payload = JSON.stringify({
//         // urldata: pre + short,
//         // shorturl: `${getPareto(150)}_${Math.floor(Math.random()*999)}`
//         long_url: "https://www.google.com",
//         short_url: `wrt${getPareto(150)}_${Math.floor(Math.random()*999)}`,
//         // short_url: ,
//           exp_date: 31
//     });
//     // curl    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhbnkiLCJleHAiOjE2NDk2NTg0NjYsImlzcyI6ImF1dGgtYXBwIiwic3ViIjoiY3M1NTkifQ._JshleXML9zqsV4sDAtaoBhxKPldyE2MPw_2Fo8XjGw"

//         // console.log(payload);
//     const params = {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhbnkiLCJleHAiOjE2NDk2NTg0NjYsImlzcyI6ImF1dGgtYXBwIiwic3ViIjoiY3M1NTkifQ._JshleXML9zqsV4sDAtaoBhxKPldyE2MPw_2Fo8XjGw'
//     },
//     };

//     // send a HTTP POST request
//     // console.log(payload);
//     const res = http.post(url, payload, params);
//     sleep(randomExponential(50));
//     // console.log(res.body);
// }


// export default function ()
// {
//     // var short = getRandomString(getRandomInt(1));
//     // var lurl = "https://www.google.com/search?q=";
//     // console.log(short);
//     // const pre = "https://github.com/shubham11941140/short_url/";
//     const url = 'http://testingcache.eba-kyntw523.us-east-1.elasticbeanstalk.com/api/readshorten/CSD1234';
//     const payload = JSON.stringify({
//         // urldata: pre + short,
//         shorturl: `${getPareto(1001)-1}_${Math.floor(Math.random()*999)}`
//     });

//     const params = {
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     };

//     // send a HTTP POST request
//     // console.log(payload);
//     const res = http.post(url, payload, params);
//     // console.log(res.body);
// }

export default function ()
{
    const url = 'https://Url15mar-env.eba-uxmrdhvz.ap-south-1.elasticbeanstalk.com/api/createcustomshorten/CSD1234';
    const payload = JSON.stringify({
        // urldata: pre + short,
		longurldata: `https://www.google.com/wrt`,
		ttl: 30,
        customurldata: `rte${getPareto(1001)-1}_${Math.floor(Math.random()*999)}`
    });

    const params = {
		headers: {
			'Content-Type': 'application/json',
		},
    };
    // console.log(payload);
    const res = http.post(url, payload, params);
    console.log(res.body);
	sleep(randomExponential(50));
}