/** @format */

import CardIcon1 from "../../assets/icon/CardIcon1";
import CardIcon2 from "../../assets/icon/CardIcon2";
import CardIcon3 from "../../assets/icon/CardIcon3";

type DataItem = {
	id: number;
	img: JSX.Element | string;
	title: string;
	description: string;
};

const data: DataItem[] = [
	{
		id: 1,
		img: <CardIcon1 />,
		title: "Fix emergencies fast",
		description:
			"Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks",
	},
	{
		id: 2,
		img: <CardIcon2 />,
		title: "Universally compatible",
		description:
			"Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system",
	},
	{
		id: 3,
		img: <CardIcon3 />,
		title: "Secure for your org",
		description: "We keep your data safe by taking top security measures.",
	},
];

export default function Quick() {
	return (
		<div className='w-full max-w-[1440px] mt-5 mx-auto text-white font-inter flex flex-col gap-5 justify-center items-center font-semibold'>
			<h1 className='text-3xl md:text-5xl text-center'>Quick solutions, less stress</h1>
			<div className='w-full md:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 justify-center gap-4 mx-auto items-center'>
				{data.map((item) => (
					<div
						key={item.id}
						className='flex flex-col px-4 justify-start gap-4 items-start h-60 w-full md:max-w-[300px]'>
						<div className='w-12 h-12  rounded-md border border-gray-300 flex justify-center items-center'>
							{item.img}
						</div>
						<h3 className='text-2xl font-semibold'>{item.title}</h3>
						<p className='text-sm'>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
