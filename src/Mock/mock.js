/** @format */

import {
	AiFillTrademarkCircle,
	AiFillTrophy,
	AiFillTwitterCircle,
	AiFillUnlock,
	AiFillUpCircle,
	AiFillYoutube,
	AiOutlineAccountBook,
	AiOutlineAppstore,
	AiOutlineAppstoreAdd,
	AiOutlineBlock,
} from 'react-icons/ai';

export const data = [
	{
		id: 1,
		title: 'Home',
		icon: <AiFillTrademarkCircle />,
		childhidden: false,
		child: [],
	},
	{
		id: 2,
		title: 'Navigate',
		icon: <AiFillTrophy />,
		childhidden: false,
		child: [
			{ id: 1, title: 'child1', icon: <AiOutlineAccountBook /> },
			{ id: 2, title: 'child2', icon: <AiOutlineAppstore /> },
			{ id: 3, title: 'child3', icon: <AiOutlineAppstoreAdd /> },
			{ id: 4, title: 'child4', icon: <AiOutlineBlock /> },
		],
	},
	{
		id: 3,
		title: 'Fill Phone',
		icon: <AiFillTwitterCircle />,
		childhidden: false,
		child: [],
	},
	{
		id: 4,
		title: 'Twitter',
		icon: <AiFillYoutube />,
		childhidden: false,
		child: [],
	},
	{
		id: 5,
		title: 'Tool',
		icon: <AiFillUpCircle />,
		childhidden: false,
		child: [],
	},
	{
		id: 6,
		title: 'YouTube',
		icon: <AiFillUnlock />,
		childhidden: false,
		child: [
			{ id: 1, title: 'child1', icon: <AiOutlineAccountBook /> },
			{ id: 2, title: 'child2', icon: <AiOutlineAppstore /> },
			{ id: 3, title: 'child3', icon: <AiOutlineAppstoreAdd /> },
			{ id: 4, title: 'child4', icon: <AiOutlineBlock /> },
		],
	},
	{
		id: 7,
		title: 'We chat',
		icon: <AiFillUpCircle />,
		childhidden: false,
		child: [],
	},
];
