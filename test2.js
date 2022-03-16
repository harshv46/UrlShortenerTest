import { sleep } from "k6";
import http from "k6/http";


export const options = {
    scenarios: {
      constant_request_rate: {
        executor: 'constant-arrival-rate',
        rate: 5000,
        timeUnit: '1s',
        duration: '60m',
        preAllocatedVUs: 900,
        maxVUs: 1000,
      },
    },
    maxRedirects: 0,
  };
// export const options = {
// 	duration: '30s',
// 	vus: 1000,
// 	maxRedirects: 0,
// 	// discardResponseBodies: true,
// };

function randomExponential(rate) {
	// http://en.wikipedia.org/wiki/Exponential_distribution#Generating_exponential_variates
	rate = rate || 1;
  
	// Allow to pass a random uniform value or function
	// Default to Math.random()
	var U = Math.random();
  
	return -Math.log(U)/rate;
  }

export function getPareto(){
	let pareto = 0;
	{
		let num = Math.floor(Math.random() * 1000);
		
		if (num < 800) {
			if(num<600) {
				pareto = Math.floor(Math.random()*40);
			}
			else{
				pareto = Math.floor(Math.random()*160) + 40;
			}
		}
		else if (num < 960) {
			pareto = Math.floor(Math.random() * 160) + 200;
		}
		else {
			pareto = Math.floor(Math.random()*640) + 360;
		}
	}
	return pareto;
}

//CHOICE 2 READ LOADING
export default function () {
	const url = 'https://Url15mar-env.eba-uxmrdhvz.ap-south-1.elasticbeanstalk.com/api/readshorten/CSD1234';

	//Just Method to call Pareto Number
	
	const payload = JSON.stringify({
		// urldata: pre + short,
		shorturl: `${getPareto()}_${Math.floor(Math.random() * 999)}`
	});

	const params = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	// send a HTTP POST request
	const res = http.post(url, payload, params);
	// console.log(res.body);
	// if(res.timings.duration !==0 )
		// console.log(Date.now(), res.timings.duration);
    sleep(randomExponential(3000));
}


//CHOICE 1 READ LOADING
// export default function () {
// 	// const requests = [];
// 	// for(let i=0;i<80;i++){
// 	// 	const req1 = {
// 	// 		method: 'GET',
// 	// 		url: `http://url-shortener4-dev.ap-south-1.elasticbeanstalk.com/${getPareto(1001)-1}_${Math.floor(Math.random()*999)}`,
// 	// 	};
// 	// 	requests.push(req1);
// 	// }
// 	// const res = http.batch(requests);

// 	const res = http.get(`http://url-shortener4-dev.ap-south-1.elasticbeanstalk.com/${getPareto(1001)-1}_${Math.floor(Math.random()*999)}`);
// 	// console.log(res.body);
// 	// if(res.timings.duration !==0 )
// 		// console.log(Date.now(), res.timings.duration);
// }


