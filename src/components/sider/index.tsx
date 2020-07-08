import { Layout, Menu } from 'antd';
import { LayoutProps } from 'antd/lib/layout';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/redux/reducers';
import { View } from 'src/views';
import styles from './style.module.less';
import { Item } from './types';

const { Sider: SiderAnt } = Layout;

type Props = {
  items: Item[];
  collapsed?: boolean;
};

export const Sider: React.FC<Props & LayoutProps> = (props) => {
  //console.log('sider');
  const settings = useSelector((state: RootState) => state.settings);
  const router = useSelector((state: RootState) => state.router);

  const renderMenu = (items: Item[]) => {
    return items.map((item, index) => {
      const key =
        item.view?.path instanceof Array ? item.view?.path[0] : typeof item.view?.path === 'string' ? item.view?.path : item.title;
      const path = item.view?.path instanceof Array ? item.view?.path[1] : item.view?.path;
      const title = item.view?.title || item.title;

      if (item.children === undefined || item.children.length === 0) {
        return (
          <Menu.Item key={key} style={title === 'Dashboard' ? { marginTop: 0 } : {}}>
            <Link to={path!}>
              {item.icon}
              <span>{title}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu
            key={key}
            title={
              <span>
                {item.icon}
                {settings.collapsed ? '' : title}
              </span>
            }>
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
    });
  };

  return (
    <SiderAnt className={`${styles.sider} unselectable` + props.className} trigger={null} collapsible={true} collapsed={settings.collapsed}>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[router.location.pathname]}
        defaultOpenKeys={!settings.collapsed ? ['Administración'] : []}>
        {renderMenu(props.items)}
      </Menu>
    </SiderAnt>
  );
};
