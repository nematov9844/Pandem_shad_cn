import Logo from "../../assets/Logo";
import { Button } from "../ui/button";

export default function SetUpt() {
  return (
    <div className="text-white w-full max-w-[1440px] mx-auto gap-5 flex flex-col justify-center items-center space-y-4 p-4">
        <div className="w-full md:w-1/2 mx-auto text-center flex flex-col gap-4 ">
        <h1 className="text-3xl md:text-5xl font-semibold">Instant setup, no custom code</h1>
        <p className="text-lg">Invite the bot, pick a channel, and you're set—no custom code needed, and no vendor lock-in.</p>
        <img src="https://s3-alpha-sig.figma.com/img/d6f5/b826/4acc86fb6785630909bde7ee015b304e?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qEf8ntTaJmGgXc3O9FJf-DmCxI8u96rN6xMnvmVvzypFMpG6Kl0yR0vHxKrxY5ZGe3W8z2LLHQCV5~XPYBHw51Hv7utKCSue05FLE1qAZYRlTQI08vdR7RAxaTtvcY1grDAGx2CEI6gNecV8v~goJ9WRfZxFY6Q3E1pu9vajQPgvoiYFny6fci7iJk6g3SLzTrmh~fVWuj1ULA-OQp8kwo8BA2I36JrXNOEdcZbjG2WrIDtR6PnGfBWMKZqd0nBpmLp5HgLI7X1Qk3Lq1Cjyf9xsnIYO877BucpbxbpVEXhZWgIGgdIUM~IqalEdyxAy~cSTki1e6bfFUNVBMcZ-qw__" alt="uz" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl md:text-5xl font-semibold">Get in touch</h1>
            <p className="text-sm">Request a demo, or hop on a call.</p>
            <Button variant="outline" className="text-black">Get started</Button>
        </div>
        <div className="w-full flex justify-between items-center p-4 border-t border-gray-300">
            <div className="flex items-center space-x-2">
                    <Logo />
                    <span className="text-2xl font-bold text-white">Pandem</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <p>contact us</p>
                    <p>terms of service</p>
                  </div>
        </div>
    </div>
  )
}
