import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '5c6'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/', '35c'),
    exact: true
  },
  {
    path: '/blog/group-projects/',
    component: ComponentCreator('/blog/group-projects/', 'dab'),
    exact: true
  },
  {
    path: '/blog/how-to-do-projects/',
    component: ComponentCreator('/blog/how-to-do-projects/', 'eee'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/', '415'),
    exact: true
  },
  {
    path: '/blog/tags/groupwork/',
    component: ComponentCreator('/blog/tags/groupwork/', '0bd'),
    exact: true
  },
  {
    path: '/blog/tags/team/',
    component: ComponentCreator('/blog/tags/team/', '5cd'),
    exact: true
  },
  {
    path: '/goals/',
    component: ComponentCreator('/goals/', 'db8'),
    exact: true
  },
  {
    path: '/resume/',
    component: ComponentCreator('/resume/', 'f21'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '042'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
