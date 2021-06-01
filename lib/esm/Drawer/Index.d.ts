import React from "react";
declare type MenuData = {
    drawer: {
        main: MenuItem[];
        bottom: MenuItem[];
    };
    footer?: MenuItem[];
};
declare type MenuItem = {
    order: number;
    label: string;
    to: string;
    icon?: string;
    options?: MenuItemOptionGeneric | MenuItemOptionCategory;
    enabledGroups?: string[];
};
declare type MenuItemOptionGeneric = {
    key: string[];
};
declare type MenuItemOptionCategory = {
    smartLibraryId?: string;
    categoryId?: string;
};
declare const SwipeableDrawer: React.FC<{
    useMenu: MenuData;
    toggled: boolean;
    open: () => void;
    close: () => void;
}>;
export default SwipeableDrawer;
