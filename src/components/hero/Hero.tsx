/** @format */

import { Button } from "../ui/button";

export default function Hero() {
	return (
		<div className='w-full  max-w-[1440px] mx-auto gap-5 flex flex-col justify-center items-center space-y-4 text-white p-4'>
			<div className="h-[70vh] max-h-[600px] flex flex-col justify-center items-center space-y-4 w-full md:w-[50%] text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold">Information you need during on-call emergencies</h1>
			<h5 className="font-light">
				Quickly link new on-call tickets to similar past incidents and their solutions. All directly
				in Slack the moment an incident happens.
			</h5>
			<Button variant={"outline"} className="text-black">Get Started</Button>
            </div>
            <div className="w-[90%] h-[50%]">
                <img className="max-w-full max-h-full" src="https://s3-alpha-sig.figma.com/img/d6f5/b826/4acc86fb6785630909bde7ee015b304e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hwKxITMhdUII4HC2Wmh5AxvidinUsfHdz8GrKUoQJ~9OY58ST~IurOQqhpN~4ZEbJFYl82n5ilRuTzaw7ql4ezPD7viPvr7rG99cH1PJ4BPyFZiMTzhYSjKaz~Q3xVV55XOq4NIXgQO6ZQXltUfRsDRK-RATcEFbeW8nMzq8uQp0UyoEoDdtBE5tSL~xspe1dsW6UidG~aGFHzkunTwWmoJRUzuanjbqWSJRNsuYMNBWqKVT~yrftNmKYd577GZ6~prxk3vBNTkLq2IJyc2StZRtPUni1iW59TPT23r5MiLE-DGxnLnHaTNoWDyCJhJPcD62RE0wsxrx1E08y4rbIg__" alt="" />
            </div>
		</div>
	);
}
