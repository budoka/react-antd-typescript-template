import { Layout } from 'antd';
import { LayoutProps } from 'antd/lib/layout';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.less';

const { Footer: FooterAnt } = Layout;

export const Footer: React.FC<LayoutProps> = (props) => {
  useEffect(() => {});

  return (
    <FooterAnt {...props} className={`${styles.footer}` + props.className}>
      <div className={styles.logoWrapper}>
        <Link to="/">Footer</Link>
      </div>
    </FooterAnt>
  );
};
