const nextConfig = {
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true
      },
      {
        source: '/contact',
        destination: '/',
        permanent: true
      },
      {
        source: '/en/contact',
        destination: '/',
        permanent: true
      },
      {
        source: '/en/work',
        destination: '/',
        permanent: true
      },
      {
        source: '/projets',
        destination: '/',
        permanent: true
      },
      {
        source: '/projets/mtonarchi',
        destination: '/',
        permanent: true
      },
      {
        source: '/work/en/mtonarchi',
        destination: '/',
        permanent: true
      },
      {
        source: '/projets/abject-act',
        destination: '/',
        permanent: true
      },
      {
        source: '/work/en/abject-act',
        destination: '/',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
