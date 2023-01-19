/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const internetProfiles = {
  github: {
    label: 'GitHub',
    href: 'https://github.com/BisRyy',
  },
  leetcode: {
    label: 'Leetcode',
    href: 'https://leetcode.com/BisRy',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/BisRy',
  },
  medium: {
    label: 'Medium',
    href: 'https://medium.com/@BisRy',
  },
  twitter: {
    label: 'Twitter',
    href: 'https://twitter.com/BisRyyy',
  },
  facebook: {
    label: 'Facebook',
    href: 'https://www.facebook.com/Bisrat.Gr/',
  },
  telegram: {
    label: 'Telegram',
    href: 'https://t.me/BisRy',
  },
  instagram: {
    label: 'Instagram',
    href: 'https://www.instagram.com/bisrat_gr/',
  },
};

module.exports = {
  title: 'Bisrat Kebere',
  tagline: 'Software Engineer',
  url: 'https://bisrat.tech',
  baseUrl: '/',
  trailingSlash: true,
  deploymentBranch: 'gh-pages',
  organizationName: 'BisRyy',
  projectName: 'site',
  customFields: {
    // Put your custom environment here
    teamEmail: process.env.EMAIL,
  },
  themeConfig: {
    internetProfiles,
    navbar: {
      // title: 'BisRy',
      logo: {
        alt: 'BisRy Logo',
        src: 'https://github.com/Bisryy.png',
        width: 32,
        style:{
          borderRadius: '50%',
        },
      },
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'resume', label: 'Resume', position: 'left'},
        {to: 'goals', label: 'Life Goals', position: 'left'},
        {
          href: 'https://github.com/BisRyy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {},
        {
          title: 'Professional',
          items: [
            internetProfiles.github,
            internetProfiles.leetcode,
            internetProfiles.linkedin,
            internetProfiles.medium,
          ],
        },
        {
          title: 'Social',
          items: [
            internetProfiles.telegram,
            internetProfiles.twitter,
            internetProfiles.facebook,
            internetProfiles.instagram,
          ],
        },
        {},
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        id: 'universal-analytics',
        trackingID: 'UA-44622716-1',
        anonymizeIP: true,
      },
    ],
  ],
};
