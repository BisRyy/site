import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function intersperse(items, separator) {
  if (items.length < 1) {
    return items;
  }

  const arr = [items[0]];
  for (let i = 1; i < items.length; i++) {
    arr.push(separator);
    arr.push(items[i]);
  }

  return arr;
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {internetProfiles} = siteConfig.themeConfig;
  return (
    <Layout title="Software Engineer">
      <header className={classnames('hero', styles.header)}>
        <div className="container">
          <img
            src="https://github.com/Bisryy.png"
            alt="logo"
            style={{
              borderRadius: '50%',
              maxWidth: 196,
            }}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={styles.tagline}>
            Building a new world. <br/> One line at a time.
          </p>
          <div className={styles.internetProfiles}>
            {intersperse(
              Object.keys(internetProfiles).map((key) => {
                const item = internetProfiles[key];
                return (
                  <a href={item.href} rel="noreferrer noopener" target="_blank">
                    {item.label}
                  </a>
                );
              }),
              <span className="padding-horiz--md">|</span>,
            )}
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
