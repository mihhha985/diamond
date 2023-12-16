/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
      	protocol: process.env.API_PROTOCOL,
        hostname: process.env.API_HOST,
        port: `${process.env.API_PORT}`,
      },
			
    ],
  },
	env:{
		serverUrl:`${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`,
	}
}

module.exports = nextConfig
