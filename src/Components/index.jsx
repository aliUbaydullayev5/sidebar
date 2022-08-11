/** @format */

import React from 'react';
import { useState } from 'react';
import { data } from '../Mock/mock';
import { Block } from './style';

const Sidebar = () => {
	const [state, setState] = useState(false);
	const [mock, setMock] = useState(data);
	const hidenChild = (id) => {
		if (state) {
			setMock(
				mock.map((value) => ({
					id: value.id,
					title: value.title,
					icon: value.icon,
					childhidden: value.id === id ? !value.childhidden : false,
					child: value.child,
				})),
			);
		}
		console.log('active');
	};

	return (
		<Block wScroll={state} scroll='no'>
			<Block.Inset cursor={state}>
				<Block.ImgBlock className='nocopy' onClick={() => setState(!state)}>
					<Block.Image />
					<Block.LogoText>Webbrain</Block.LogoText>
				</Block.ImgBlock>
				<Block.Bottom>
					{mock.map((value, id) => (
						<Block.Icons
							onClick={() => hidenChild(value.id)}
							key={id}
							className='nocopy'>
							{value.icon}{' '}
							<Block.SelectTitle>
								{value.title} &nbsp;&nbsp;{' '}
								<Block.Strelka way={value.childhidden}>
									{value.child.length ? '⬇' : ''}
								</Block.Strelka>
							</Block.SelectTitle>
							<Block.ChildMain>
								{value.child.map(
									(v) =>
										value.childhidden && (
											<Block.Child>
												{v.icon} <p>{v.title}</p>
											</Block.Child>
										),
								)}
							</Block.ChildMain>
						</Block.Icons>
					))}
				</Block.Bottom>
			</Block.Inset>
		</Block>
	);
};

export default Sidebar;
