import { BookOutlined, DollarOutlined, DotChartOutlined, FileDoneOutlined, SolutionOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Switch } from 'react-router-dom';
import { Item } from 'src/components/sider/types';
import { Header, Sider, Loading, Router } from 'src/components';
import { RootState } from 'src/redux';
import { getRoute, getUser } from 'src/utils/store';
import { Home, View } from 'src/views';
import 'src/antd.less'; // last
import 'src/app.less'; // last

export const views: View[] = [{ title: 'Home', path: '/home', component: <Home />, private: true, permission: 'home' }];

const items: Item[] = [
  { view: views[0], icon: <DotChartOutlined /> },
  /*{
    title: 'Administración',
    icon: <SolutionOutlined />,
    children: [
      { view: views[1], icon: <TeamOutlined /> },
      { view: views[2], icon: <TeamOutlined /> },
      { view: views[3], icon: <BookOutlined /> },
      { view: views[4], icon: <FileDoneOutlined /> },
      { view: views[5], icon: <DollarOutlined /> },
      { view: views[6], icon: <DollarOutlined /> },
    ],
  },*/
];

const App = () => {
  const router = useSelector((state: RootState) => state.router);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(getTitle());
  }, [router]);

  const getTitle = () => {
    const view = views.find((v) => v.path === getRoute());
    return view ? view.title : '';
  };

  return (
    <>
      <Helmet titleTemplate="%s | PUA">
        <title>{title}</title>
      </Helmet>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout>
          <Sider
            items={items.map((i) =>
              !i.children
                ? i
                : {
                    ...i,
                    children: i.children.filter((i) => {
                      return (
                        !i.view?.permission ||
                        !getUser().permissions ||
                        getUser().permissions!.includes('full') ||
                        getUser().permissions!.includes(i.view.permission!)
                      );
                    }),
                  },
            )}
          />
          <Switch>
            <Router views={views} />
          </Switch>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
