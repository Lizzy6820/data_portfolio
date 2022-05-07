import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'q5xbg7ch',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: 'skRdbenfBV1Zt6a85NRhfT8eJC1GtSRGCqQDwBzfI6xMJoYhaZHhnaEAA2iCqFRx2vbEJJnrgkQGL9T8zLoExlMMJKDi2NOac4WLDUKgGALgmQxvYWrEHEShWaBOBy1LHEvmGCNYJVzt1LuDnY6nMhJ0EYCKiNjttE0pYdb6evg2AceReGbysanity',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);