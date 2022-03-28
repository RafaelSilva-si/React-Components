import { MdBuild, MdDashboard, MdApps, MdOutlinePersonPinCircle, MdPointOfSale, MdListAlt, MdOutlineBrandingWatermark } from 'react-icons/md';
import { FaUserAlt, FaMountain } from 'react-icons/fa';

export const navItems = [
	{
		to: '/',
		name: 'Dashboard',
		exact: true,
		Icon: MdDashboard,
	},
];

export const navAux = [
	{
		to: '/usuarios',
		name: 'Usuários',
		exact: false,
		IconSub: FaUserAlt,
		id: 147,
	},
	
];

export const navApp = [
	{
		to: '/montante',
		name: 'Montante',
		exact: false,
		IconSub: FaMountain,
		id: 140
	},
	{
		to: '/client',
		name: 'Cliente',
		exact: false,
		IconSub: MdOutlinePersonPinCircle,
		id: 147
	}
]





export const routes = [
	{
		name: 'Auxiliares',
		icon: MdBuild,
		submodules: navAux,
	},
	
	{
		name: 'Aplicações',
		icon: MdApps,
		submodules: navApp
	}
];
