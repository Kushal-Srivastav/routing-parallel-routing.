// setup for route handler
// get, post, put, patch, delete etc.
export function GET(request){
    console.log(request);


    return new Response('Hello')
    
}
// export function POST(request)