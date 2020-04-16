import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>Men</span>}>
      <MenuItemGroup title="Clothing">
        <Menu.Item key="setting:1"><a href="/mentshirt">T Shirts</a></Menu.Item>
        <Menu.Item key="setting:2"><a href="/menshirt"></a>Shirts</Menu.Item>
        <Menu.Item key="setting:3"><a href="/menjeans"></a>Jeans</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Footwear">
      <Menu.Item key="setting:4"><a href="/menshoes"></a>Shoes</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Fashion">
      <Menu.Item key="setting:5"><a href="/menaccessories"></a>Accessories</Menu.Item>
        </MenuItemGroup>
    </SubMenu>
    <SubMenu title={<span>Women</span>}>
      <MenuItemGroup title="Clothing">
        <Menu.Item key="setting:6"><a href="/womentops"></a>Tops</Menu.Item>
        <Menu.Item key="setting:7"><a href="/womendresses"></a>Dresses</Menu.Item>
        <Menu.Item key="setting:8"><a href="/womenjeans"></a>Jeans</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Footwear">
      <Menu.Item key="setting:9"><a href="/womenshoes"></a>Shoes</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Fashion">
      <Menu.Item key="setting:10"><a href="/womenaccessories"></a>Accessories</Menu.Item>
        </MenuItemGroup>
    </SubMenu>
    <SubMenu title={<span>Home Decor</span>}>
    <Menu.Item key="setting:11"><a href="/kitchen"></a>Kitchen</Menu.Item>
        <Menu.Item key="setting:12"><a href="/bath"></a>Bath</Menu.Item>
        <Menu.Item key="setting:13"><a href="/bedroom"></a>Bedroom</Menu.Item>

    </SubMenu>
  </Menu>
  )
}

export default LeftMenu