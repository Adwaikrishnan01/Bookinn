/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'res.cloudinary.com', 
          'avatars.githubusercontent.com',
          'lh3.googleusercontent.com'
        ]
      },
      webpack: (config) => {
        config.externals = [...config.externals, 'bcrypt'];
           return config;
         },
         experimental: {
          serverActions: true,
        },
}

module.exports = nextConfig