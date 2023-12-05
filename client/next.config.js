/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
		domains:['localhost'],
  },
	env:{
		serverUrl:`${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`,
	}
}

module.exports = nextConfig
