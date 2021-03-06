import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MdIconRegistry, ds: DomSanitizer) => {
    const imgUrl = 'assets/img/';
    const svgUrl = 'assets/svgIcon/';
    const sidebarIcon = `${imgUrl}sidebar/`;
    const daydir = `${imgUrl}/days/`;
    const avatarDir = `${imgUrl}avatar/`;
    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ];
    const iconDir = `${imgUrl}icons/`;
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}avatars.svg`));
    ir.addSvgIcon('category', ds.bypassSecurityTrustResourceUrl(`${svgUrl}category.svg`));
    ir.addSvgIcon('unassingned', ds.bypassSecurityTrustResourceUrl(`${avatarDir}unassigned.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarIcon}month.svg`));
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sidebarIcon}project.svg`));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarIcon}projects.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarIcon}week.svg`));
    ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`${iconDir}move.svg`));
    ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl(`${iconDir}delete.svg`));
    ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl(`${iconDir}add.svg`));
    days.forEach(d => ir.addSvgIcon(`day${d}`, ds.bypassSecurityTrustResourceUrl(`${daydir}day${d}.svg`)));
};




