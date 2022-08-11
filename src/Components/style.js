/** @format */

import styled from 'styled-components';
import logo from '../Assets/logo.svg';

const Block = styled.div`
	height: 97%;
	margin-left: 15px;
	border-radius: 40px;
	background-color: white;
	box-shadow: 0 0 5px 2px #000 inset;
	overflow-x: scroll;
	transition: 0.3s;
	overflow: hidden;
	width: ${({ wScroll }) => (wScroll ? '300px' : '80px')};
	::-webkit-scrollbar {
		display: none;
	}
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		display: none;
	}
	::-webkit-scrollbar-thumb:hover {
		display: none;
	}
`;
Block.Inset = styled.div`
	width: 300px;
	height: 100%;
	border-radius: 40px;
	cursor: ${({ cursor }) => (cursor ? 'auto' : 'pointer')};
	display: grid;
	grid-template-rows: 80px 1fr;
`;
Block.ImgBlock = styled.div`
	padding-top: 10px;
	width: 300px;
	display: grid;
	grid-template-columns: 80px 1fr;
	justify-content: center;
	align-items: center;
`;
Block.LogoText = styled.div`
	font-size: 30px;
	font-weight: 500;
`;
Block.Image = styled.img.attrs({
	src: `${logo}`,
})`
	width: 70px;
	margin-left: 3px;
`;
Block.Bottom = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding-top: 20px;
`;

Block.Icons = styled.div`
	font-size: 35px;
	padding-left: 22px;
	display: grid;
	align-items: center;
	grid-template-columns: 33px 1fr;
	gap: 25px;
	cursor: pointer;
	transition: 0.2s;
	padding-right: 15px;
	:hover {
		color: red !important;
	}
`;
Block.SelectTitle = styled.div`
	display: inline-block;
	font-size: 22px;
`;

Block.ChildMain = styled.div`
	grid-column: 1/3;
	padding-left: 25px;
`;
Block.Child = styled.div`
	font-size: 22px;
	> p {
		font-size: 18px;
		display: inline-block;
	}
`;

Block.Strelka = styled.div`
	display: inline-block;
	transition: 0.2s;
	transform: rotate(${({ way }) => (way ? '180deg' : '0deg')});
`;

export { Block };
