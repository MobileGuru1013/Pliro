import React from 'react';
import { connect } from 'react-redux';
import SideMenu from 'react-native-side-menu';

import { deviceWidth } from '../reusable/independent/utils/device_dimensions.js';
import * as actions from '../../actions';
import Menu from './Menu';

const menu = <Menu />;
const openMenuOffset = deviceWidth / 1.7;

const MenuWrapped = (props) => {
    const { menuOpen, toggleMenuVisibility, } = props;

    return (
        <SideMenu
            menu={menu}
            isOpen={menuOpen}
            openMenuOffset={openMenuOffset}
            onChange={(isOpen) => {
                toggleMenuVisibility({ event: 'onChange', isOpen });
            }}
        >
            {props.children}
        </SideMenu>
    )
};

const mapStateToProps = ({ menuOpen }) => {
    return { menuOpen }
};

export default connect(mapStateToProps, actions)(MenuWrapped);