/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.API_HOST,
      },
			
    ],
  },
	env:{
		serverUrl:process.env.API_PROTOCOL+'://'+process.env.API_HOST+':'+process.env.API_PORT,
		testEnv:process.env.TEST_ENV
	}
}

module.exports = nextConfig
