/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    swcMinify:true,
    async rewrites(){
        return[
            {
                // /makeup 으로 시작하는 면  destination 주소 의 정보를 가져올수 있다.
                source : "/makeup/:path*",
                destination:"http://makeup-api.herokuapp.com/api/:path*"
            },
            {
                // /guestbook 으로 시작하는면  destination 주소 의 정보를 가져올수 있다.
                source : "/guestbook/:path*",
                destination:"http://localhost:8080/api/guestbook/:path*"
            }, 
            {
                // /guestbook 으로 시작하는면  destination 주소 의 정보를 가져올수 있다.
                source : "/members/:path*",
                destination:"http://localhost:8080/api/members/:path*"
            }, 
        ];
    }
};

export default nextConfig;
