
import sortify from './sortify.svg';
import dicey from './dicey.svg';

export const ProjectData = [
  {
    href: 'https://witty-forest-045651c10.azurestaticapps.net/',
    title: `Dicey`,
    avatar: dicey,
    description:
      'Arbitrary Dice Probability Calculator',
    content:
      'A simple probability calculator that allows creating dice of arbitrary size and faces',
    actions: { // get with https://api.github.com/repos/sina-m/sina-m.github.io
      star: 0,
      watch: 0,
      fork: 0,
    },
    extra: {
      src: 'https://joeschmoe.io/api/v1/female/random',
    }
  },
  {
    href: 'https://mango-plant-014f3e410.azurestaticapps.net/',
    title: `Sorty`,
    avatar: sortify,
    description:
      'Spotify Playlist Sorting Tool',
    content:
      'Sort your existing Spotify playlists into a newly generated one by using Spotify\'s own song metadata such as "energy" or "loudness"',
    actions: { // get with https://api.github.com/repos/sina-m/sina-m.github.io
      star: 0,
      watch: 0,
      fork: 0,
    },
    extra: {
      src: 'https://imgur.com/8GdllzP.png',
    }
  },
];
