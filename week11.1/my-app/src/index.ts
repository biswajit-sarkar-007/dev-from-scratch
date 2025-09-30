// in here we did not used express in http server we only used wrangler for http server 

// app.get("/", ()=>{})
// app.listent(3000)


export default {
	async fetch(request, env, ctx): Promise<Response> {
		 return Response.json({
			msg:"happy new year 2026"
		 })
	},
} satisfies ExportedHandler<Env>;
 

// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		console.log(request.body);
// 		console.log(request.headers);

		 
		
// 		if (request.method === "GET") {
// 			return Response.json({
// 				message: "you sent a get request"
// 			});
// 		} else {
// 			return Response.json({
// 				message: "you did not send a get request"
// 			});
// 		}
// 	},
// };